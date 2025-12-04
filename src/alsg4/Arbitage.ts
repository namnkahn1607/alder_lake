/* algorithm application: Arbitage */
import { Queue } from 'datastructures-js';

class Arbitage {
    /** Arbitage detector arbitageDetect()
     * Look for arbitage opportunity in the market.
     * - Core algorithm: SPFA with negative cycle detection.
     * @param {Array<string>} currencies list of supported currencies.
     * @param {Array<Array<number>>} rateTable exchange rates.
     * @param {number} amount trader's current balance.
     * @param {string} currency trader's currency.
     * @returns {number} profit
     */
    arbitageDetect(
        currencies: Array<string>, rateTable: Array<Array<number>>,
        amount: number, currency: string
    ): void {
        const printCycle = (start: number) => {
            let v = start;
            
            // Trace back V times to ensure we're in a cycle.
            for (let i = 0; i < V; ++i) {
                v = edgeTo[v];
            }

            // Rebuild negative cycle vertices.
            const cycle = new Array<number>();
            const stop = v;
            
            while (true) {
                cycle.push(v);
                v = edgeTo[v];

                if (v == stop && cycle.length > 1) {
                    break;
                }
            }

            cycle.push(stop);
            cycle.reverse();

            let newAmount = amount;
            let pathStr = `${currency} -> `;

            for (let i = 0; i < cycle.length - 1; ++i) {
                const [from, to] = [cycle[i], cycle[i + 1]];
                newAmount *= rateTable[from][to];
                pathStr += `${currencies[from]} -> `;
            }

            pathStr += `${currencies[cycle[cycle.length - 1]]}`;

            console.log(`Path: ${pathStr}`);
            console.log(`Start: ${amount.toFixed(4)}`);
            console.log(`End:   ${newAmount.toFixed(4)}`);
            console.log(`Profit: ${(newAmount - amount).toFixed(4)}`);
        }

        const src = currencies.indexOf(currency);

        if (src == -1) {
            throw new Error('Market doesn\'t support this currency.'); //
        }

        const V = currencies.length;
        const adj = Array.from(
            { length: V }, () => new Array<number[]>()
        );

        for (let i = 0; i < V; ++i) {
            for (let j = 0; j < V; ++j) {
                // Avoid self-loop ~ 1.000 rate
                if (i == j) continue;

                adj[i].push([j, -1.0 * Math.log(rateTable[i][j])]);
            }
        }

        const distTo = new Array(V).fill(Infinity);
        const edgeTo = new Array(V).fill(-1);

        const queue = new Queue<number>();
        const onQueue = new Array(V).fill(false);
        
        const count = new Array(V).fill(0);

        distTo[src] = 0.0;
        queue.enqueue(src);
        onQueue[src] = true;

        while (!queue.isEmpty()) {
            const u = queue.dequeue()!;
            onQueue[u] = false;
            
            for (const [v, w] of adj[u]) {
                const newWei = distTo[u] + w;

                if (newWei >= distTo[v])
                    continue;

                distTo[v] = newWei;
                edgeTo[v] = u;

                if (!onQueue[v]) {
                    queue.enqueue(v); 
                    onQueue[v] = true;

                    if (++count[v] >= V) {
                        console.log('Arbitage Opportunity Found!');
                        printCycle(v);
                        return;
                    }
                }
            }
        }

        console.log('No Arbitage Opportunity!');
    }

    /** Analysis of Complexity
     * - Time: O(k.N^2) typically, O(N^3) worst case.
     * - Auxiliary: O(N^2) for Adjacency List, Arrays & Queue.
     * where N is the number of currencies.
     */
    public static main(): void {
        const amount = 1000.0;
        const currency = 'USD';

        const currencies = ['USD', 'EUR', 'GBP', 'CHF', 'CAD'];
        const rateTable = [
            [1.000, 0.741, 0.657, 1.061, 1.005],
            [1.349, 1.000, 0.888, 1.433, 1.366],
            [1.521, 1.126, 1.000, 1.614, 1.538],
            [0.942, 0.698, 0.619, 1.000, 0.953],
            [0.995, 0.732, 0.650, 1.049, 1.000]
        ];

        new Arbitage().arbitageDetect(
            currencies, rateTable, amount, currency
        );
    }
}

Arbitage.main();