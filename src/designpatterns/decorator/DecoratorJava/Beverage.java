package designpatterns.decorator.DecoratorJava;

public abstract class Beverage {

    abstract double cost();
    abstract String description();
}

class DarkRoast extends Beverage {
    
    @Override
    double cost() { return 3.45; }

    @Override
    String description() { return "Dark Roast"; }
}

class LightRoast extends Beverage {

    @Override
    double cost() { return 3.45; }

    @Override
    String description() { return "Light Roast"; }
}