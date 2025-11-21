#include "decorator.hpp"
#include <iostream>

int main() {
    auto myDrink = std::make_unique<DarkRoast>();
    std::make_unique<EspressoDecorator>(std::move(myDrink));
    std::make_unique<CreamDecorator>(std::move(myDrink));
    std::make_unique<FoamDecorator>(std::move(myDrink));

    std::cout << "Cost: $" << myDrink->cost() << std::endl;
    std::cout << "Description: " << myDrink->description() << std::endl; 

    return 0;
}