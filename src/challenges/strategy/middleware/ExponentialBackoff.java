package challenges.strategy.middleware;

/* CONCRETE STRATEGY */
public class ExponentialBackoff implements RetryStrategy {

    @Override
    public long getWaitTime(int failedAttempts) {
        return (long) (Math.pow(2, failedAttempts) * 100);
    }
}