package challenges.adapter.fintech;

class RiskAnalysisException extends RuntimeException {

    public RiskAnalysisException(String message) {
        super(message);
    }
}

// This class is CLOSED for modification.
public final class LegacyRiskModule {
    /**
     * Calculates risk score.
     * @param amount - transaction amount.
     * @param mode - 0 for Credit, 1 for Debit. Wire Transfers NOT SUPPORTED.
     * @return 0 = Low Risk, 1 = Moderate Risk, 2 = High Risk
     * @throws RiskAnalysisException if internal DB connection fails.
     */
    public int assessRisk(double amount, int mode) throws RiskAnalysisException {
        if (amount < 0) {
            throw new IllegalArgumentException("Negative amount");
        }

        // ... complex internal math ...
        return 0;
    }
}