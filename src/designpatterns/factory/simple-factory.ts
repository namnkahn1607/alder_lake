import { Burger } from './burger';

// all Burgers implements an interface
class CheeseBurger implements Burger {
    prepare() { console.log('Preparing CheeseBurger'); }

    price() { return 5.99; }
}

class DeluxeCheeseBurger implements Burger {
    prepare() { console.log('Preparing Deluxe CheeseBurger'); }

    price() { return 8.99; }
}

class VeganBurger implements Burger {
    prepare() { console.log('Preparing Burger for Vegs'); }

    price(): number { return 4.99; }
}

// Enums are not recommended in TS
enum BurgerType {
    CHEESEBURGER = 'CHEESEBURGER',
    DELUXE_CHEESEBURGER = 'DELUXE_CHEESEBURGER',
    VEGANBURGER = 'VEGANBURGER',
};

/** The Simple Factory
 * Analysis:
 * We want to 'encapsulate what varies', which is the {@enum BurgerType} in this context.
 * The goal is to seperate CREATIONAL logic with the CLIENT's logic.
 * 
 * Drawbacks:
 * Ended up modify {@method createBurger(BurgerType)} whenever a new BurgerType is
 * introduced -> violating Open/Closed principle.
 */
class SimpleBurgerFactory {
    createBurger(type: BurgerType): Burger {
        switch(type) {
            case BurgerType.CHEESEBURGER: return new CheeseBurger();
            case BurgerType.DELUXE_CHEESEBURGER: return new DeluxeCheeseBurger();
            case BurgerType.VEGANBURGER: return new VeganBurger();
            default:
                throw new Error(`BurgerType ${type} not in list`);
        }
    }
}