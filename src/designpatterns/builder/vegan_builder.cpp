#include "vegan_builder.hpp"
#include "meal.hpp"

Builder* VeganBuilder::addStarter() {
    meal.setStart(SALAD);
    return this;
}

Builder* VeganBuilder::addMain() {
    meal.setMain(VEGGIE_STIR_FRY);
    return this;
}

Builder* VeganBuilder::addDessert() {
    meal.setDessert(VEGAN_PUDDING);
    return this;
}

Builder* VeganBuilder::addDrink() {
    meal.setDrink(VEGAN_SHAKE);
    return this;
}