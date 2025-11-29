interface Codec {
    getType(): string;
}

class MPEG4Compression implements Codec {
    getType(): string {
        return "MPG-4";
    }
}

class OGGCompression implements Codec {
    getType(): string {
        return "OGG";
    }
}

export { type Codec, MPEG4Compression, OGGCompression };