/* algorithms: Topological Sort */
// topological order of a DAG

class Topological {
    topologicalSort(n: number, edges: number[][]): number[] {
        const adj = Array.from(
            { length: n }, () => new Array<number>(n)
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
        }

        const order: number[] = [];
        const onPath = new Array(n).fill(false);
        const visited = new Array(n).fill(false);

        const dfs = (v: number): boolean => {
            onPath[v] = true;
            visited[v] = true;

            for (const nei of adj[v]) {
                if (onPath[nei]) return false;
                if (visited[nei]) continue;
                if (!dfs(nei)) return false;
            }

            order.push(v);
            onPath[v] = false;

            return true;
        };

        for (let i = 0; i < n; ++i) {
            if (!visited[i] && !dfs(i)) return [];
        }

        return order;
    }

    public static main(): void {}
}

Topological.main();