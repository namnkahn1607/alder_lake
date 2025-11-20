package designpatterns.builder.BuilderJava;

public class VeganBuilder extends Builder {

    @Override
    public Builder addStarter() {
        meal.setStart(Starter.SALAD);
        return this;
    }

    @Override
    public Builder addMain() {
        meal.setMain(Main.VEGGIE_STIR_FRY);
        return this;
    }

    @Override
    public Builder addDessert() {
        meal.setDessert(Dessert.VEGAN_PUDDING);
        return this;
    }

    @Override
    public Builder addDrink() {
        meal.setDrink(Drink.VEGAN_SHAKE);
        return this;
    }
}