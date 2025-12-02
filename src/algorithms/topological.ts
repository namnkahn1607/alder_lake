/* algorithms: Topological Sort & Shortest Path */
// topological order of a DAG
class Topological {
    topoOrder(V: number, edges: Array<Array<number>>): Array<number> {
        const adj = Array.from(
            { length: V }, () => new Array<number>(V)
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
        }

        const order = new Array<number>();
        const onPath = new Array(V).fill(false);
        const visited = new Array(V).fill(false);

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

        for (let i = 0; i < V; ++i) {
            if (!visited[i] && !dfs(i)) return [];
        }

        return order;
    }

    public static main(): void {}
}

Topological.main();

export { Topological };