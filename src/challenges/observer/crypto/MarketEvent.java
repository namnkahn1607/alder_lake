package challenges.observer.crypto;

/** Immutable Event
 * - As OrderBook might change VERY FAST, passing its reference to the
 * Observer will cause 'Phantom State' to happen.
 * -> Expected this specific Observer to work at time the Trade happens,
 * but when the reference is passed, OrderBook has processed Trade B.
 * 
 * - We need a 'Photographer' to snap at time Internal State of the 
 * OrderBook.
 * -> Use this record for quickly snapshot .
 */
public record MarketEvent(
    String type, Order executedOrder, double executionPrice, long timestamp
) {}