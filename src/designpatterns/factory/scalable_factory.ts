import type { Burger } from './burger.ts';

type BurgerConstructor = new () => Burger;

/** More Scalability Simple Factory
 * To address the weakness of switch statement, we instead focus on
 * initiating the Constructor instead.
 * -> Handling fully the BurgerType definition to the client.
 */
class ScalableBurgerFactory {
    private static registry = new Map<string, BurgerConstructor>();

    static registerBurger(type: string, constructor: BurgerConstructor) {
        this.registry.set(type, constructor);
    }

    createBurger(type: string): Burger {
        const BurgerClass = ScalableBurgerFactory.registry.get(type);

        if (!BurgerClass) {
            throw new Error('Burger not found on menu');
        }

        return new BurgerClass();
    }
}

export { ScalableBurgerFactory };