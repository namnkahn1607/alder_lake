#include "concrete_builder.hpp"

class Director {
public:
    static void constructMeal(Builder& builder) {
        builder.addStarter().addMain().addDessert().addDrink();
    }
};

int main() {
    VeganBuilder veganBuilder;

    Director::constructMeal(veganBuilder);
    std::unique_ptr<Meal> veganMeal = veganBuilder.build();
    
    return 0;
}