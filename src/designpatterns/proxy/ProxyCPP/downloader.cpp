#include "cache_proxy.hpp"

class YoutubeDownloader {
private:
    unique_ptr<ThirdParty> api;

public:
    YoutubeDownloader(unique_ptr<ThirdParty> apiService)
        : api(move(apiService)) {}

    void renderVideoPage(const string& videoID) {
        Video video = api->getVideo(videoID);

        cout << "\n-------------------------------" << endl;
        cout << "Video page" << endl;
        cout << "ID: " << video.getVideoID() << endl;
        cout << "Title: " << video.getTitle() << endl;
        cout << "-------------------------------\n" << endl;
    }

    void renderPopularVideos() {
        auto list = api->popularVideos();

        cout << "\n-------------------------------" << endl;
        cout << "Most popular videos on Youtube" << endl;

        for (const auto& pair : list) {
            cout << "ID: " << pair.second.getVideoID() 
                 << " / Title: " << pair.second.getTitle() << endl;
        }

        cout << "-------------------------------\n" << endl;
    }
};

void test(YoutubeDownloader& downloader) {
    downloader.renderPopularVideos();
    downloader.renderVideoPage("catzzzzzzzzz");
    downloader.renderPopularVideos();
    downloader.renderVideoPage("dancesvideoo");
    // Users might visit the same page quite often.
    downloader.renderVideoPage("catzzzzzzzzz");
    downloader.renderVideoPage("someothervid");
}

int main() {
    YoutubeDownloader naiveDownloader(make_unique<VideoService>());
    test(naiveDownloader);

    YoutubeDownloader smartDownloader(make_unique<VideoCache>());
    test(smartDownloader);

    return 0;
}