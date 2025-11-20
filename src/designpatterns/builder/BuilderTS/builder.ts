import { Meal } from './meal';

abstract class Builder {
    constructor(protected meal = new Meal()) {}

    abstract addStarter(): Builder;
    abstract addMain(): Builder;
    abstract addDessert(): Builder;
    abstract addDrink(): Builder;
}

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

export { HealthyBuilder, VeganBuilder };