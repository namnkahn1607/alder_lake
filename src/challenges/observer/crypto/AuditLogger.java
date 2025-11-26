package challenges.observer.crypto;

/** BLOCKING OBSERVER (concrete, I/O slow)
 * Persists every state change to a file on disk for regulatory compliance.
 * Extremely slow (I/O bound).
 */
public class AuditLogger implements OrderBookObserver {

    @Override
    public void onEvent(MarketEvent event) {
        try {
            // Stimulate slow I/O operation
            Thread.sleep(2000);
            System.out.println(String.format(
                "[Audit] Persisted trade to Disk: %d", event.executedOrder().id()
            ));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}