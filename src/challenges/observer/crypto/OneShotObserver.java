package challenges.observer.crypto;

/** SUICIDAL OBSERVER (concrete, die fast)
 * An arbitrary Obsever that witness a Trade and sign out immediately - maybe
 * use to stole information about an illegal Trade.
 * -> The root cause of ConcurrentModificationException if OrderBook use
 * normal ArrayList. 
 */
public class OneShotObserver implements OrderBookObserver {
    
    private final OrderBook subject;

    public OneShotObserver(OrderBook subject) {
        this.subject = subject;
    }

    @Override
    public void onEvent(MarketEvent event) {
        System.out.println(String.format(
            "[OneShot] I witnessed a trade! Unsubscribe now."
        ));
        subject.unsubscribe(this);
    }
}
