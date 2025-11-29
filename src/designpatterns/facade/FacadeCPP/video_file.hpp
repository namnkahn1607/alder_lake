#pragma once

#include <string>
using namespace std;

class VideoFile {
private:
    string filename;

public:
    VideoFile(string name) : filename(name) {}

    string getName() const {
        return filename;
    }
};