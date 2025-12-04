/* advanced algorithms: A* Search */
// a shortest path algorithm (Graph).
import { MinPriorityQueue } from 'datastructures-js';

class Astar {
    /** A* Search shortestPath()
     * A shortest distance from the top left cell to the bottom right cell.
     * - Allow diagonal traverse ? Chebyshev : Manhattan.
     * - Property: Source-sink, Lazy.
     * @param {Array<Array<number>>} mat 
     * @returns {number}
     */
    shortestPath(mat: Array<Array<number>>): number {
        const len = mat.length;
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        if (mat[0][0] != 0 || mat[len - 1][len - 1] != 0)
            return -1;

        const heuristic = (pos: number[]) => {
            return 2 * len - 2 - pos[0] - pos[1]; // Manhattan distance
        };

        const opened = new MinPriorityQueue<number[]>(
            item => {
                const [R, C, g] = item;
                return g + heuristic([R, C]); // g(x) + h(x) = f(x)
            }
        );
        opened.enqueue([0, 0, 0]);

        // 2 missions: Mark visited & Track cost (updatable).
        const gCost = new Map<string, number>();
        gCost.set('0,0', 0.0);

        while (!opened.isEmpty()) {
            const [R, C, currG] = opened.dequeue()!;
            const currKey = `${R},${C}`;

            // Already found a better path to current pos.
            if (currG > gCost.get(currKey)!)
                continue;

            // Destination reached -> return g_cost.
            if (R == len - 1 && C == len - 1)
                return currG;

            for (const [dR, dC] of dirs) {
                const [newR, newC] = [R + dR, C + dC];
                const neiKey = `${newR},${newC}`;

                if (newR < 0 || newR >= len || newC < 0 || newC >= len)
                    continue;

                if (mat[newR][newC] != 0) // blocked
                    continue;

                const newG = currG + 1;

                // Haven't computed OR find out a better path -> Relax.
                if (!gCost.has(neiKey) || newG < gCost.get(neiKey)!) {
                    gCost.set(neiKey, newG);
                    // Laziness: add new query instead of update priority key.
                    opened.enqueue([newR, newC, newG]);
                }
            }
        }

        return -1;
    }

    public static main(): void {}
}

Astar.main();