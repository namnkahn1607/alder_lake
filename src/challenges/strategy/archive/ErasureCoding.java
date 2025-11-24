package challenges.strategy.archive;

/* CONCRETE STRATEGY */
public class ErasureCoding implements StorageStrategy {

    private final int dataShards;
    private final int parityShards;

    /* Configuration Injection */
    public ErasureCoding(int dataShards, int parityShards) {
        this.dataShards = dataShards;
        this.parityShards = parityShards;
    }

    // Strategy Interface function
    @Override
    public void store(byte[] data, DiskAllocator allocator) {
        allocator.getAvailableDisks(dataShards + parityShards);
        System.out.println(String.format(
            "Splitting into %d + %d shards...", dataShards, parityShards
        ));
        
        // Perform Erasure Coding
        erasureCoding(dataShards, parityShards);
        System.out.println("Stored via Erasure Coding");
    }

    private void erasureCoding(int N, int M) {
        /* Erasure Coding detail implementation */
    }
}