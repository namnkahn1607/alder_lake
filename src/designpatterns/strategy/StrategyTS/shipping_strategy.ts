/* STRATEGY INTERFACE */
interface ShippingStrategy {
    calculateCost(weight: number): number;
}

/* CONCRETE STRATEGY */
class FedEx implements ShippingStrategy {
    calculateCost(weight: number): number {
        return 5.00 + weight * 2.50;
    }
}

class USPSEconomy implements ShippingStrategy {
    calculateCost(weight: number): number {
        return 10.00;
    }
}

class DHLPriority implements ShippingStrategy {
    calculateCost(weight: number): number {
        return weight * 4.00;
    }
}

export type { ShippingStrategy };
export { FedEx, USPSEconomy, DHLPriority };