/* advanced algorithms: Bipartite */
// check if bipartite Graph

class Bipartite {
    bipartite(n: number, edges: number[][], directed: boolean = false): boolean {
        const adj = Array.from({ length: n }, () => new Array<number>());

        for (const [u, v] of edges) {
            adj[u].push(v);
            
            if (!directed) {
                adj[v].push(u);
            }
        }

        // black/white ~ true/false
        const color = new Array(n).fill(false);
        const visited = new Array(n).fill(false);

        const dfs = (curr: number): boolean => {
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (visited[nei]) {
                    if (color[nei] == color[curr])
                        return false;

                    continue;
                }

                color[nei] = !color[curr];
                
                if (!dfs(nei)) return false;
            }

            return true;
        }
        
        for (let i = 0; i < n; ++i) {
            if (!visited[i] && !dfs(i)) {
                return false;
            }
        }

        return true;
    } 

    public static main(): void {}
}

Bipartite.main();