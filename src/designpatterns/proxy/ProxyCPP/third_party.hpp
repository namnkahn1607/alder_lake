#pragma once

#include "video.hpp"
#include <unordered_map>

class ThirdParty {
public:
    virtual ~ThirdParty() = default;

    virtual unordered_map<string, Video> popularVideos() = 0;
    virtual Video getVideo(const string& videoID) = 0;
};