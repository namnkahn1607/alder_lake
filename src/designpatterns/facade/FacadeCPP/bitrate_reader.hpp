#pragma once

#include "codec.hpp"
#include <iostream>
using namespace std;

class BitrateReader {
public:
    static string read(const string& filename, const Codec& srcCodec) {
        cout << "[BitrateReader] Reading file " << filename
             << " in " << srcCodec.getType() << endl;

        return "buffer_data";
    }

    static string convert(const string &buffer, const Codec& dstCodec) {
        cout << "[BitrateReader] Writing buffer " << buffer
             << " to " << dstCodec.getType() << endl;

        return "converted_data";
    }
};