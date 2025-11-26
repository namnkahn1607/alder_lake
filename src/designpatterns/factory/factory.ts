/** PRODUCT INTERFACE
 * sets out common to all Products that are produced by Factories.
 * - Client will treat the Product through this Interface, assuming
 * all of them has the same Interface.
 */
interface Product {
    operation(): string;
}

/** CONCRETE PRODUCT(s)
 * define specific behavior of the Inteface they implement.
 */
class ConcreteProductA implements Product {
    operation(): string {
        return '{ Result of the ConcreteProductA }';
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return '{ Result of the ConcreteProductB }';
    }
}

/** ABSTRACT FACTORY
 * must have a Factory method that return Concrete Product, and 
 * the Product type must match the Product Interface.
 * - The functionality of this Abstract Factory is not only tied
 * to Product creation, it can have its own bussiness logic.
 */
abstract class Factory {
    abstract factoryMethod(): Product;

    doSth(): string {
        const product = this.factoryMethod();
        return '[Creator] The same Factory\'s code has just worked'
            + ` with ${product.operation()}`;
    }
}

/** CONCRETE FACTORY(IES)
 * overrides the abstract method from the Abstract Factory and
 * product different specific type of Concrete Product.
 * - Note that: they do not have to create new Product all the time,
 * it can return an instance from cache, object pool...
 */
class ConcreteFactoryA extends Factory {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteFactoryB extends Factory {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

// Client code
const clientCode = (creator: Factory) => {
    console.log(creator.doSth());
};

console.log('[App] Launched with ConcreteCreatorA');
clientCode(new ConcreteFactoryA());

console.log('');

console.log('[App] Launched with ConcreteCreatorB');
clientCode(new ConcreteFactoryB());