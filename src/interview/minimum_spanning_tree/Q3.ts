/* 3. Minimum-weight feedback edge set */
class Q3 {
    minimumFeedbackSet(V: number, edges: Array<Array<number>>): Array<Array<number>> {
        const par = Array.from({ length: V }, (_, i) => i);
        const rank = new Array(V).fill(1);

        const find = (i: number) => {
            if (i != par[i]) {
                par[i] = find(par[i]);
            }

            return par[i];
        };

        const union = (x: number, y: number): boolean => {
            const [rx, ry] = [find(x), find(y)];
            
            if (rx == ry) return false;

            if (rank[rx] < rank[ry]) {
                par[rx] = ry;
            } else if (rank[rx] > rank[ry]) {
                par[ry] = rx;
            } else {
                par[rx] = ry;
                ++rank[ry];
            }

            return true;
        };
        
        const MaxST = new Array<Array<number>>();
        edges.sort((a, b) => b[2] - a[2]);

        for (const edge of edges) {
            const [u, v, _] = edge;

            if (!union(u, v)) {
                MaxST.push([u, v, _]);
            }
        }

        return MaxST;
    }
}

export { Q3 };