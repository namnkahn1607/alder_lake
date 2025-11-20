#include "healthy_builder.hpp"
#include "meal.hpp"

Builder* HealthyBuilder::addStarter() {
    meal.setStart(SOUP);
    return this;
}

Builder* HealthyBuilder::addMain() {
    meal.setMain(FISH);
    return this;
}

Builder* HealthyBuilder::addDessert() {
    meal.setDessert(FRUIT_SALAD);
    return this;
}

Builder* HealthyBuilder::addDrink() {
    meal.setDrink(FRUIT_JUICE);
    return this;
}