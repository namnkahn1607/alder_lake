import { EmailNoti, LogOpen } from './event_listener.ts';
import { EventManager } from './event_manager.ts';
import { _File } from './file.ts';

class Editor {
    public events: EventManager;
    private file!: _File;

    constructor() {
        this.events = new EventManager('open', 'save');
    }

    openFile(filePath: string) {
        this.file = new _File(filePath);
        this.events.notify('open', this.file);
    }

    saveFile() {
        if (this.file != null) {
            this.events.notify('save', this.file);
        } else {
            throw new Error('Please open a File first.');
        }
    }

    public static main(): void {
        const editor = new Editor();
        editor.events.subsribe('open', new LogOpen('/path/to/log/file.txt'));
        editor.events.subsribe('save', new EmailNoti('admin@example.com'));

        try {
            editor.openFile('test.txt');
            editor.saveFile();
        } catch (error) {
            console.error('An error occured', error);
        }
    }
}

export { Editor };