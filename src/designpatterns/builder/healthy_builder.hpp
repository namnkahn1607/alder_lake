#pragma once

#include "builder.hpp"

class HealthyBuilder : public Builder {
public:
    Builder* addStarter();

    Builder* addMain();

    Builder* addDessert();

    Builder* addDrink();
};