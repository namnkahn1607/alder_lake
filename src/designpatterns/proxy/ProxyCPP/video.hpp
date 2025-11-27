#pragma once

#include <string>
using namespace std;

class Video {
private:
    string videoID;

public:
    const string title;

    Video(string id, string t) : videoID(move(id)), title(move(t)) {}

    string getVideoID() const { return videoID; }
    string getTitle() const { return title; }
};