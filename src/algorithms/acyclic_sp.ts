/* algorithms: Acyclic Shortest Path */
// a shortest path algorithm (Graph).
import { Topological } from './topological.ts';

class AcyclicShortestPath {
    /** Acyclical shortestPath() on DAG
     * Computes shortest distances from source to all other vertices.
     * - Property: Single source, Topological; Works fine even
     * with negative edge weights.
     * - Input criteria: weighted DAG.
     * @param {number} V 
     * @param {Array<Array<number>>} edges 
     * @returns {Array<number>}
     */
    shortestPath(V: number, edges: Array<Array<number>>): Array<number> {
        const adj = Array.from(
            { length: V }, () => new Array<number[]>()
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        // Get vertices in topological order in DFS style.
        const order = new Topological().topoOrder(V, edges);

        if (order.length != V) { // incompleted order
            throw new Error(
                "Not a DAG or broken Topological algorithm"
            );
        }

        // Initialize all paths positive infinity cost.
        const distTo = new Array(V).fill(Infinity);
        distTo[order[0]] = 0.0;

        for (const vertex of order) {
            for (const [nei, wei] of adj[vertex]) {
                const newWeight = distTo[vertex] + wei;

                if (newWeight < distTo[nei]) {
                    distTo[nei] = newWeight; // relax edge
                }
            }
        }

        return distTo;
    }

    /** Analysis of Complexity
     * - Time: O(V + E) average, worst.
     * - Space: O(V + E).
     */
    public static main(): void {}
}

AcyclicShortestPath.main();