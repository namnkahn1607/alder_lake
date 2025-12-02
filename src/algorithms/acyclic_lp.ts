/* algorithms: Acyclic Longest Path */
// a longest path (shortest path co-variant) algorithm (Graph).
import { Kahn } from './kahn.ts';

class AcyclicLongestPath {
    /** Acyclical longestPath() on DAG
     * Computes longest distances from source to all other vertices.
     * - Property: Single source, Topological; Works fine even
     * with negative edge weights.
     * - Input criteria: weighted DAG.
     * @param {number} V 
     * @param {Array<Array<number>>} edges 
     * @returns {Array<number>}
     */
    longestPath(V: number, edges: Array<Array<number>>): Array<number> {
        const adj = Array.from(
            { length: V }, () => new Array<number[]>(V)
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        // Get vertices in topological order in BFS style.
        const order = new Kahn().topoOrder(V, edges);

        if (order.length != V) { // incompleted order
            throw new Error(
                "Not a DAG or broken Topological order algorithm"
            ); 
        }

        // Initialize all paths negative infinity cost.
        const distTo = new Array(V).fill(-Infinity);
        distTo[order[0]] = 0.0;

        for (const vertex of order) {
            for (const [nei, wei] of adj[vertex]) {
                const newWeight = distTo[vertex] + wei;

                if (newWeight > distTo[nei]) {
                    distTo[nei] = newWeight; // relax edge
                }
            }
        }

        return distTo;
    }

    public static main(): void {}
}

AcyclicLongestPath.main();