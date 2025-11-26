package challenges.observer.crypto;

import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/* CONCRETE SUBJECT */
public class OrderBook {
    
    private final PriorityQueue<Order> buys;
    private final PriorityQueue<Order> sells;

    /** Concurrent ArrayList
     * - This allow iterating and modifying to happend at the same time
     * -> Iterating over the list while any Observer call unsubscribe().
     * -> Perfect for High Read (notify), Low Write (subscribe). 
     * 
     * - We need this to encounter the Suicidal
     */
    private final List<OrderBookObserver> observers = new CopyOnWriteArrayList<>();

    /** Async Decoupling
     * - Observer like AuditLogger and FraudMonitor reads the mail very slow.
     * -> We need to do other things while waiting for them.
     * 
     * - By signing up for multi-threading, we can now be able to notify() without
     * having to wait for the Subscriber to read the email - Subject puts the mail
     * in mailbox and walks away.
     */
    private final ExecutorService notificationPool = Executors.newCachedThreadPool(); // dynamic ThreadPool

    public OrderBook() {
        /* Max Priority Queue - access highest price Order */
        this.buys = new PriorityQueue<>(
            (o1, o2) -> Double.compare(o2.price(), o1.price())
        );

        /* Min Priority Queue - access lowest price Order */
        this.sells = new PriorityQueue<>(
            Comparator.comparingDouble(Order::price)
        );
    }

    public void subscribe(OrderBookObserver o) {
        observers.add(o);
    }

    public void unsubscribe(OrderBookObserver o) {
        observers.remove(o);
    }

    /* Asynchromous notifying() - 'Announce multiple Observer at once'. */
    private void notifyObservers(MarketEvent event) {
        for (OrderBookObserver observer : observers) {
            // Submitting a task to a dynamic Thread
            notificationPool.submit(() -> {
                try {
                    observer.onEvent(event);
                } catch (Exception e) {
                    System.err.println(String.format(
                        "Observer failed: %s", e.getMessage()
                    ));
                }
            });
        }
    }

    /** Synchronized placeOrder(Order)
     * - Only one Thread can call to placeOrder(), as:
     * + PriorityQueue in Java does not work under concurrency.
     * + The workload includes: Process Order -> Making Announcement
     * 
     * - If multiple Threads can access, process and make call:
     * -> The Observer will quickly be overfed with notifications.
     * @param newOrder
     */
    public synchronized void placeOrder(Order newOrder) {
        boolean matched = false;

        if (newOrder.side() == Side.BUY) {
            while (!sells.isEmpty() && sells.peek().price() <= newOrder.price()) {
                // Match found -> remove from Queue.
                Order match = sells.poll();
                matched = true;

                /* Create an event and notify all Observers */
                MarketEvent event = new MarketEvent(
                    "TRADE", match, match.price(), System.currentTimeMillis()
                );
                notifyObservers(event);
                
                return;
            }

            // No match found -> add to Queue.
            if (!matched) {
                buys.add(newOrder);
            }

        } else {
            while (!buys.isEmpty() && buys.peek().price() >= newOrder.price()) {
                // Match found -> remove from Queue.
                Order match = buys.poll();
                matched = true;

                /* Create an event and notify all Observers */
                MarketEvent event = new MarketEvent(
                    "TRADE", match, match.price(), System.currentTimeMillis()
                );
                notifyObservers(event);
                
                return;
            }

            // No match found -> add to Queue.
            if (!matched) {
                buys.add(newOrder);
            }
        }
    }
}