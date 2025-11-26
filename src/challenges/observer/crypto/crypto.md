# System Design Challenge: The Observer Pattern in High-Frequency Trading

## 1. The Scenario

You are building the core matching engine for a cryptocurrency exchange. This system handles the **Order Book**, where buy and sell orders are matched.

In a high-frequency trading (HFT) environment, latency is money. The matching engine must process orders in microseconds. However, whenever a trade occurs, several downstream systems must be notified immediately.

### The Actors

1. **The Subject (`OrderBook`):** The core engine. It holds a priority queue of Buy orders and Sell orders. It matches them and triggers events.

2. **Observer A (`TickerTape`):** Publishes the last trade price to the public API. Needs to be extremely fast.

3. **Observer B (`FraudMonitor`):** Checks for "wash trading" (illegal self-dealing). This requires heavy CPU calculation on the trade data.

4. **Observer C (`AuditLogger`):** Writes every trade to a physical disk for legal compliance. This is extremely slow (I/O bound).

### The Business Logic (`placeOrder`)

When a new order arrives, the `OrderBook` performs the following steps atomically:

1. **Lock** the book.

2. **Check** if the new order matches an existing order (Buy price >= Sell price).

3. **Update** the internal heaps (Remove matched orders or Add the new one).

4. **Notify** all observers if a trade occurred.

5. **Unlock**.

## 2. The Traps (Why the textbook Observer pattern fails)

If you implement the standard "Loop through observers and call `update()`" approach, your system will fail in production due to three specific traps:

### Trap A: The "Slow Neighbor" Problem

**The Issue:** The `AuditLogger` writes to disk. Disk I/O takes milliseconds (eternity in HFT).
**The Consequence:** If you call `auditLogger.onEvent()` synchronously inside your matching loop, the entire `OrderBook` freezes while waiting for the disk write. No other trades can happen. The exchange crashes.

### Trap B: The "Suicidal" Observer

**The Issue:** Imagine an Observer designed to listen for *one* specific event and then stop listening (e.g., "Alert me when Bitcoin hits \$100k"). Inside its `onEvent` method, it calls `orderBook.unsubscribe(this)`.
**The Consequence:** You are modifying a list (removing an item) while the `OrderBook` is currently iterating over that same list to send notifications. This causes a `ConcurrentModificationException` (or undefined behavior in C++), crashing the app.

### Trap C: The Phantom State

**The Issue:** The `OrderBook` is changing thousands of times per second.
**The Consequence:** If you pass a reference to the `OrderBook` to the `FraudMonitor`, by the time the monitor looks at the data, the state has changed 50 times. The monitor is analyzing "phantom" data that no longer exists.

## 3. The Solution: "Fire and Forget"

To survive these traps, we must decouple the *notification* from the *execution*.

### Concept 1: The Snapshot (Solving Trap C)

Instead of letting Observers look at the live `OrderBook`, we take a "photo" of the trade the exact moment it happens. This photo is **Immutable** (read-only).

* **Analogy:** Instead of telling a friend "Go look at the scoreboard," you hand them a printed photograph of the scoreboard. Even if the score changes 1 second later, the photograph remains accurate to that specific moment.

### Concept 2: Async Execution (Solving Trap A)

The `OrderBook` should not run the Observer's logic. It should only drop the message in a mailbox and return to work immediately.

* **Analogy:** A mailman doesn't wait for you to read your mail. He drops it in the box and goes to the next house. We use a **Thread Pool** to act as the delivery service.

### Concept 3: Copy-On-Write (Solving Trap B)

To handle observers leaving dynamically, we use a thread-safe list that creates a fresh copy of the array whenever it is modified.

* **Analogy:** You are reading a guest list. If someone wants to leave, you don't cross their name out on the list you are holding. You photocopy the list, cross it out on the *new* copy, and swap them for the next time you need to read it. The list currently in your hand remains valid.

## 4. The Implementation (Java)

```java
import java.util.*;
import java.util.concurrent.*;

// --- 1. THE DATA (Immutable Snapshot) ---
// This is the "Photograph". It cannot be changed once created.
// Solves Trap C (Phantom State).
record MarketEvent(String type, int orderId, double price, long timestamp) {}

// --- 2. THE INTERFACE ---
interface OrderBookObserver {
    void onEvent(MarketEvent event);
}

// --- 3. THE SUBJECT (OrderBook) ---
class OrderBook {
    // TRAP SOLVER: CopyOnWriteArrayList
    // Solves Trap B (Suicidal Observer).
    // Allows removing observers safely while iterating.
    private final List<OrderBookObserver> observers = new CopyOnWriteArrayList<>();

    // TRAP SOLVER: ExecutorService (Thread Pool)
    // Solves Trap A (Slow Neighbor).
    // The main thread matches orders; this pool handles notifying.
    private final ExecutorService notificationPool = Executors.newCachedThreadPool();

    public void subscribe(OrderBookObserver o) {
        observers.add(o);
    }

    public void unsubscribe(OrderBookObserver o) {
        observers.remove(o);
    }

    // The Critical Path (Business Logic)
    public void placeOrder(int orderId, double price) {
        // ... Complex Matching Logic happens here ...
        // ... Assume a match occurred ...
        
        System.out.println("[OrderBook] Trade Executed. Notifying observers...");

        // 1. Create the Snapshot
        MarketEvent event = new MarketEvent("TRADE", orderId, price, System.currentTimeMillis());

        // 2. Notify (Fire and Forget)
        notifyObservers(event);
        
        System.out.println("[OrderBook] Notification dispatched. I am free to process next order.");
    }

    private void notifyObservers(MarketEvent event) {
        for (OrderBookObserver observer : observers) {
            // We wrap the notification in a Runnable task
            notificationPool.submit(() -> {
                try {
                    // This runs on a BACKGROUND thread.
                    // Even if this takes 10 seconds, the OrderBook is already gone.
                    observer.onEvent(event);
                } catch (Exception e) {
                    System.err.println("Observer crashed: " + e.getMessage());
                }
            });
        }
    }
}

// --- 4. THE OBSERVERS ---

class SlowAuditLogger implements OrderBookObserver {
    public void onEvent(MarketEvent event) {
        try {
            // Simulate 2-second disk write
            Thread.sleep(2000); 
            System.out.println("   [AuditLogger] Written to disk: " + event.orderId());
        } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}

class SuicidalObserver implements OrderBookObserver {
    private final OrderBook book;
    public SuicidalObserver(OrderBook book) { this.book = book; }

    public void onEvent(MarketEvent event) {
        System.out.println("   [Suicidal] I saw one trade. Unsubscribing!");
        // TRAP TRIGGER: Modifying the list during notification
        book.unsubscribe(this); 
    }
}

// --- 5. EXECUTION ---
public class Simulation {
    public static void main(String[] args) throws InterruptedException {
        OrderBook engine = new OrderBook();
        
        engine.subscribe(new SlowAuditLogger());
        engine.subscribe(new SuicidalObserver(engine));

        // Start the engine
        engine.placeOrder(101, 50000.0);
        
        // Wait to see async output
        Thread.sleep(3000);
        engine.notificationPool.shutdown();
    }
}