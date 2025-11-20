#pragma once

#include "builder.hpp"

class VeganBuilder : public Builder {
public:
    Builder* addStarter();

    Builder* addMain();

    Builder* addDessert();

    Builder* addDrink();
};