import { BitrateReader } from './bitrate_reader.ts';
import { CodecFactory } from './codec_factory.ts';
import { VideoFile } from './video_file.ts';
import {
    type Codec, MPEG4Compression, OGGCompression 
} from './codec.ts';
import { AudioMixer } from './audio_mixer.ts';

class ConverterFacade {
    convertVideo(filename: string, format: string): string {
        console.log('[Facade] Starting conversion...');

        const file = new VideoFile(filename);
        const srcCodec = CodecFactory.extract(file);
        const dstCodec = (format == 'mp4') ?
            new MPEG4Compression() : new OGGCompression();

        const buffer = BitrateReader.read(filename, srcCodec);
        const result = BitrateReader.convert(buffer, dstCodec);

        const mixer = new AudioMixer();
        const finalResult = mixer.fix(result);

        console.log('[Facade] Completed conversion...');
        return finalResult;
    }

    // Client code
    public static main(): void {
        console.log('[Client] I can easily convert file')
        const converter = new ConverterFacade();
        const mp4 = converter.convertVideo('funny_cat.ogg', 'mp4');
        console.log(`[Client] Now I got a ${mp4}.mp4`);
    }
}

ConverterFacade.main();