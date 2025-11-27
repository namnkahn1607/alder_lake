import { Video, type ThirdParty } from './third_party.ts';

/* REAL SERVICE */
class VideoService implements ThirdParty {
    popularVideos(): Map<string, Video> {
        this.connectToServer('https://www.youtube.com');
        return this.getRandomVideos();
    }

    getVideo(videoID: string): Video {
        this.connectToServer(`https://www.youtube.com/${videoID}`);
        return this.getSomeVideo(videoID);
    }

    private getRandomVideos(): Map<string, Video> {
        console.log('[RealService] Downloading populars...');
        this.networklatency();

        const map = new Map<string, Video>();
        map.set('catzzzzzzzzz', new Video('sadgahasgdas', 'Catzzzz.avi'));
        map.set('mkafksangasj', new Video('mkafksangasj', 'Dog play with ball.mp4'));
        map.set('dancesvideoo', new Video('asdfas3ffasd', 'Dancing video.mpq'));
        map.set('dlsdk5jfslaf', new Video('dlsdk5jfslaf', 'Barcelona vs RealM.mov'));
        map.set('3sdfgsd1j333', new Video('3sdfgsd1j333', 'Programing lesson#1.avi'));

        return map;
    }

    private connectToServer(server: string): void {
        console.log(`[RealService] Connecting to ${server}`);
        this.networklatency();
        console.log('[RealService] Connected!');
    }

    private networklatency() {
        const randomLatency = 10000 * Math.random();
        
        async function delayExecution(time: number) {
            await new Promise(
                resolve => setTimeout(resolve, time)
            );
        }

        delayExecution(randomLatency);
    }

    private getSomeVideo(videoID: string) {
        console.log('[RealService] Downloading video...');
        this.networklatency();
        console.log('[RealService] Done!');
        
        return new Video(videoID, 'untitled');
    }
}

export { VideoService };