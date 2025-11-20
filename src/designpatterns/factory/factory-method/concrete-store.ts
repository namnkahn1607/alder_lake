import { Burger, BurgerType } from './abstract-burger';
import { BurgerStore } from './burger-store';
import { CheeseBurger, DeluxeCheeseBurger, VeganBurger } from './concrete-burger';

class CheeseBurgerStore extends BurgerStore {
    createBurger(type: BurgerType): Burger {
        switch(type) {
            case 'CHEESE': return new CheeseBurger();
            case 'DELUXE_CHEESE': return new DeluxeCheeseBurger();
            default:
                throw new Error('Unknown CheeseBurger');
        }
    }
}

class VeganBurgerStore extends BurgerStore {
    createBurger(type: BurgerType): Burger {
        if (type == 'VEGAN') {
            return new VeganBurger();
        }

        throw new Error('Unknown VeganBurger');
    }
}

/* You can absolutely implement more BurgerStore */

// Client code
const burger1 = new CheeseBurgerStore().orderBurger('DELUXE_CHEESE');
console.log(burger1);

const burger2 = new VeganBurgerStore().orderBurger('VEGAN');
console.log(burger2);