/** ADAPTEE
 * The old (legacy) system that need to adapt to new changes.
 */
class XMLLogger {
    log(XMLMessage: string): void {
        console.log(XMLMessage);
    }
}

export { XMLLogger };