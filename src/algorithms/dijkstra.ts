/* algorithms: Dijkstra */
// shortest mincost path in Matrix
import { MinPriorityQueue } from 'datastructures-js';

class Dijkstra {
    shortestPath(n: number, edges: number[][], src: number): number[] {
        const adj = Array.from({ length: n }, () => new Array<number[]>());
        const dists = new Array(n).fill(-1);

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0]
        );
        minPQ.enqueue([0, src]);

        while (!minPQ.isEmpty()) {
            const [w1, n1] = minPQ.dequeue()!;

            if (dists[n1] != -1)
                continue;

            dists[n1] = w1;

            for (const [n2, w2] of adj[n1]) {
                if (dists[n2] != -1) {
                    minPQ.enqueue([w1 + w2, n2]);
                }
            }
        }

        return dists;
    }

    public static main(): void {}
}

Dijkstra.main();