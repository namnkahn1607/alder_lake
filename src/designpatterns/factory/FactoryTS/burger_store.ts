import { Burger } from './burger.ts';
import type { BurgerType } from './burger.ts';
import { CheeseBurger, DeluxeCheeseBurger, VeganBurger } from './burger.ts';

abstract class BurgerStore {
    /**
     * Factory Method defers the instantiation process to subclasses.
     */
    abstract createBurger(type: BurgerType): Burger;

    /**
     * Client code only needs to interact with {@method orderBurger(Burger)}
     * and specify the Burger type as string
     * @param type 
     * @returns 
     */
    orderBurger(type: BurgerType): Burger {
        const burger = this.createBurger(type);
        console.log(`making a ${type} burger`);
        
        burger.cook();
        burger.prepare();
        burger.serve();

        return burger;
    }
}

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