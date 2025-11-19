import { Burger, BurgerType } from './abstract-burger';
import { BurgerStore } from './burger-store';
import { CheeseBurger, DeluxeCheeseBurger, VeganBurger } from './concrete-burger';

class CheeseBurgerStore extends BurgerStore {
    createBurger(type: string): Burger {
        switch(type) {
            case BurgerType.CHEESE: return new CheeseBurger();
            case BurgerType.DELUXE_CHEESE: return new DeluxeCheeseBurger();
            default:
                throw new Error('Unknown CheeseBurger');
        }
    }
}

class VeganBurgerStore extends BurgerStore {
    createBurger(type: string): Burger {
        if (type == BurgerType.VEGAN) {
            return new VeganBurger();
        }

        throw new Error('Unknown VeganBurger');
    }
}

// Client code
const burger1 = new CheeseBurgerStore().createBurger('DELUXECHEESE');
console.log(burger1);

const burger2 = new VeganBurgerStore().createBurger('VEGAN');
console.log(burger2);