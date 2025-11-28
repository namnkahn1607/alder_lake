#pragma once

#include <string>
using namespace std;

class SystemNode {
public:
    virtual ~SystemNode() = default;

    virtual bool isLeaf() const = 0;
    virtual long long getSize() const = 0;
    virtual string getName() const = 0;
};