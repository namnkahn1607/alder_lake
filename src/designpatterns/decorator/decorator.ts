/** COMPONENT INTERFACE
 * - All wrappeds and wrappers must follow this same
 * Interface.
 */
interface Component {
    operation(): string;
}

/** CONCRETE COMPONENT
 * - Components that are meant to be wrapped by another
 * Components (wrappers).
 */
class ConcreteComponent implements Component {
    operation(): string {
        return 'ConcreteComponent';
    }
}

/** ABSTRACT DECORATOR
 * declares the total structure for Decorators, which are
 * basically wrappers.
 * - Here we make it implements the same Interface as
 * Component, since it can be wrapped by another Decorator.
 */
abstract class Decorator implements Component {
    constructor(protected component: Component) {}

    operation(): string {
        return this.component.operation();
    }
}

/** CONCRETE DECORATOR(s)
 * behave much like a normal Component, be able to be wrapped
 * by other Decorators.
 */
class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

// Client code
const clientCode = (component: Component) => {
    console.log(`Result: ${component.operation()}`);
};

console.log('[Client] I\'ve got a simple Component');
const simple = new ConcreteComponent();
clientCode(simple);

console.log('');

console.log('[Client] Now I decorate Component with some wrappers');
const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorB(decoratorA);
clientCode(decoratorB);