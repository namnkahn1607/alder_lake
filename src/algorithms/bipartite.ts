/* advanced algorithms: Bipartite */
// check if Graph is bipartite.

class Bipartite {
    /**
     * @param {number} V 
     * @param {Array<Array<number>>} edges 
     * @param {boolean} directed 
     * @returns {boolean}
     */
    bipartite(
        V: number, edges: Array<Array<number>>, directed: boolean = false
    ): boolean {
        const adj = Array.from(
            { length: V }, () => new Array<number>()
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
            
            if (!directed) {
                adj[v].push(u);
            }
        }

        // Coloring: black -> true, white -> false.
        const color = new Array(V).fill(false);
        const visited = new Array(V).fill(false);

        const dfs = (curr: number): boolean => {
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (visited[nei]) {
                    // Visited & same color -> not bipartite.
                    if (color[nei] == color[curr])
                        return false;

                    continue;
                }

                // Color the opposite to all neighbors.
                color[nei] = !color[curr];
                
                // Already found a falsy clue -> return.
                if (!dfs(nei)) {
                    return false;
                }
            }

            return true;
        }
        
        for (let i = 0; i < V; ++i) {
            if (!visited[i] && !dfs(i)) {
                return false;
            }
        }

        return true;
    } 

    /** Analysis of Complexity
     * - Time: linear O(V + E) average/worst case.
     * - Space: O(V + E).
     */
    public static main(): void {}
}

Bipartite.main();