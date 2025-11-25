import { DHLPriority, FedEx, USPSEconomy, type ShippingStrategy } from './shipping_strategy.ts';

/* CONTEXT */
class ShippingContext {
    constructor(private strategy: ShippingStrategy) {}

    setStrategy(strategy: ShippingStrategy) {
        this.strategy = strategy;
    }

    getShippingCost(packageWeight: number): number {
        return this.strategy.calculateCost(packageWeight);
    }
}

// Client code
const context = new ShippingContext(new FedEx());
const packageWeight = 20;
const fedExCost = context.getShippingCost(packageWeight);

context.setStrategy(new USPSEconomy());
const USPSCost = context.getShippingCost(packageWeight);

context.setStrategy(new DHLPriority());
const DHLCost = context.getShippingCost(packageWeight);

console.log(fedExCost, USPSCost, DHLCost);