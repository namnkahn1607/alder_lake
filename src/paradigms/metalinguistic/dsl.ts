class AirportDSL {
    private entities = new Map<string, any>();
    private rules: Array<() => void> = [];

    entity<T>(name: string, constructor: () => T) {
        this.entities.set(name, constructor);
        return this;
    }

    constraint(rule: () => void) {
        this.rules.push(rule);
        return this;
    }

    transition(name: string, from: string, to: string, action: () => void) {
        return { name, from, to, action };
    }

    validate(): void {
        this.rules.forEach(rule => rule());
    }
}

export { AirportDSL };