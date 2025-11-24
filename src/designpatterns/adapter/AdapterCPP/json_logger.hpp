#pragma once

#include <string>

class JSONLogger {
public:
    virtual ~JSONLogger() = default;

    virtual void logMessage(const std::string& message) = 0;
};