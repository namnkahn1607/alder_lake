/** ADAPTEE (concrete)
 * incomplicable object needs adaptation to the Target.
 */
class Adaptee {
    specificRequest(): string {
        return 'uoy taem ot eciN [eetpadA]';
    }
}

/** TARGET (abstract/interface)
 * defines domain-specific abstraction used by the
 * Client code.
 */
class Target {
    request(): string {
        return '[Target] We\'re good';
    }
}

/** ADAPTER
 * must extends/implements Target; where the code logic
 * for adaptation is placed.
 */
class Adapter extends Target {
    constructor(private adaptee: Adaptee) {
        super();
    }

    request(): string {
        const ans = this.adaptee.specificRequest()
            .split('').reverse().join('');

        return `[Adapter] ${ans}`;
    }
}

// Client prefer the familiar interface (Target)
const clientAct = (target: Target) => {
    console.log(target.request());
};

// Client code
console.log('[Client] I can work well with Target');
const target = new Target();
clientAct(target);

console.log('');

console.log('[Client] The Adaptee is a bit strange');
const adaptee = new Adaptee();
console.log(adaptee.specificRequest(), '\n');

console.log('[Client] But I can work via Adapter');
const adapter = new Adapter(adaptee);
clientAct(adapter);

/** Insights/Considerations:
 * 1. Adapter ALWAYS extends/implements the Target, not the Adaptee
 * - It makes sense, READ AGAIN WITH MORE CAUTIOUS
 * 
 * 2. Choose the Adapter & Target wisely: 
 * - You may need the new code to adapt to the old code (backward compability) 
 * OR the old to new one (modernize code).
 * - Though new adapts to old seems a better choice as dealing with legacy code
 * or other's code is one of SWE's most common work. 
 */