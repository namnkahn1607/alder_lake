/* algorithms: Dijkstra */
// a shortest path algorithm (Graph).
import { MinPriorityQueue } from 'datastructures-js';
import { EagerDijkstra } from '../alsg4/EagerDijkstra.ts';

class Dijkstra {
    /** Dijkstra's shortestPath()
     * Computes longest distances from source to all other vertices.
     * - Property: Single source, Lazy.
     * - Input criteria: Weighted Graph with no negative
     * edge weights.
     * @param {number} V 
     * @param {Array<Array<number>>} edges 
     * @param {number} src 
     * @returns {Array<number>}
     */
    shortestPath(
        V: number, edges: Array<Array<number>>, src: number
    ): Array<number> {
        const adj = Array.from(
            { length: V }, () => new Array<number[]>()
        );
        
        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const distTo = new Array(V).fill(-1);
        distTo[src] = 0.0;
        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0], [[0, src]]
        );
        
        while (!minPQ.isEmpty()) {
            const [w1, n1] = minPQ.dequeue()!;

            // Calculated -> skip.
            if (distTo[n1] != -1)
                continue;

            distTo[n1] = w1;

            for (const [n2, w2] of adj[n1]) {
                // Laziness: add new query instead of update priority key.
                if (distTo[n2] != -1) {
                    /* Don't need to relax edge since new queries with better
                    priority value get added anyway. */
                    minPQ.enqueue([w1 + w2, n2]);
                }
            }
        }

        return distTo;
    }

    /** Analysis of Complexity
     * - Time: O(E.logV) average/worst case.
     * - Space: O(V + E).
     * -> Due to lazy querying, the PQ can get 'bloated' quickly.
     * -> For the optimized version, see {@link EagerDijkstra}
     */
    public static main(): void {}
}

Dijkstra.main();