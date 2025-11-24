package challenges.strategy.archive;

/* CONCRETE STRATEGY */
public class GeoRedundancy implements StorageStrategy {

    /* Configuration fields and Injection constructor */
    
    @Override
    public void store(byte[] data, DiskAllocator allocator) {
        /* Perform Geo Redundancy */
        System.out.println("Stored via Geo Redundancy");
    }

    /** ... same as Erasure Coding or Replication if the
     * Strategy manages to consume different set of params.
     */
}