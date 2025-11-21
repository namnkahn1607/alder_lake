/** ABSTRACT/INTERFACE COMPONENT
 * This is the thing that Decorator targets to 
 * decorate (by extending).
 */
abstract class Beverage {
    abstract cost(): number;
    abstract description(): string;
}

/** CONCRETE COMPONENT
 * define 'hard-coded' Component for the Decorator.
 */
class DarkRoast extends Beverage {
    cost(): number { return 3.45; }

    description(): string { return "Dark Roast"; }
}

class LightRoast extends Beverage {
    cost(): number { return 3.45; }

    description(): string { return "Light Roast"; }
}

export { Beverage, DarkRoast, LightRoast };