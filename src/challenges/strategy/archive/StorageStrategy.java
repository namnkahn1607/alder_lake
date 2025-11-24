package challenges.strategy.archive;

/* STRATEGY INTERFACE */
public interface StorageStrategy {
    void store(byte[] data, DiskAllocator allocator);
}