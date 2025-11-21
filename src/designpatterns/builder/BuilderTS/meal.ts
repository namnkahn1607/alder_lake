/** 
 * Types in TS (or Enum in other programming languages)
 * just to demonstrate the combinatorical number of combinations
 * if we were constructing class for each combination.
 */
type Starter = 'SALAD' | 'SOUP' | 'BRUSCHETTA' | 'VEGGIE_STICK' | 'CHICKEN_WINGS';
type Main = 'GRILLED_CHICKEN' | 'PASTA' | 'VEGGIE_STIR_FRY' | 'FISH' | 'PIZZA';
type Dessert = 'FRUIT_SALAD' | 'ICE_CREAM' | 'CHOCOLATE_CAKE' | 'VEGAN_PUDDING' | 'CHEESECAKE';
type Drink = 'WATER' | 'VEGAN_SHAKE' | 'SODA' | 'FRUIT_JUICE';

/** PRODUCT
 * complex object (end product) achieved at the end
 * of the construction process.
 */
class Meal {
    private start: Starter | null = null;
    private main: Main | null = null;
    private dessert: Dessert | null = null;
    private drink: Drink | null = null;

    getStart(): Starter | null { return this.start; }
    getMain(): Main | null { return this.main; }
    getDessert(): Dessert | null { return this.dessert; }
    getDrink(): Drink | null { return this.drink; }

    setStart(start: Starter) { this.start = start; }
    setMain(main: Main) { this.main = main; }
    setDessert(dessert: Dessert) { this.dessert = dessert; }
    setDrink(drink: Drink) { this.drink = drink; }

    toString(): string {
        return `${this.start} - ${this.main} - ${this.dessert} - ${this.drink}`;
    }
}

export type { Starter, Main, Dessert, Drink };
export { Meal };