package challenges.adapter.fintech;

public class PaymentProcessor {
    
    private IFraudChecker fraudChecker;

    public PaymentProcessor(IFraudChecker fraudChecker) {
        this.fraudChecker = fraudChecker;
    }

    public void processPayment(Transaction transaction) {
        if (fraudChecker.validate(transaction)) {
            System.out.println(String.format("Processing payment of $%d", transaction.getAmount()));
            return;
        }

        System.out.println("FRAUD DETECTED. Transaction blocked!"); 
    }
}
