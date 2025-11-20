package designpatterns.factory.FactoryJava;

public abstract class BurgerStore {
    
    abstract Burger createBurger(BurgerType type);

    Burger orderBurger(BurgerType type) {
        Burger burger = createBurger(type);
        System.out.println(String.format("Making a %s Burger", type));
        
        burger.prepare();
        burger.cook();
        burger.serve();

        return burger;
    }
}

class CheeseBurgerStore extends BurgerStore {
    
    @Override
    Burger createBurger(BurgerType type) {
        switch (type) {
            case BurgerType.CHEESE: return new CheeseBurger();
            case BurgerType.DELUXE_CHEESE: return new DeluxeCheeseBurger();
            default:
                throw new IllegalArgumentException("Unknown CheeseBurger type!");
        }
    }
}

class VeganBurgerStore extends BurgerStore {

    @Override
    Burger createBurger(BurgerType type) {
        if (type == BurgerType.VEGAN) {
            return new VeganBurger();
        }

        throw new IllegalArgumentException("Unknown VeganBurger type!");
    }
}