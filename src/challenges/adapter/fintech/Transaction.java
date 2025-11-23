package challenges.adapter.fintech;

public class Transaction {
    
    private double amount;
    private Type type;
    
    public enum Type {
        CREDIT, DEBIT, WIRE_TRANSFER
    }

    public Transaction(double amount, Type type) {
        this.amount = amount;
        this.type = type;
    }

    public double getAmount() {
        return amount;
    }

    public Type getType() {
        return type;
    }
}