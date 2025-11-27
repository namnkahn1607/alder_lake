import { type ThirdParty } from './thirdparty.ts';
import { VideoService } from './video_service.ts';
import { VideoCache } from './cache_proxy.ts';

class YoutubeDownloader {
    constructor(private api: ThirdParty) {}

    renderVideoPage(videoID: string): void {
        const video = this.api.getVideo(videoID);
        console.log('\n-------------------------------');
        console.log('Video page');
        console.log(`ID: ${video.getVideoID()}`);
        console.log(`Title: ${video.getTitle()}`);
        console.log('-------------------------------\n');
    }

    renderPopularVideos() {
        const list = this.api.popularVideos();
        
        console.log('\n-------------------------------');
        console.log('Most popular videos on Youtube');
    
        for (const video of list.values()) {
            console.log(`ID: ${video.getVideoID()} / Title: ${video.getTitle()}`);
        }

        console.log('-------------------------------\n');
    }

    static test(downloader: YoutubeDownloader): void {
        downloader.renderPopularVideos();
        downloader.renderVideoPage("catzzzzzzzzz");
        downloader.renderPopularVideos();
        downloader.renderVideoPage("dancesvideoo");
        // Users might visit the same page quite often.
        downloader.renderVideoPage("catzzzzzzzzz");
        downloader.renderVideoPage("someothervid");
    }

    public static main(): void {
        const naiveDownloader = new YoutubeDownloader(new VideoService());
        const smartDownloader = new YoutubeDownloader(new VideoCache());

        this.test(naiveDownloader);
        this.test(smartDownloader);
    }
}

YoutubeDownloader.main();