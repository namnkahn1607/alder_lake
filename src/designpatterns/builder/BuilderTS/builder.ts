import { Meal } from './meal.ts';

/** ABSTRACT/INTERFACE BUILDER
 * sketch out the construction process in details
 */
abstract class Builder {
    constructor(protected meal = new Meal()) {}

    abstract addStarter(): Builder;
    abstract addMain(): Builder;
    abstract addDessert(): Builder;
    abstract addDrink(): Builder;

    build(): Meal {
        return this.meal;
    }

    toString(): string {
        return `${this.meal}`;
    }
}

/** CONCRETE BUILDER
 * Each Builder is reponsible for a Product type.
 * One can choose single value among type's domain, or
 * can even omit the type entirely.
 */
class HealthyBuilder extends Builder {
    addStarter(): Builder {
        this.meal.setStart('SOUP');
        return this;
    }

    addMain(): Builder {
        this.meal.setMain('FISH');
        return this;
    }

    addDessert(): Builder {
        this.meal.setDessert('FRUIT_SALAD');
        return this;
    }

    addDrink(): Builder {
        this.meal.setDrink('FRUIT_JUICE');
        return this;
    }
}

class VeganBuilder extends Builder {
    addStarter(): Builder {
        this.meal.setStart('SALAD');
        return this;
    }

    addMain(): Builder {
        this.meal.setMain('VEGGIE_STIR_FRY');
        return this;
    }

    addDessert(): Builder {
        this.meal.setDessert('VEGAN_PUDDING');
        return this;
    }

    addDrink(): Builder {
        this.meal.setDrink('VEGAN_SHAKE');
        return this;
    }
}

// more Concrete Builder here...

export { Builder, HealthyBuilder, VeganBuilder };