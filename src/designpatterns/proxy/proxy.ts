interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request(): void {
        console.log('[RealSubject] Handling request.');
    }
}

class Proxy implements Subject {
    constructor(private realSubject: RealSubject) {}

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('[Proxy] Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('[Proxy] Logging the time of request.')
    }
}

// Client code
const clientCode = (subject: Subject) => {
    subject.request();
};

console.log('[Client] Executing the Client code with a real Subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('[Client] Executing the same Client code with a Proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);