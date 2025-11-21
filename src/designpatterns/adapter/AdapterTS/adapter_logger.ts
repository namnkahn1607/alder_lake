/* ADAPTER */
import type { JSONLogger } from './json_logger.ts';
import { XMLLogger } from './xml_logger.ts';

/**
 * Adapter that bridges between ADAPTEE & TARGET.
 * This is where the code logic promoting adaptablity is placed.
 */
class LoggerAdapter implements JSONLogger {
    constructor(private legacyLogger: XMLLogger) {}

    logMessage(message: string): void {
        this.legacyLogger.log(message);
    }
}

// Client code
const logger: JSONLogger = new LoggerAdapter(new XMLLogger());
logger.logMessage('<message>hello</message>');