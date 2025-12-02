/* algorithms: Bellman-Ford */
// a shortest path algorithm (Graph).

class BellmanFord {
    /** Bellman-Ford shortestPath() on Digraph
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
        const distTo = new Array(V).fill(Infinity);
        distTo[src] = 0.0;

        for (let i = 1; i < V; ++i) {
            // Early termination flag
            let hasChanged = false;
            
            for (const [u, v, w] of edges) {
                // Only continue computing on computed vertices
                if (distTo[u] != Infinity) {
                    const newW = distTo[u] + w;
                    
                    if (newW < distTo[v]) {
                        distTo[w] = newW; // relax edge
                        hasChanged = true;
                    }
                }
            }

            // No more updates to distTo[] -> Finish!
            if (!hasChanged) {
                return distTo;
            }
        }

        // Run one more relax loop to detect negative cycle
        for (const [u, v, w] of edges) {
            if (distTo[u] != Infinity && distTo[u] + w < distTo[v]) {
                throw new Error('Exist negative cycle(s) in input Graph.');
            }
        }

        return distTo;
    }

    /** Analysis of Complexity
     * - Time: O(V.E) average/worst.
     * - Space: O(V) - no need to construct Adjacency List.
     */
    public static main(): void {}
}

BellmanFord.main();