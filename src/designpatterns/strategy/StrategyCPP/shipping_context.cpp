#include "shipping_strategy.hpp"
#include <iostream>
#include <memory>
#include <stdexcept>
using namespace std;

class ShippingContext {
private:
    unique_ptr<ShippingStrategy> strategy;

public:
    ShippingContext(unique_ptr<ShippingStrategy> s)
        : strategy(move(s)) {}

    void setStrategy(unique_ptr<ShippingStrategy> newStrategy) {
        strategy = move(newStrategy);
    }

    double getShippingCost(double packageWeight) {
        if (packageWeight < 0) {
            throw invalid_argument("Weight must be positive");
        }

        return strategy->calculateCost(packageWeight);
    }
};

int main() {
    double packageWeight = 20;

    try {
        ShippingContext context(make_unique<FedEx>());
        double fedExCost = context.getShippingCost(packageWeight);

        context.setStrategy(make_unique<USPSEconomy>());
        double USPSCost = context.getShippingCost(packageWeight);

        context.setStrategy(make_unique<DHLPriority>());
        double DHLCost = context.getShippingCost(packageWeight);

        cout << fedExCost << ' ' << USPSCost << ' ' << DHLCost << endl;
    } catch (const exception& e) {
        cerr << "Error: " << e.what() << endl;
    }

    return 0;
}