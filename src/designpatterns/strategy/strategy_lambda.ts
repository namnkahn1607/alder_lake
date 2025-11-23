// Prerequisite: Strategy design pattern - OOP version

/** 
 * A Functional Interface Strategy that only
 * consists of a single operation, is functionally
 * equivalent to a Lambda function.
 */
class Context {
    constructor(
        private strategy: (data: Array<string>) => void
    ) {}

    setStrategy(strategy: (data: Array<string>) => void) {
        this.strategy = strategy;
    }

    doSomething(data: Array<string>) {
        this.strategy(data);
    }  
}

// Client code
const context = new Context((data) => data.sort());
const data = ['a', 'd', 'b', 'e', 'f', 'i', 'c'];
console.log('Original data:', data.join(''));

console.log('[Client] Set to sorting mode');
context.doSomething(data.slice());

console.log('[Client] Set to reverse mode');
context.setStrategy((data) => data.reverse());
context.doSomething(data.slice());