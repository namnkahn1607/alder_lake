package challenges.observer.crypto;

public class HFTSystem {
    public static void main(String[] args) throws InterruptedException {
        OrderBook orderBook = new OrderBook();
        
        // Wiring
        orderBook.subscribe(new TickerTape());
        orderBook.subscribe(new AuditLogger());
        
        OneShotObserver oneShot = new OneShotObserver(orderBook);
        orderBook.subscribe(oneShot);

        System.out.println("--- System Start ---");

        // 1. Add Liquidity (Sell Order)
        orderBook.placeOrder(new Order(
            1, Side.SELL, 100.0, 10, System.currentTimeMillis()
        ));
        
        // 2. Taker Order (Buy) -> Triggers Match -> Triggers Observers
        // This will trigger the AuditLogger (2 sec delay) AND OneShot (unsubscribe)
        System.out.println("--- Order 2 Coming In ---");
        orderBook.placeOrder(new Order(
            2, Side.BUY, 101.0, 10, System.currentTimeMillis()
        ));

        // 3. Fast Follow-up Order
        // If your system works, this prints IMMEDIATELY. 
        // If it blocks, this will wait 2 seconds.
        System.out.println("--- Order 3 Coming In (Should be fast) ---");
        orderBook.placeOrder(new Order(
            3, Side.BUY, 102.0, 10, System.currentTimeMillis()
        ));
        
        // Keep main thread alive to see async output
        Thread.sleep(3000);
    }
}