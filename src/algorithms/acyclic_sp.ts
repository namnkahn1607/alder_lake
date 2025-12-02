/* algorithms: Acyclic Shortest Path */
// shortest path to all vertices of a weighted DAG
import { Topological } from './topological.ts';

class AcyclicShortestPath {
    shortestPath(V: number, edges: Array<Array<number>>): Array<Array<number>> {
        const adj = Array.from(
            { length: V }, () => new Array<number[]>(V)
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const order = new Topological().topoOrder(V, edges);

        if (order.length != V) {
            throw new Error(
                "Not a DAG or broken Topological algorithm"
            );
        }

        const distTo = new Array(V).fill(Infinity);
        distTo[order[0]] = 0.0;

        for (const vertex of order) {
            for (const [nei, wei] of adj[vertex]) {
                const newWeight = distTo[vertex] + wei;

                if (newWeight < distTo[nei]) {
                    distTo[nei] = newWeight;
                }
            }
        }

        return distTo;
    }

    public static main(): void {}
}

AcyclicShortestPath.main();