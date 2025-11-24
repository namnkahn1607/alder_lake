#pragma once

#include <iostream>
#include <string>

class XMLLogger {
public:
    void log(const std::string& XMLMessage) {
        std::cout << "[XML Log]: " << XMLMessage << std::endl;
    }
};