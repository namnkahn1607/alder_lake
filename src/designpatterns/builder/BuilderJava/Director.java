package designpatterns.builder.BuilderJava;

public class Director {

    void constructHealthyMeal(HealthyBuilder builder) {
        builder.addStarter().addMain().addDessert().addDrink();
    }

    void constructVeganMeal(VeganBuilder builder) {
        builder.addStarter().addMain().addDessert().addDrink();
    } 
}