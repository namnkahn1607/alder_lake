package designpatterns.builder.BuilderJava;

public class HealthyBuilder extends Builder {

    @Override
    public Builder addStarter() {
        meal.setStart(Starter.SOUP);
        return this;
    }

    @Override
    public Builder addMain() {
        meal.setMain(Main.FISH);
        return this;
    }

    @Override
    public Builder addDessert() {
        meal.setDessert(Dessert.FRUIT_SALAD);
        return this;
    }

    @Override
    public Builder addDrink() {
        meal.setDrink(Drink.FRUIT_JUICE);
        return this;
    }
}