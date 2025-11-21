#include "json_logger.hpp"
#include "xml_logger.hpp"

class LoggerAdapter : public JSONLogger {
private:
    XMLLogger& legacyLogger;

public:
    explicit LoggerAdapter(XMLLogger& logger) : legacyLogger(logger) {}

    void logMessage(const std::string& message) override {
        legacyLogger.log(message);
    }
};

int main() {
    XMLLogger xmllogger;
    LoggerAdapter adapter(xmllogger);

    adapter.logMessage("<message>hello</message>");
    return 0;
}