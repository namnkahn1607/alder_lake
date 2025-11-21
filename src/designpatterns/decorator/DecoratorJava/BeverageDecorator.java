package designpatterns.decorator.DecoratorJava;

public abstract class BeverageDecorator extends Beverage {
    
    protected Beverage beverage;

    public BeverageDecorator(Beverage beverage) {
        this.beverage = beverage;
    }
}

class EspressoDecorator extends BeverageDecorator {

    public EspressoDecorator(Beverage beverage) {
        super(beverage);
    }

    @Override
    public double cost() { return 0.5 + beverage.cost(); }

    @Override
    public String description() { 
        return String.format("%s, Espresso", beverage.description());
    }
}

class CreamDecorator extends BeverageDecorator {

    public CreamDecorator(Beverage beverage) {
        super(beverage);
    }

    @Override
    public double cost() { return 0.3 + beverage.cost(); }

    @Override
    public String description() {
        return String.format("%s, Cream" , beverage.description());
    }
}

class FoamDecorator extends BeverageDecorator {

    public FoamDecorator(Beverage beverage) {
        super(beverage);
    }

    @Override
    public double cost() { return 0.2 + beverage.cost(); }

    @Override
    public String description() {
        return String.format("%s, Foam", beverage.description());
    }
}