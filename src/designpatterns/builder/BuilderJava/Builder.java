package designpatterns.builder.BuilderJava;

public abstract class Builder {

    protected Meal meal = new Meal();
    
    abstract Builder addStarter();
    abstract Builder addMain();
    abstract Builder addDessert();
    abstract Builder addDrink();

    Meal build() {
        return this.meal;
    }
}
