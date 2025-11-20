import { Burger } from './abstract-burger';

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

export { CheeseBurger, DeluxeCheeseBurger, VeganBurger };