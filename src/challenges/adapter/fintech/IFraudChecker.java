package challenges.adapter.fintech;

public interface IFraudChecker {
    // Clean -> True; Fraud -> False
    boolean validate(Transaction t);
}