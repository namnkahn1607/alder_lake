/* advanced algorithm: Optimized Dijkstra */
// a shortest path algorithm (Graph).
import { IndexMinPQ } from './IndexMinPQ.ts';

class EagerDijkstra {
    /** Dijkstra's optimized shortestPath()
     * Computes longest distances from source to all other vertices.
     * - Property: Single source, Eager (dynamic update vertex's
     * priority value using {@link IndexMinPQ}).
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
            { length: V }, () => new Array<number[]>
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const distTo = new Array(V).fill(Infinity);
        distTo[src] = 0.0;

        const queue = new IndexMinPQ<number>(V);
        queue.insert(src, 0);

        while (!queue.isEmpty()) {
            const u = queue.delMin();

            for (const [v, w] of adj[u]) {
                const cost = distTo[u] + w;

                if (distTo[v] <= cost)
                    continue;

                distTo[v] = cost; // relax
                
                if (queue.contains(v)) {
                    // Already exist in MinPQ? -> update.
                    queue.decreaseKey(v, cost);
                } else {
                    // Otherwise insert new query.
                    queue.insert(v, cost);
                }
            }
        }

        return distTo;
    }

    /** Analysis of Complexity
     * - Time: O(E.logV) average/worst case.
     * - Space: O(V + E).
     * -> Much faster due to O(V) minPQ.
     */
    public static main(): void {}
}

EagerDijkstra.main();

export { EagerDijkstra };