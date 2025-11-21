#pragma once

#include "beverage.hpp"
#include <memory>

#define unique_ptr std::unique_ptr

class BeverageDecorator : public Beverage {
protected:
    unique_ptr<Beverage> beverage;

public:
    explicit BeverageDecorator(unique_ptr<Beverage> b) 
        : beverage(std::move(b)) {}
};

class EspressoDecorator : public BeverageDecorator {
public:
    using BeverageDecorator::BeverageDecorator;

    double cost() override {
        return 0.5 + beverage->cost();
    }

    string description() const override {
        return beverage->description() + ", Espresso";
    }
};

class CreamDecorator : public BeverageDecorator {
    using BeverageDecorator::BeverageDecorator;

    double cost() override {
        return 0.3 + beverage->cost();
    }

    string description() const override {
        return beverage->description() + ", Cream";
    }
};

class FoamDecorator : public BeverageDecorator {
    using BeverageDecorator::BeverageDecorator;

    double cost() override {
        return 0.2 + beverage->cost();
    }

    string description() const override {
        return beverage->description() + ", Foam";
    }
};