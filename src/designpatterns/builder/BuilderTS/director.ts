import { HealthyBuilder, VeganBuilder } from "./builder";

class Director {
    constructHealthyMeal(builder: HealthyBuilder) {
        builder.addStarter().addMain().addDessert().addDrink();
    }

    constructVeganMeal(builder: VeganBuilder) {
        builder.addStarter().addMain().addDessert().addDrink();
    }

    // establish more combinations here...
}

export { Director };