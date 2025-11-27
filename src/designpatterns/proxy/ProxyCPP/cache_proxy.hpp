#include "video_service.hpp"

class VideoCache : public ThirdParty {
private:
    unique_ptr<ThirdParty> service;
    unordered_map<string, Video> cachePopular;
    unordered_map<string, Video> cacheAll;

public:
    VideoCache(unique_ptr<ThirdParty> srv = nullptr) {
        if (srv) {
            service = move(srv);
        } else {
            service = make_unique<VideoService>();
        }
    }

    unordered_map<string, Video> popularVideos() override {
        if (cachePopular.empty()) {
            cout << "[Proxy] Haven't cached, caching now..." << endl;
            cachePopular = service->popularVideos();
            cout << "[Proxy] Success caching!" << endl;
        } else {
            cout << "[Proxy] Retrieved list from cache" << endl;
        }

        return cachePopular;
    }

    Video getVideo(const string& videoID) override {
        auto it = cacheAll.find(videoID);

        if (it == cacheAll.end()) {
            cout << "[Proxy] Not available in cache" << endl;
            Video video = service->getVideo(videoID);
            cacheAll.emplace(videoID, video);
            return video;
        } else {
            cout << "[Proxy] Retrieved video" << videoID << " from cache" << endl;
            return it->second;
        }
    }

    void reset() {
        cachePopular.clear();
        cacheAll.clear();
    }
};