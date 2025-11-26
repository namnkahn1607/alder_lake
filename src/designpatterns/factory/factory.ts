abstract class Creator {
    abstract factoryMethod(): Product;

    doSth(): string {
        const product = this.factoryMethod();
        return '[Creator] The same Creator\'s code has just worked'
            + `with ${product.operation()}`;
    }
}

class ConcreteCreatorA extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    operation(): string {
        return '{Result of the ConcreteProductA}';
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return '{Result of the ConcreteProductB}';
    }
}

// Client code
const clientCode = (creator: Creator) => {
    console.log(creator.doSth());
};

console.log('[App] Launched with ConcreteCreatorA');
clientCode(new ConcreteCreatorA());

console.log('');

console.log('[App] Launched with ConcreteCreatorB');
clientCode(new ConcreteCreatorB());