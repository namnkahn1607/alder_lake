package designpatterns.adapter.AdapterJava;

public class LoggerAdapter implements JSONLogger {

    private final XMLLogger legacyLogger;

    public LoggerAdapter(XMLLogger legacyLogger) {
        this.legacyLogger = legacyLogger;
    }

    @Override
    public void logMessage(String message) {
        legacyLogger.log(message);
    }

    public static void main(String[] args) {
        JSONLogger logger = new LoggerAdapter(new XMLLogger());
        logger.logMessage("<message>hello</message>");
    }
}