#pragma once

#include "system_node.hpp"

class File : public SystemNode {
private:
    string name;
    long long size;

public:
    File(string n, long long s) : name(move(n)), size(s) {}

    bool isLeaf() const override {
        return true;
    }

    long long getSize() const override {
        return size;
    }

    string getName() const override {
        return name;
    }
};