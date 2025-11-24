package challenges.strategy.archive;

/* INTERFACE */
public interface StorageStrategy {
    void store(byte[] data, DiskAllocator allocator);
}