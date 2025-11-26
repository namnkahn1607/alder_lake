package challenges.observer.crypto;

/** FAST OBSERVER (concrete)
 * Publishes the current spread (difference between highest buy and lowest 
 * sell) to the public API. Needs to be fast.
 */
public class TickerTape implements OrderBookObserver {

    @Override
    public void onEvent(MarketEvent event) {
        System.out.println(String.format(
            "[Ticker] New Trade: %.2f", event.executionPrice()
        ));
    }
}