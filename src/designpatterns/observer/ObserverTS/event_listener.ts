import { _File } from './file.ts';

interface EventListener {
    update(eventType: string, file: _File): void;
}

class EmailNoti implements EventListener {
    constructor(private email: string) {}

    update(eventType: string, file: _File) {
        console.log(
            `Email to ${this.email}: Someone has performed ${eventType}
            operation with the following file: ${file.getPath()}`
        );
    }
}

class LogOpen implements EventListener {
    private log: _File;

    constructor(filePath: string) {
        this.log = new _File(filePath);
    }

    update(eventType: string, file: _File) {
        console.log(
            `Save to log ${this.log.getPath()}: Someone has performed
            ${eventType} operation with the following file: ${file.getPath()}`
        );
    }
}

export { type EventListener, EmailNoti, LogOpen };