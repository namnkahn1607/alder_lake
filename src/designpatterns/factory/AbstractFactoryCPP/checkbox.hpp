#pragma once

#include <iostream>
using namespace std;

class Checkbox {
public:
    virtual ~Checkbox() = default;
    virtual void paint() const = 0;
};

class MacOSCheckbox : public Checkbox {
public:
    void paint() const override {
        cout << "[ConcreteCheckbox] You've created MacOS Checkbox";
    }
};

class WindowsCheckbox : public Checkbox {
public:
    void paint() const override {
        cout << "[ConcreteCheckbox] You've created Windows Checkbox";
    }
};