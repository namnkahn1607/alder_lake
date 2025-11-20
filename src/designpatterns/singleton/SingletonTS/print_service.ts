class PrintService {
    private static instancePromise: Promise<PrintService> | null = null;
    private queue = Array<string>();

    private constructor() {}

    addJob(doc: string) {
        this.queue.push(doc);
        console.log(`[TS] Added ${doc}.`);
    }

    private async connectHardware(): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    public static async getInstance(): Promise<PrintService> {
        if (!PrintService.instancePromise) {
            PrintService.instancePromise = (async () => {
                const manager = new PrintService();
                await manager.connectHardware();
                return manager;
            })();
        }

        return PrintService.instancePromise;
    }
}

async function clientRequest(id: number) {
    const printer = await PrintService.getInstance();
    printer.addJob(`Doc_${id}`);
}

clientRequest(1);
clientRequest(2);
clientRequest(4);