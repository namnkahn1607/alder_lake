#include "audio_mixer.hpp"
#include "bitrate_reader.hpp"
#include "codec_factory.hpp"

class ConverterFacade {
public:
    string convertVideo(const string& filename, const string& format) {
        cout << "[Facade] Starting conversion..." << endl;

        VideoFile file(filename);
        auto srcCodec = CodecFactory::extract(file);
        unique_ptr<Codec> dstCodec;

        if (format == "mp4") {
            dstCodec = make_unique<MPEG4Compression>();
        } else {
            dstCodec = make_unique<OGGCompression>();
        }

        string buffer = BitrateReader::read(filename, *srcCodec);
        string result = BitrateReader::convert(buffer, *dstCodec);

        AudioMixer mixer;
        result = mixer.fix(result);

        cout << "[Facade] Completed conversion..." << endl;
        return result;
    }
};