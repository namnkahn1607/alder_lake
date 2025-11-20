import { Burger } from './abstract-burger';
import type { BurgerType } from './abstract-burger';

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

export { BurgerStore };