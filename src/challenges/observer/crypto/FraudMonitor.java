package challenges.observer.crypto;

/** BLOCKING OBSERVER (concrete, heavy compute)
 * Analyzes the last 100 orders to detect "wash trading" patterns.
 * Computationally expensive (CPU bound).
 */
public class FraudMonitor implements OrderBookObserver {

    @Override
    public void onEvent(MarketEvent event) {
        /* Extreme computational operation code */
        // Print out computational result
    } 
}