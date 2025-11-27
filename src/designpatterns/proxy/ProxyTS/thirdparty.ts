class Video {
    constructor(
        private videoID: string,
        public title: string
    ) {}
}

/* SERVICE INTERFACE */
interface ThirdParty {
    popularVideos(): Map<string, Video>;

    getVideo(videoID: string): Video;
}

export { Video, type ThirdParty };