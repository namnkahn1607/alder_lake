#pragma once

#include <string>

#define string std::string

class Beverage {
public:
    virtual ~Beverage() = default;

    virtual double cost() = 0;
    virtual string description() const = 0;
};

class LightRoast : public Beverage {
public:
    double cost() { return 3.45; }
    
    string description() { return "Light Roast"; }
};

class DarkRoast : public Beverage {
public:
    double cost() { return 3.45; }

    string description() { return "Dark Roast"; }
};