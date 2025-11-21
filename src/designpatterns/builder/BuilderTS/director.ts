import { Builder, HealthyBuilder, VeganBuilder } from "./builder.ts";

/** DIRECTOR 
 * Single-responsible Client-side 'interface' for 
 * Client code to interact with.
 */
class Director {
    static constructMeal(build: Builder) {
        build.addStarter().addMain().addDessert().addDrink();
    }
}

// Client code
const healthyBuilder = new HealthyBuilder();
Director.constructMeal(healthyBuilder);
const healthyMeal = healthyBuilder.build();

const veganBuilder = new VeganBuilder();
Director.constructMeal(veganBuilder);
const veganMeal = veganBuilder.build();

console.log(healthyMeal, veganMeal);

export { Director };