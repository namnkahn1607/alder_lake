import { type Codec } from './codec.ts';

class BitrateReader {
    static read(filename: string, srcCodec: Codec): string {
        console.log(
            `[BitrateReader] Reading file ${filename} in ${srcCodec.getType()}`
        );

        return 'buffer_data';
    }
    
    static convert(buffer: string, dstCodec: Codec): string {
        console.log(
            `[BitrateReader] Writing buffer ${buffer} to ${dstCodec.getType()}`
        );

        return 'converted_data';
    }
}

export { BitrateReader };