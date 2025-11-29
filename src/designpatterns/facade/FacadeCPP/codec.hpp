#pragma once

#include <string>
using namespace std;

class Codec {
public:
    virtual ~Codec() = default;
    virtual string getType() const = 0;
};

class MPEG4Compression : public Codec {
    string getType() const override {
        return "MPG4";
    }
};

class OGGCompression : public Codec {
    string getType() const override {
        return "OGG";
    }
};