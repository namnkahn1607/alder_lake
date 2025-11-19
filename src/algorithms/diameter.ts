/* algorithms: Diameter of a Acyclic Graph */
// longest simple path in an Undigraph
import { Queue } from 'datastructures-js';

class GraphDiameter {
    longestSimplePath(n: number, edges: number[][]): number {
        const adj = Array.from({ length: n }, () => new Array<number>());

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const bfs = (src: number): number[] => {
            const queue = new Queue<number[]>();
            queue.enqueue([src, 0]);
            
            const visited = new Array(n).fill(false);
            visited[src] = true;

            let farthest = src;
            let maxDist = 0;

            while (!queue.isEmpty()) {
                const [curr, dist] = queue.dequeue()!;

                if (dist > maxDist) {
                    maxDist = dist;
                    farthest = curr;
                }

                for (const nei of adj[curr]) {
                    if (visited[nei]) continue;

                    queue.enqueue([nei, dist + 1]);
                    visited[nei] = true;
                }
            }
            
            return [farthest, maxDist];
        };

        const [end1, _] = bfs(0);
        const [_end2, dist] = bfs(end1);

        return dist;
    }

    public static main(): void {}
}

GraphDiameter.main();