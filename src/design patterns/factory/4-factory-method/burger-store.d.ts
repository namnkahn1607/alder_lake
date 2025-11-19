import { Burger, BurgerType } from './abstract-burger';

abstract class BurgerStore {
    abstract createBurger(type: string): Burger;

    orderBurger(type: Burger): Burger {
        const burger = this.createBurger(type);
        console.log(`making a ${type} burger`);
        burger.cook();
        burger.prepare();
        burger.serve();

        return burger;
    }
}

export { BurgerStore };