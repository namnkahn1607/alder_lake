#pragma once

#include "third_party.hpp"
#include <thread>
#include <iostream>
#include <chrono>
#include <random>

class VideoService : public ThirdParty {
private:
    void networkLatency() {
        static random_device rd;
        static mt19937 gen(rd());
        uniform_int_distribution<> distrib(500, 1500);

        int latency = distrib(gen);
        this_thread::sleep_for(chrono::milliseconds(latency));
    }

    void connectToServer(const string& server) {
        cout << "[RealService] Connecting to " << server << endl;
        networkLatency();
        cout << "[RealService] Connected!" << endl;
    }

    Video getSomeVideo(const string& videoID) {
        cout << "[RealService] Downloading videos..." << endl;
        networkLatency();
        cout << "[RealService] Done!" << endl;
        
        return Video(videoID, "untitled");
    }

    unordered_map<string, Video> getRandomVideos() {
        cout << "[RealService] Downloading populars..." << endl;
        networkLatency();

        unordered_map<string, Video> map;
        map.emplace("catzzzzzzzzz", Video("sadgahasgdas", "Catzzzz.avi"));
        map.emplace("mkafksangasj", Video("mkafksangasj", "Dog play with ball.mp4"));
        map.emplace("dancesvideoo", Video("asdfas3ffasd", "Dancing video.mpq"));
        map.emplace("dlsdk5jfslaf", Video("dlsdk5jfslaf", "Barcelona vs RealM.mov"));
        map.emplace("3sdfgsd1j333", Video("3sdfgsd1j333", "Programing lesson#1.avi"));

        return map;
    }

public:
    unordered_map<string, Video> popularVideos() override {
        connectToServer("https://www.youtube.com");
        return getRandomVideos();
    }

    Video getVideo(const string& videoID) override {
        connectToServer("https://www.youtube.com/" + videoID);
        return getSomeVideo(videoID);
    }
};