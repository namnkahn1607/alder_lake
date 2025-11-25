package challenges.strategy.middleware;

/* CONCRETE STRATEGY */
public class NoRetry implements RetryStrategy {
    
    @Override
    public long getWaitTime(int failedAttempts) {
        // Direct throw, no wait time calculation
        return -1;
    }
}
