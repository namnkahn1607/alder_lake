/* algorithms: Prim */
// MST of an Undigraph
import { MinPriorityQueue } from "datastructures-js";

class Prim {
    mst(n: number, edges: number[][]): number[][] {
        const adj = Array.from(
            { length: n }, () => new Array<number[]>()
        );

        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        const MST: number[][] = [];
        const visited = new Array<boolean>(n)
            .fill(false);
        const minPQ = new MinPriorityQueue<number[]>(
            item => item[0]
        );

        for (const [nei, w] of adj[0]) {
            minPQ.enqueue([w, 0, nei]);
        }

        while (MST.length < n - 1) {
            if (minPQ.isEmpty()) return [];

            const [_, src, v1] = minPQ.dequeue()!;

            if (visited[v1]) continue;

            MST.push([src, v1]);
            visited[v1] = true;
            
            for (const [v2, w2] of adj[v1]) {
                if (visited[v2]) {
                    minPQ.enqueue([w2, v1, v2]);
                }
            }
        }

        return MST;
    }

    public static main(): void {}
}

Prim.main();