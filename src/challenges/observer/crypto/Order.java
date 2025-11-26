package challenges.observer.crypto;

enum Side { BUY, SELL }

public record Order(
    int id, Side side, double price, int quantity, long timestamp
) implements Comparable<Order> {

    // Comparable to support natural ordering
    @Override
    public int compareTo(Order other) {
        return Double.compare(price(), other.price());
    }
}