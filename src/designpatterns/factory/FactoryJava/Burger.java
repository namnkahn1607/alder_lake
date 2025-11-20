package designpatterns.factory.FactoryJava;

public abstract class Burger {
    
    abstract void prepare();
    abstract void cook();
    abstract void serve();
}

enum BurgerType {
    CHEESE, DELUXE_CHEESE, VEGAN
}

class CheeseBurger extends Burger {
    
    @Override
    void prepare() {}
    
    @Override
    void cook() {}

    @Override
    void serve() {}
}

class DeluxeCheeseBurger extends Burger {
    
    @Override
    void prepare() {}
    
    @Override
    void cook() {}

    @Override
    void serve() {}
}

class VeganBurger extends Burger {
    
    @Override
    void prepare() {}
    
    @Override
    void cook() {}

    @Override
    void serve() {}
}