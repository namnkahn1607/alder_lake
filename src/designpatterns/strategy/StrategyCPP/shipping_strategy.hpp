#pragma once

class ShippingStrategy {
public:
    virtual ~ShippingStrategy() = default;

    virtual double calculateCost(double weight) const = 0;
};

class FedEx : public ShippingStrategy {
public:
    double calculateCost(double weight) const override {
        return 5.00 + weight * 2.50;
    }
};

class USPSEconomy : public ShippingStrategy {
public:
    double calculateCost(double weight) const override {
        return 10.00;
    }
};

class DHLPriority : public ShippingStrategy {
public:
    double calculateCost(double weight) const override {
        return weight * 4.00;
    }
};