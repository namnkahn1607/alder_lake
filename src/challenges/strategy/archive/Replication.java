package challenges.strategy.archive;

/* CONCRETE STRATEGY */
public class Replication implements StorageStrategy {
    // The System Policy will tell
    private final int replicationFactor;

    /* Configuration Injection */
    public Replication(int replicationFactor) {
        this.replicationFactor = replicationFactor;
    }

    @Override
    public void store(byte[] data, DiskAllocator allocator) {
        allocator.getAvailableDisks(replicationFactor);
        System.out.println(String.format(
            "Replicating data %d times", replicationFactor
        ));

        /* Perform Replication */
        replication();
        System.out.println("Stored via Replication");
    }

    private void replication() {
        /* Replication  */
    }
}