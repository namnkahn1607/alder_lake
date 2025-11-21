#pragma once

#include "builder.hpp"

class HealthyBuilder : public Builder {
public:
    Builder& addStarter() override {
        meal->setStart(Starter::SALAD);
        return *this;
    }

    Builder& addMain() override {
        meal->setMain(Main::FISH);
        return *this;
    }

    Builder& addDessert() override {
        meal->setDessert(Dessert::FRUIT_SALAD);
        return *this;
    }

    Builder& addDrink() override {
        meal->setDrink(Drink::FRUIT_JUICE);
        return *this;
    }
};

class VeganBuilder : public Builder {
public:
    Builder& addStarter() override {
        meal->setStart(Starter::VEGGIE_STICKS);
        return *this;
    }

    Builder& addMain() override {
        meal->setMain(Main::VEGGIE_STIR_FRY);
        return *this;
    }

    Builder& addDessert() override {
        meal->setDessert(Dessert::VEGAN_PUDDING);
        return *this;
    }
    Builder& addDrink() override {
        meal->setDrink(Drink::VEGAN_SHAKE);
        return *this;
    }
};