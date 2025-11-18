/* algorithms: Kahn's Algorithm */
// topological order of a DAG
import { Queue } from 'datastructures-js';

class Kahn {
    topologicalOrder(n: number, edges: number[][]): number[] {
        const adj = Array.from({ length: n }, () => new Array<number>());
        const indeg = new Array(n).fill(0);

        for (const [u, v] of edges) {
            adj[u].push(v);
            ++indeg[v];
        }

        const order: number[] = [];
        const queue = new Queue<number>();
        indeg.forEach((deg, i) => {
            if (deg == 0) queue.push(i);
        });

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            order.push(curr);

            for (const nei of adj[curr]) {
                --indeg[nei];

                if (indeg[nei] == 0) {
                    queue.enqueue(nei);
                }
            }
        }

        if (order.length == n)
            return order;

        return [];
    }

    public static main(): void {}
}

Kahn.main();