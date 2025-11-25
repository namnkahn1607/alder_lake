package challenges.strategy.middleware;

/* CONCRETE STRATEGY */
public class LinearBackoff implements RetryStrategy {

    private static final long COOLDOWN_MS = 100;
    
    @Override
    public long getWaitTime(int failedAttempts) {
        /* 100ms cooldown */
        return COOLDOWN_MS;
    }
}