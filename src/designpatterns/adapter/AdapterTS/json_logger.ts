/** TARGET
 * Interface where the new system adheres to.
 */
interface JSONLogger {
    logMessage(message: string): void;
}

export type { JSONLogger };