package challenges.strategy.network;

/* STRATEGY INTERFACE */
public interface RetryStrategy {
    /**
     * Returns the time in ms to wait before the next attempt.
     * Returns -1 if we should stop retrying.
     * @param failedAttempts
     */
    long getWaitTime(int failedAttempts);
}