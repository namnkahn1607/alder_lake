interface AbstractProductA {
    doSthA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    doSthA(): string {
        return 'The result of product A1.';
    }   
}

class ConcreteProductA2 implements AbstractProductA {
    doSthA(): string {
        return 'The result of product A2.';
    }
}

interface AbstractProductB {
    doSthB(): string;

    doSthMoreB(collab: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    doSthB(): string {
        return 'The result of product B1';
    }

    doSthMoreB(collab: AbstractProductA): string {
        const result = collab.doSthA();
        return `The result of product B1 with ${result}`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    doSthB(): string {
        return 'The result of product B2';
    }

    doSthMoreB(collab: AbstractProductA): string {
        const result = collab.doSthA();
        return `The result of product B1 with ${result}`;
    }
}

interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

// Client code
const clientCode = (factory: AbstractFactory) => {
    const productA = factory.createProductA();
}