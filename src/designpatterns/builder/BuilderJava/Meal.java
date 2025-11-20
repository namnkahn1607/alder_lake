package designpatterns.builder.BuilderJava;

enum Starter { SALAD, SOUP, BRUSCHETTA, VEGGIE_STICKS, CHICKEN_WINGS }
enum Main { GRILLED_CHICKEN, PASTA, VEGGIE_STIR_FRY, FISH, PIZZA }
enum Dessert { FRUIT_SALAD, ICE_CREAM, CHOCOLATE_CAKE, VEGAN_PUDDING, CHEESECAKE }
enum Drink { WATER, VEGAN_SHAKE, SODA, FRUIT_JUICE }

public class Meal {
    
    private Starter start;
    private Main main;
    private Dessert dessert;
    private Drink drink;

    public Starter getStart() { return start; }
    public Main getMain() { return main; }
    public Dessert getDessert() { return dessert; }
    public Drink getDrink() { return drink; }

    public void setStart(Starter start) { this.start = start; }
    public void setMain(Main main) { this.main = main; }
    public void setDessert(Dessert dessert) { this.dessert = dessert; }
    public void setDrink(Drink drink) { this.drink = drink; }
}