#pragma once

#include "meal.hpp"
#include <memory>

class Builder {
protected:
    std::unique_ptr<Meal> meal;

public:
    Builder() { reset(); }
    virtual ~Builder() = default;

    void reset() {
        meal = std::make_unique<Meal>();
    }

    virtual Builder& addStarter() = 0;
    virtual Builder& addMain() = 0;
    virtual Builder& addDessert() = 0;
    virtual Builder& addDrink() = 0;
    
    std::unique_ptr<Meal> build() {
        return std::move(meal);
    }
};