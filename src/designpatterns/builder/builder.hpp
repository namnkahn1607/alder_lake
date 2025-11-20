#pragma once

#include "meal.hpp"

class Builder {
protected:
    Meal meal;

    Builder(Meal _meal) : meal(_meal) {}

public:
    virtual Builder* addStarter();
    virtual Builder* addMain();
    virtual Builder* addDessert();
    virtual Builder* addDrink();
    
    Meal build() {
        return meal;
    }
};