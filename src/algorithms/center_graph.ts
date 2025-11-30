/* algorithms: Centroid of an Undigraph */
// minimum height Tree from an Undigraph

class Centroid {
    centerGraph(n: number, edges: number[][]): number[] {
        const adj = Array.from({ length: n }, () => new Array<number>());
        const degree = new Array(n).fill(0);
        
        for (const [u, v] of edges) {
            adj[u].push(v); ++degree[u];
            adj[v].push(u); ++degree[v];
        }

        let remain = n;
        let leaves: number[] = [];
        degree.forEach((deg, i) => {
            if (deg <= 1) leaves.push(i);
        });

        while (remain > 2) {
            const newLeaves: number[] = [];

            for (const leaf of leaves) {
                for (const nei of adj[leaf]) {
                    if (--degree[nei] == 1) {
                        newLeaves.push(nei);
                    }
                }
            }

            remain -= leaves.length;
            leaves = newLeaves;
        }

        return leaves;
    }

    public static main(): void {}    
}

Centroid.main();