#pragma once

#include "codec.hpp"
#include "video_file.hpp"
#include <iostream>
#include <memory>

class CodecFactory {
public:
    static unique_ptr<Codec> extract(const VideoFile& file) {
        cout << "[CodeFactory]: Extracting codec from " << file.getName() << endl;

        return make_unique<OGGCompression>();
    }
};