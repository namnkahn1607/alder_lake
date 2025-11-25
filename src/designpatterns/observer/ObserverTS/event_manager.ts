import { type EventListener } from './event_listener.ts';
import { _File } from './file.ts';

class EventManager {
    public listeners = new Map<string, Array<EventListener>>();

    constructor(...operations: Array<string>) {
        for (const operation of operations) {
            this.listeners.set(operation, []);
        }
    }

    subsribe(eventType: string, listener: EventListener) {
        const users = this.listeners.get(eventType);

        if (!users) {
            return console.log('No such Event Type exists');
        }

        users.push(listener);
    }

    unsubsribe(eventType: string, listener: EventListener) {
        let users = this.listeners.get(eventType);

        if (!users) {
            return console.log('No such Event Type exists');
        }

        users = users.filter(item => item == listener);
    }

    notify(eventType: string, file: _File) {
        const users = this.listeners.get(eventType);

        if (!users) {
            return console.log('No such Event Type exists');
        }

        for (const listener of users) {
            listener.update(eventType, file);
        }
    }
}

export { EventManager };