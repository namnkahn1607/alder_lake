class Video {
    constructor(
        private readonly videoID: string,
        public readonly title: string
    ) {}

    getVideoID(): string { return this.videoID };
    getTitle(): string { return this.title; }
}

/* SERVICE INTERFACE */
interface ThirdParty {
    popularVideos(): Map<string, Video>;

    getVideo(videoID: string): Video;
}

export { Video, type ThirdParty };