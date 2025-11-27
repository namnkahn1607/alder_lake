import { type ThirdParty, Video } from './third_party.ts';
import { VideoService } from './video_service.ts';

/* PROXY */
class VideoCache implements ThirdParty {
    private cachePopular = new Map<string, Video>();
    private cacheAll = new Map<string, Video>();

    constructor(
        private service = new VideoService()
    ) {}
    
    popularVideos(): Map<string, Video> {
        if (this.cachePopular.size == 0) {
            console.log('[Proxy] Haven\'t cached, caching now...');
            this.cachePopular = this.service.popularVideos();
            console.log('[Proxy] Success caching!');
        } else {
            console.log('[Proxy] Retrieved list from cache.');
        }

        return this.cachePopular;
    }

    getVideo(videoID: string): Video {
        let video = this.cacheAll.get(videoID);

        if (video == null) {
            console.log('[Proxy] Not available in cache');
            video = this.service.getVideo(videoID);
            this.cacheAll.set(videoID, video);
        } else {
            console.log(`[Proxy] Retrieved video ${videoID} from cache`);
        }

        return video;
    }

    reset(): void {
        this.cachePopular.clear();
        this.cacheAll.clear();
    }
}

export { VideoCache };