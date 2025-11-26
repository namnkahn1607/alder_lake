package challenges.strategy.network;

/* CONTEXT */
public class RpcClient {
    
    private RetryStrategy retryStrategy;

    public RpcClient(RetryStrategy retrier) {
        this.retryStrategy = retrier;
    }

    public void setRetryStrategy(RetryStrategy strategy) {
        this.retryStrategy = strategy;
    }

    /** Rule of Thumbs:
     * Request-specific data (counters, timestamps) must live on the Stack 
     * (inside the method variables), not on the heap (class fields). 
     * 
     * - The System does not call send() at high frequency, each Thread 
     * call the method() to receive its own.
     * -> DO NOT USE 'synchronized' keyword in this context due to its
     * locking mechanism that only one Thread can execute synchronized
     * method/variable.
     * 
     * - The goal is to let multiple Thread(s) use send() at the same time.
     * -> We should open 'highways', not a single-lane dirt road!
     * 
     * - Shared states enable Concurrency issues, but local variables
     * live inside the Thread's own pocket -> No Concurrency issue!
     * @param req
     * @return
     * @throws NetworkException
     */
    public Response send(Request req) throws NetworkException {
        /* Local count for every Thread
        -> Thread-safe by any mean. */
        int attempt = 0;

        /* If the connection attempt fails, the System does not call
        another send() for Response, so we lock the retrying mechanism
        in an infinite loop. */
        while (true) {            
            try {
                return makeNetworkCall(req);
            } catch (NetworkException ne) {
                attempt += 1;
                
                // Strategy differs in wait time
                long waitTime = retryStrategy.getWaitTime(attempt);

                if (waitTime < 0) {
                    // Strategy said STOP
                    throw ne;
                }
                
                // Strategy said SUSPEND
                try {
                    Thread.sleep(waitTime);
                } catch (InterruptedException ie) {
                    // Experience interruption? -> interrupt the Thread
                    Thread.currentThread().interrupt();
                    throw new NetworkException("Interrupted while retrying");
                }
            }
        }
    }

    private Response makeNetworkCall(Request req) throws NetworkException {
        /* Network Calling implementation */
        return new Response("Successfully connected!");
    }
}