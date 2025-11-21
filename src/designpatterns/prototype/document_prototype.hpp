#pragma once

#include <memory>

class DocumentPrototype {
public:
    virtual ~DocumentPrototype() = default;

    virtual std::unique_ptr<DocumentPrototype> clone() const = 0;
    virtual void display() const = 0;
};