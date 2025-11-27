#pragma once

#include <memory>
#include "button.hpp"
#include "checkbox.hpp"
using namespace std;

class GUIFactory {
public:
    virtual ~GUIFactory() = default;

    virtual unique_ptr<Button> createButton() const = 0;
    virtual unique_ptr<Checkbox> createCheckbox() const = 0;
};

class MacOSFactory : public GUIFactory {
public:
    unique_ptr<Button> createButton() const override {
        return make_unique<MacOSButton>();
    }

    unique_ptr<Checkbox> createCheckbox() const override {
        return make_unique<MacOSCheckbox>();
    }
};

class WindowsFactory : public GUIFactory {
public:
    unique_ptr<Button> createButton() const override {
        return make_unique<WindowsButton>();
    }

    unique_ptr<Checkbox> createCheckbox() const override {
        return make_unique<WindowsCheckbox>();
    }
};