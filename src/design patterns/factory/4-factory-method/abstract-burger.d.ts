abstract class Burger {
    abstract prepare(): void;
    abstract cook(): void;
    abstract serve(): void;
}

const BurgerType = Object.freeze({
    CHEESE: 'CHEESE',
    DELUXE_CHEESE: 'DELUXECHEESE',
    VEGAN: 'VEGAN',
});

export { Burger, BurgerType };