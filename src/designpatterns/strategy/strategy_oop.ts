/** CONTEXT
 * defines the interface to the clients an environment
 * where multiple Strategies can be applied.
 */
class Context {
    constructor(private strategy: Strategy) {}

    // allowing switching Strategy at runtime
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    doSomething(data: Array<string>): void {
        const ans = this.strategy.doAlgorithm(data);
        console.log(ans.join(''));
    }
}

/** STRATEGY (interface)
 * declares common operation to all supported algorithms.
 * - Context will interact with Concrete Strategies thru 
 * this Interface.
 */
interface Strategy {
    doAlgorithm(data: Array<string>): Array<string>;
}

/** CONCRETE STRATEGY 
 * implements the algorithms following convention by the
 * Interface; interchangeable in Context.
 */
class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.reverse();
    }
}

export type { Strategy, Context };

// Client code
const context = new Context(new ConcreteStrategyA());
const data = ['a', 'd', 'b', 'e', 'f', 'i', 'c'];
console.log('Original data:', data.join(''));

console.log('[Client] Set to sorting mode');
context.doSomething(data.slice());

console.log('[Client] Set to reverse mode');
context.setStrategy(new ConcreteStrategyB());
context.doSomething(data.slice());
