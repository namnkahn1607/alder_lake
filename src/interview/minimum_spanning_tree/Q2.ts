/* 2. Is an edge in a MST */
class Q2 {
    isEdgeInMST(
        V: number, edges: Array<Array<number>>, e: Array<number>
    ): boolean {
        const adj = Array.from({ length: V }, () => new Array<number[]>());

        for (const [v, w, weight] of edges) {
            // filter out self-loops
            if (v != w) {
                adj[v].push([w, weight]);
                adj[w].push([v, weight]);
            }
        }
        
        const marked = new Array(V).fill(false);
        const [src, dst, w_target] = e;
        marked[src] = true;

        const dfs = (vertex: number): boolean => {
            marked[vertex] = true;

            // found a path with strictly cheaper edges
            if (vertex == dst) {
                return true;
            }

            for (const [nei, w_curr] of adj[vertex]) {
                // only proceed with unmarked vertex with cheaper edge
                if (!marked[nei] && w_curr < w_target) {
                    if (dfs(nei)) return true;
                }
            }

            return false;
        };

        return dfs(src);
    }
}

export { Q2 };