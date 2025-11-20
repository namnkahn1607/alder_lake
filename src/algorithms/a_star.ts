/* advanced algorithms: A* Search */
// shortest mincost path in Matrix
import { MinPriorityQueue } from 'datastructures-js';

class Astar {
    shortestPath(mat: Array<Array<number>>): number {
        const len = mat.length;
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        if (mat[0][0] != 0 || mat[len - 1][len - 1] != 0)
            return -1;

        const heuristic = (pos: number[]) => {
            return 2 * len - 2 - pos[0] - pos[1];
        };

        const opened = new MinPriorityQueue<number[]>(
            item => {
                const [R, C, g] = item;
                return g + heuristic([R, C]);
            }
        );
        opened.enqueue([0, 0, 0]);

        const gCost = new Map<string, number>();
        gCost.set('0,0', 0);

        while (!opened.isEmpty()) {
            const [R, C, currG] = opened.dequeue()!;
            const currKey = `${R},${C}`;

            if (currG > gCost.get(currKey)!)
                continue;

            if (R == len - 1 && C == len - 1)
                return currG;

            for (const [dR, dC] of dirs) {
                const [newR, newC] = [R + dR, C + dC];
                const neiKey = `${newR},${newC}`;

                if (newR < 0 || newR >= len || 
                    newC < 0 || newC >= len)
                    continue;

                if (mat[newR][newC] != 0)
                    continue;

                const newG = currG + 1;

                if (!gCost.has(neiKey) || newG < gCost.get(neiKey)!) {
                    gCost.set(neiKey, newG);
                    opened.enqueue([newR, newC, newG]);
                }
            }
        }

        return -1;
    }

    public static main(): void {}
}

Astar.main();