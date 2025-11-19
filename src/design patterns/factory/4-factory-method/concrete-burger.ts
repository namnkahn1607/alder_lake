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

export { CheeseBurger, DeluxeCheeseBurger, VeganBurger };