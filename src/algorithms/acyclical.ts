/* algorithms: Cycle Detection */
// decide if a graph is acyclical

class CycleDetection {
    nonAcyclic(n: number, edges: number[][]): boolean {
        const adj = Array.from(
            { length: n }, () => new Array<number>(n)
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
        }

        const onPath = new Array(n).fill(false);
        const visited = new Array(n).fill(false);

        const dfs = (src: number): boolean => {
            onPath[src] = true;
            visited[src] = true;

            for (const dst of adj[src]) {
                if (onPath[dst]) return true;
                if (visited[dst]) continue;

                if (dfs(dst)) return true;
            }

            onPath[src] = false;
            return false;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && dfs(i)) {
                return true;
            }
        }

        return false;
    }

    hasCycle(n: number, edges: number[][]): boolean {
        const adj = Array.from(
            { length: n }, () => new Array<number>(n)
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Array(n).fill(false);

        const dfs = (u: number, par: number): boolean => {
            visited[u] = true;

            for (const v of adj[u]) {
                if (visited[v]) {
                    if (v != par) return true;

                    continue;
                }

                if (dfs(v, u)) return true;
            }

            return false;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && !dfs(i, -1)) {
                return true;
            }
        }

        return false;
    }

    public static main(): void {}
}

CycleDetection.main();