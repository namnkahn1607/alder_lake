#pragma once

#include <iostream>
#include <string>
using namespace std;

class AudioMixer {
public:
    string fix(const string& result) {
        cout << "[AudioMixer] Fixing audio..." << endl;
        return "fixed_audio_" + result;
    }
};