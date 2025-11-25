interface Subject {
    attach(observer: Observer): void;
    
    detach(observer: Observer): void;

    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number = 1;
    private observers = new Array<Observer>()

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log(
                '[Subject] Observer has been attached'
            );
        }

        this.observers.push(observer);
        console.log('[Subject] Attached given Observer');
    }
    
    detach(observer: Observer): void {
        const observerIdx = this.observers.indexOf(observer);

        if (observerIdx == -1) {
            return console.log(
                '[Subject] Non-existent Observer'
            );
        }

        this.observers.splice(observerIdx, 1);
        console.log('[Subject] Detached given Observer');
    }
    
    notify(): void {
        console.log('[Subject] Notifying Observers...');

        for (const observer of this.observers) {
            observer.update(this);
        }

        console.log('[Subject] Done\n');
    } 

    doSth(): void {
        console.log('[Subject] About to do significant changes');
        this.state *= 2;
        
        console.log(`[Subject] Internal state changed to ${this.state}`);
        this.notify();
    }
}

interface Observer {
    update(subject: Subject): void;
}

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