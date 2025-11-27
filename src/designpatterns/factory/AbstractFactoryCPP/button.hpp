#pragma once

#include <iostream>
using namespace std;

class Button {
public:
    virtual ~Button() = default;
    virtual void paint() const = 0;
};

class MacOSButton : public Button {
public:
    void paint() const override {
        cout << "[ConcreteButton] You've created MacOS Button" << endl;
    }
};

class WindowsButton : public Button {
public:
    void paint() const override {
        cout << "[ConcreteButton] You've created Windows Button" << endl;
    }
};