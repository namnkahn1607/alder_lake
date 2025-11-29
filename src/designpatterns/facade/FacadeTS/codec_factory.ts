import { VideoFile } from './video_file.ts';
import { OGGCompression, type Codec } from './codec.ts';

class CodecFactory {
    static extract(file: VideoFile): Codec {
        console.log(`[CodecFactory]: Extracting codec from ${file.getName()}`);
        return new OGGCompression();
    }
}

export { CodecFactory };