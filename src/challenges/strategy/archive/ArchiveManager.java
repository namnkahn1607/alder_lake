package challenges.strategy.archive;

import java.io.File;

/* CONTEXT */
public class ArchiveManager {

    private StorageStrategy strategy;
    private DiskAllocator allocator;

    /** ArchiveManager does not aware of how many disk to ask for?
     * -> ask DiskAllocator.
     * @param strategy
     * @param allocator
     */
    public ArchiveManager(StorageStrategy strategy, DiskAllocator allocator) {
        this.strategy = strategy;
        this.allocator = allocator;
    }

    /** Strategy Switcher
     * - ArchiveManager should also not aware of the detail
     * configuration fields of the StorageStrategy.
     * @param strategy
     */
    public void setStorageStrategy(StorageStrategy strategy) {
        this.strategy = strategy;
    }
    
    public void storeFile(File file) {
        // Use the defined StorageStrategy
        this.strategy.store(new byte[2], allocator); // stub
    }
}
