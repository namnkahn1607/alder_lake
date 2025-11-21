package designpatterns.decorator.DecoratorJava;

public class Client {
    public static void main(String[] args) {
        Beverage beverage = new FoamDecorator(
            new CreamDecorator(
                new EspressoDecorator(new DarkRoast())
            )
        );

        System.out.println(beverage.cost());
        System.out.println(beverage.description());
    } 
}
