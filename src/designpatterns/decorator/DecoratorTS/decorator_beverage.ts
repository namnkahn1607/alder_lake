import { Beverage, LightRoast } from "./beverage.ts";

/** ABSTRACT/INTERFACE DECORATOR
 * Decorate prefers Composition over Inheritance to avoid the
 * Diamond problem - which is tricky.
 * Inheritance allows error to be 'inheritable'.
 * Abstract Decorator will inherits Abstract Component, why?
 * -> enabling multi-layer Decorators - it can be wrapped by
 * another Decorator.
 * -> interchangable with Component.
 */
abstract class BeverageDecorator extends Beverage {
    constructor(protected beverage: Beverage) { super(); }
}

/** CONCRETE DECORATOR
 * Each Decorator is responsible for a way to decorate.
 */
class EspressoDecorator extends BeverageDecorator {
    constructor(beverage: Beverage) {
        super(beverage); 
    }

    cost(): number {
        return 0.5 + this.beverage.cost();
    }

    description(): string {
        return `${this.beverage.description()}, Espresso`;
    }
}

class CreamDecorator extends BeverageDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    cost(): number {
        return 0.3 + this.beverage.cost();
    }

    description(): string {
        return `${this.beverage.description()}, Cream`;
    }
}

class FoamDecorator extends BeverageDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    cost(): number {
        return 0.2 + this.beverage.cost();
    }

    description(): string {
        return `${this.beverage.description()}, Foam`;
    }
}

// add more Decorators here...

// Client code
const beverage = new FoamDecorator(
    new CreamDecorator(
        new EspressoDecorator(new LightRoast())
    )
);

console.log(beverage.cost());
console.log(beverage.description());