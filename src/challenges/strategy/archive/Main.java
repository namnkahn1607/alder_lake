package challenges.strategy.archive;

import java.io.File;

/* CLIENT */
public class Main {
    public static void main(String[] args) {
        DiskAllocator allocator = new DiskAllocator();
        
        // Policy A: High redundancy for critical data
        File file1 = new File("critical.txt");
        ArchiveManager criticalManager = new ArchiveManager(
            new Replication(5), // 5x replication
            allocator
        );
        criticalManager.storeFile(file1);

        // Policy B: Efficiency for cold storage
        File file2 = new File("4KVideos.zip");
        ArchiveManager coldManager = new ArchiveManager(
            new ErasureCoding(10, 4), // 10 data + 4 parity 
            allocator
        );
        coldManager.storeFile(file2);

        // Policy C: switching to Standard Erasure
        coldManager.setStorageStrategy(
            new ErasureCoding(4, 2) // 4 data + 2 parity
        );
        coldManager.storeFile(file2);
    }
}
