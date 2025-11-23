package challenges.adapter.fintech;

public class LegacyModuleAdapter implements IFraudChecker {
    
    private final LegacyRiskModule legacyModule;

    public LegacyModuleAdapter(LegacyRiskModule legacyModule) {
        if (legacyModule == null) {
            throw new IllegalArgumentException("Module cannot be null");
        }

        this.legacyModule = legacyModule;
    }

    @Override
    public boolean validate(Transaction t) {
        // Null safety
        if (t == null) {
            return false;
        }

        double amount = t.getAmount();
        Transaction.Type type = t.getType();

        // Wire Transfers are NOT supported -> Block them.
        if (type == Transaction.Type.WIRE_TRANSFER) {
            return false; // Fraud/Block
        }

        try {
            // Adapt the input
            int mode = typeToMode(type);
            int riskScore = legacyModule.assessRisk(amount, mode);
            
            // Adapt the output (0 -> Safe, otherwise -> Fraud)
            return (riskScore == 0);

        } catch (RiskAnalysisException e) {
            /** STRATEGY: "Fail Secure". If DB is down, do not approve money.
             * Handle the Checked Exception mismatch.
             */
            System.err.println("Risk Module failed: " + e.getMessage());
            return false; 
        }
    }

    private int typeToMode(Transaction.Type type) {
        return switch(type) {
            case CREDIT -> 0;
            case DEBIT -> 1;
            default -> throw new IllegalArgumentException(
                "Unsupported Type for Legacy Module: " + type
            );
        };
    } 
}