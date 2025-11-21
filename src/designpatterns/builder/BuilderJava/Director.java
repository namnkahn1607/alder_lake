package designpatterns.builder.BuilderJava;

public class Director {
    
    static void constructMeal(Builder builder) {
        builder.addStarter().addMain().addDessert().addDrink();
    }

    public static void main(String[] args) {
        Builder veganBuilder = new VeganBuilder();
        Director.constructMeal(veganBuilder);

        Meal veganMeal = veganBuilder.build();
        System.out.println(veganMeal);
    }
}