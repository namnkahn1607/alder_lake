package challenges.strategy.network;

/* CONCRETE STRATEGY */
public class ExponentialBackoff implements RetryStrategy {

    @Override
    public long getWaitTime(int failedAttempts) {
        return (long) (Math.pow(2, failedAttempts) * 100);
    }
}