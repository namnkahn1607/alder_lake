#pragma once

enum class BurgerType {
    CHEESE, DELUXE_CHEESE, VEGAN
};

class Burger {
public:
    virtual ~Burger() = default;

    virtual void prepare() = 0;
    virtual void cook() = 0;
    virtual void serve() = 0;
};

class CheeseBurger : public Burger {
public:
    void prepare() override {}
    void cook() override {}
    void serve() override {}
};

class DeluxeCheeseBurger : public Burger {
public:
    void prepare() override {}
    void cook() override {}
    void serve() override {}
};

class VeganBurger : public Burger {
public:
    void prepare() override {}
    void cook() override {}
    void serve() override {}
};