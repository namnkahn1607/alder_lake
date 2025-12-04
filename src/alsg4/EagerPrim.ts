/* advanced algorithms: Eager Prim */
// a minimum spanning tree algorithm (Undirected Graph).
import { IndexMinPQ } from './IndexMinPQ.ts';

type Edge = [number, number, number];

class EagerPrim {
    mst(V: number, edges: Array<Edge>): Array<Edge> {
        const adj = Array.from(
            { length: V }, () => new Array<number[]>
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        const MST = new Array<Edge>();
        const marked = new Array(V).fill(false);
        const edgeTo = new Array(V).fill(-1);
        const distTo = new Array(V).fill(Infinity);
        distTo[0] = 0.0;

        const minPQ = new IndexMinPQ<number>(V);
        minPQ.insert(0, distTo[0]);

        while (!minPQ.isEmpty()) {
            const v = minPQ.delMin();
            marked[v] = true;

            if (edgeTo[v] != -1) {
                const u = edgeTo[v];
                const wei = distTo[v];
                MST.push([u, v, wei]);
            }
            
            for (const [w, wei] of adj[v]) {
                if (marked[w]) continue;
                if (wei >= distTo[w]) continue;

                distTo[w] = wei;
                edgeTo[w] = v; 

                if (minPQ.contains(w)) {
                    minPQ.decreaseKey(w, distTo[w]);
                } else {
                    minPQ.insert(w, distTo[w]);
                }
            }
        }

        return MST;
    }

    public static main(): void {}
}

EagerPrim.main();

export { EagerPrim };