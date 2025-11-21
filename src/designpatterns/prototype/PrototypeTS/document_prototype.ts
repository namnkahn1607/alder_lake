/** PROTOTYPE INTERFACE
 * declares the cloning method used to create new 
 * objects with the same field values.
 */
interface DocumentPrototype {
    cloneDocument(): DocumentPrototype;

    display(): void;
}

export type { DocumentPrototype };