#pragma once

enum class Starter { SALAD, SOUP, BRUSCHETTA, VEGGIE_STICKS, CHICKEN_WINGS };
enum class Main { GRILLED_CHICKEN, PASTA, VEGGIE_STIR_FRY, FISH, PIZZA };
enum class Dessert { FRUIT_SALAD, ICE_CREAM, CHOCOLATE_CAKE, VEGAN_PUDDING, CHEESECAKE };
enum class Drink { WATER, VEGAN_SHAKE, SODA, FRUIT_JUICE };

class Meal {
private:
    Starter start;
    Main main;
    Dessert dessert;
    Drink drink;

public:
    Starter getStart() { return start; }
    Main getMain() { return main; }
    Dessert getDessert() { return dessert; }
    Drink getDrink() { return drink; }

    void setStart(Starter _start) { start = _start; }
    void setMain(Main _main) { main = _main; }
    void setDessert(Dessert _dessert) { dessert = _dessert; }
    void setDrink(Drink _drink) { drink = _drink; }
};