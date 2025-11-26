/* advanced algorithms: Heirholzer */

class Eulerian {
    calculateProperties(adj: number[][]): {
        indeg: number[]; outdeg: number[]; isValid: boolean;
    } {
        const V = adj.length;
        const indeg = new Array(V).fill(0);
        const outdeg = new Array(V).fill(0);

        for (let i = 0; i < V; ++i) {
            outdeg[i] = adj[i].length;
            
            for (const nei of adj[i]) {
                ++indeg[nei];
            }
        }
        
        let start = 0, end = 0;

        for (let i = 0; i < V; ++i) {
            const diff = outdeg[i] - indeg[i];
            switch (diff) {
                case 0: continue;
                case 1: ++start; break;
                case -1: ++end; break;
                default: return { indeg, outdeg, isValid: false };
            }
        }

        const isValid = (start === 0 && end === 0) || (start === 1 && end === 1);
        return { indeg, outdeg, isValid };
    }

    hasPath(adj: number[][]): boolean {
        const { isValid } = this.calculateProperties(adj);
        return isValid;
    }

    buildPath(adj: number[][]): Array<number> {
        const V = adj.length;
        const E = adj.reduce((cnt, item) => cnt + item.length, 0);
        const path = new Array<number>();

        const { indeg, outdeg, isValid } = this.calculateProperties(adj);

        if (!isValid) return [];

        const startPoint = (): number => {
            let src = 0;

            for (let i = 0; i < V; ++i) {
                if (outdeg[i] - indeg[i] == 1)
                    return i;

                if (outdeg[i] > 0)
                    src = i;
            }

            return src;
        };

        const dfs = (curr: number) => {
            while (outdeg[curr] != 0) {
                --outdeg[curr];
                const nei = adj[curr][outdeg[curr]];
                dfs(nei);
            }

            path.push(curr);
        };

        dfs(startPoint());

        if (path.length == E + 1)
            return path.reverse();

        return [];
    }

    public static main(): void {}
}

Eulerian.main();