/** ABSTRACT PRODUCT
 * much like Factory, we declare the general Interface for Product.
 * - The goal is to make all Products of the same family follow
 * the same Interface.
 */
interface ProductA {
    doSthA(): string;
}

/** CONCRETE PRODUCT(s)
 * complete the behavior of the hardcoded Product of a specific
 * Product family.
 */
class ConcreteProductA1 implements ProductA {
    doSthA(): string {
        return 'The result of product A1.';
    }   
}

class ConcreteProductA2 implements ProductA {
    doSthA(): string {
        return 'The result of product A2.';
    }
}

/** ABSTRACT PRODUCT
 * another Interface of another Product family.
 * - Product of distinct family can behave differently.
 */
interface ProductB {
    doSthB(): string;

    doSthMoreB(collab: ProductA): string;
}

/** CONCRETE PRODUCT(s)
 * complete the behavior of the hardcoded Product of a specific
 * Product family.
 */
class ConcreteProductB1 implements ProductB {
    doSthB(): string {
        return 'The result of product B1';
    }

    doSthMoreB(collab: ProductA): string {
        const result = collab.doSthA();
        return `The result of product B1 with ${result}`;
    }
}

class ConcreteProductB2 implements ProductB {
    doSthB(): string {
        return 'The result of product B2';
    }

    doSthMoreB(collab: ProductA): string {
        const result = collab.doSthA();
        return `The result of product B2 with ${result}`;
    }
}

/** ABSTRACT FACTORY
 * an Interface with a list of methods used for creating Product
 * of the same Product family.
 * - The Client only cares about this Factory without acknowledging
 * the Concrete ones.
 */
interface Factory {
    createProductA(): ProductA;

    createProductB(): ProductB;
}

/** CONCRETE FACTORY(ies)
 * implement creation method for each Product family, and might
 * include the family's own business logic.
 * - The returning Products are always in Abstract Product type,
 * that way Client will not get coupled into a specific Concrete
 * Product.
 */
class ConcreteFactory1 implements Factory {
    createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements Factory {
    createProductA(): ProductA {
        return new ConcreteProductA2();
    }

    createProductB(): ProductB {
        return new ConcreteProductB2();
    }
}

// Client code
const clientCode = (factory: Factory) => {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.doSthB());
    console.log(productB.doSthMoreB(productA));
};

console.log('[Client] Testing the first Factory type');
clientCode(new ConcreteFactory1());

console.log('');

console.log('[Client] Testing the second Factory type');
clientCode(new ConcreteFactory2());

/** Insights/Considerations:
 * 1. Abstract Factory is like a 2-dimensional Factory:
 * - Promote not only the growing number of Product types, but
 * also the number of Product families.
 *
 * - Practically, Abstract Product focus on the 1st Product
 * dimension, while Abstract Factory focus on the broader, 2nd
 * Product dimension.
 * 
 * 2. Abstract Factory = Factory + layer of abstraction to Factory:
 * - What if the Product has more dimension? That time we will
 * consider a more sophisticated Design Pattern - Builder.
 */