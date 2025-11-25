/** SUBJECT INTERFACE
 * multiple Subject(s) can exist in a program, so setting
 * out a standard way to add, remove, notify subscriber
 * is crucial.
 */
interface Subject {
    attach(observer: Observer): void;
    
    detach(observer: Observer): void;

    notify(): void;
}

/** CONCRETE SUBJECT
 * holding internal state data for Observers to watch.
 */
class ConcreteSubject implements Subject {
    /** Subject's Internal State
     * - All Observers are 'watching' this state.
     */
    public state: number = 1;
    private observers = new Array<Observer>();

    // Observer sign up
    attach(observer: Observer): void {
        /* Ensure single Observer instance only! */
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log(
                '[Subject] Observer has been attached'
            );
        }

        this.observers.push(observer);
        console.log('[Subject] Attached given Observer');
    }
    
    // Observer sign out
    detach(observer: Observer): void {
        /* Okay since there exists only one instance of Observer */
        const observerIdx = this.observers.indexOf(observer);

        if (observerIdx == -1) {
            return console.log(
                '[Subject] Non-existent Observer'
            );
        }

        this.observers.splice(observerIdx, 1);
        console.log('[Subject] Detached given Observer');
    }
    
    // Notify all Observer(s) a change in Subjects
    notify(): void {
        console.log('[Subject] Notifying Observers...');

        for (const observer of this.observers) {
            observer.update(this);
        }

        console.log('[Subject] Done\n');
    } 

    /* Bussiness logic that modify the internal state */
    doSth(): void {
        console.log('[Subject] About to do significant changes');
        this.state *= 2;
        
        console.log(`[Subject] Internal state changed to ${this.state}`);
        this.notify();
    }
}

/** OBSERVER INTERFACE
 * - There could be multiple type of classes that are
 * interested in the Subject, so we make them implement
 * the same Interface to receive the update in Subject.
 */
interface Observer {
    update(subject: Subject): void;
}

/** CONCRETE OBSERVER
 * may be distinct in functionalities, but same in the way
 * of getting updates from Subject.
 */
class ConcreteObserverA implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject &&
            subject.state < 3) {
            console.log('[ConcreteObserverA] Reacted to the event');
        }   
    }
}

class ConcreteObserverB implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject &&
            (subject.state == 0 || subject.state >= 2)) {
            console.log('[ConcreteObserverB] Reacted to the event');
        }
    }
}

// Client code
const publisher = new ConcreteSubject();

const subscriberA = new ConcreteObserverA();
publisher.attach(subscriberA);

const subscriberB = new ConcreteObserverB();
publisher.attach(subscriberB);

publisher.doSth();
publisher.doSth();

publisher.detach(subscriberB);
publisher.doSth();

export type { Subject, Observer };