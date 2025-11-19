abstract class Burger {
    abstract prepare(): void;
    abstract cook(): void;
    abstract serve(): void;
}

type BurgerType = 'CHEESE' | 
    'DELUXE_CHEESE' | 'VEGAN'; // add more Burger type here

export { Burger };
export type { BurgerType };