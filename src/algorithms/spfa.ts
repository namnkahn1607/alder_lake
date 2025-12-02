/* algorithms: Shortest Path Faster Algorithm */
// a shortest path algorithm (Graph).
import { Queue } from 'datastructures-js';

class SPFA {
    /** Queue-based Bellman-Ford on Digraph
     * Computes shortest distances from source to all other vertices.
     * - Properties: Single-source; Only use when negative edge
     * weights appear.
     * - Input criteria: no negative cycle (the code will throw an
     * exception in case encountering). 
     * - Also works on weighted Undigraphs.
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
        
        const distTo = new Array(V).fill(Infinity);
        // Avoid duplicate queueing (one time query only).
        const onQueue = new Array(V).fill(false);
        // Store only relaxed edge point.
        const queue = new Queue<number>();
        // Count number of edges to reach every vertex
        const stepCnt = new Array(V).fill(0);

        distTo[src] = 0.0;
        queue.enqueue(src);
        onQueue[src] = true;

        // Potential expose to infinite loop
        while (!queue.isEmpty()) {
            const u = queue.dequeue()!;
            onQueue[u] = false;

            for (const [v, w] of adj[u]) {
                const newW = distTo[u] + w;

                if (newW > distTo[v])
                    continue;

                distTo[v] = newW; // relax

                // Relax but not queue? -> enqueue now.
                if (!onQueue[v]) {
                    queue.push(v);
                    onQueue[v] = true;

                    // Shortest path to v goes above V - 1? -> negative cycle.
                    if (++stepCnt[v] >= V) {
                        throw new Error(
                            'Exist negative cycle(s) in input Graph.'
                        );
                    }
                }
            }
        }

        return distTo;
    }

    /** Analysis of Complexity
     * - Time: O(V + E) typically, O(V.E) worst case. 
     * - Space: O(V + E).
     * -> Better overall performance compared to normal Bellman Ford.
     */
    public static main(): void {}
}

SPFA.main();