#include "burger.hpp"
#include <iostream>
#include <memory>
#include <stdexcept>
using namespace std;

class BurgerStore {
protected:
    virtual unique_ptr<Burger> createBurger(BurgerType type) = 0;

public:
    virtual ~BurgerStore() = default;

    unique_ptr<Burger> orderBurger(BurgerType type) {
        unique_ptr<Burger> burger = createBurger(type);

        if (burger) {
            burger->prepare();
            burger->cook();
            burger->serve();
        }

        return burger;
    }
};

class CheeseBurgerStore : public BurgerStore {
protected:
    unique_ptr<Burger> createBurger(BurgerType type) override {
        switch (type) {
            case BurgerType::CHEESE: 
                return make_unique<CheeseBurger>();
            case BurgerType::DELUXE_CHEESE: 
                return make_unique<DeluxeCheeseBurger>();
            default:
                throw new invalid_argument("Unknown CheeseBurger");
        }
    }
};

class VeganBurgerStore : public BurgerStore {
protected:
    unique_ptr<Burger> createBurger(BurgerType type) override {
        if (type == BurgerType::VEGAN) {
            return make_unique<VeganBurger>();
        }

        throw new invalid_argument("Unknown VeganBurger");
    }
};

int main() {
    try {
        CheeseBurgerStore cheeseStore; 
        
        cout << "--- Order 1 ---\n";
        auto burger1 = cheeseStore.orderBurger(BurgerType::DELUXE_CHEESE);

        cout << "\n--- Order 2 ---\n";
        VeganBurgerStore veganStore;
        auto burger2 = veganStore.orderBurger(BurgerType::VEGAN);

    } catch (const std::exception& e) {
        cerr << "Error: " << e.what() << endl;
    }

    return 0;
}