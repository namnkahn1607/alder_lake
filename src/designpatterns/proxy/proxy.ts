/** SERVICE INTERFACE
 * declares the Interface of Service. The Proxy must follow
 * this Interface to be disguise itself as a Service.
 * - Client will interact with this Interface. 
 */
interface Service {
    request(): void;
}

/** REAL SERVICE (concrete)
 * provides useful bussiness logic.
 */
class RealService implements Service {
    request(): void {
        console.log('[RealSubject] Handling request.');
    }
}

/** PROXY (concrete)
 * has a reference to the Real Service. Proxy will do the
 * pre-processing before passing the request to Real Service.
 * - Oftenly, Proxy manages the life cycle of Real Service.
 */
class Proxy implements Service {
    constructor(private realSubject: RealService) {}

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
const clientCode = (subject: Service) => {
    subject.request();
};

console.log('[Client] Executing the Client code with a real Subject:');
const realSubject = new RealService();
clientCode(realSubject);

console.log('');

console.log('[Client] Executing the same Client code with a Proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);

/** Insights/Considerations
 * 1. Much like other Structural Patterns, Proxy wraps around the real
 * Object a layer of abstraction:
 * - Adapter talks about incomplicability and adaptation, Proxy talks
 * about  
 */