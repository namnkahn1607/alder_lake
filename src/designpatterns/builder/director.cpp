#include "healthy_builder.hpp"
#include "vegan_builder.hpp"

class Director {
    void constructHealthyMeal(HealthyBuilder* builder) {
        builder->addMain()->addMain()->addDessert()->addDrink();
    }

    void constructVeganMeal(VeganBuilder* builder) {
        builder->addMain()->addMain()->addDessert()->addDrink();
    }
};