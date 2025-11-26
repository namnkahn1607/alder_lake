package challenges.observer.crypto;

/** OBSERVER INTERFACE
 * Process on MarketEvent - the Snapshot of OrderBook's Internal State.
 */
public interface OrderBookObserver {

    void onEvent(MarketEvent event);
}