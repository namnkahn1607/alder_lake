abstract class Burger {
    abstract prepare(): void;
    abstract cook(): void;
    abstract serve(): void;
}

type BurgerType = 'CHEESE' | 'DELUXE_CHEESE' | 'VEGAN'; // add more Burger type here

class CheeseBurger extends Burger {
    prepare(): void {}

    cook(): void {}

    serve(): void {}
}

class DeluxeCheeseBurger extends Burger {
    prepare(): void {}

    cook(): void {}

    serve(): void {}
}

class VeganBurger extends Burger {
    prepare(): void {}

    cook(): void {}

    serve(): void {}
}

/* and yes... more Burgers = more concrete classes */

export { Burger };
export type { BurgerType };
export { CheeseBurger, DeluxeCheeseBurger, VeganBurger };