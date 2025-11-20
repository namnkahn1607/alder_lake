/* algorithms: Matrix BFS */
// shortest path in Matrix
import { Queue } from 'datastructures-js';

class MatrixBFS {
    shortestPath(mat: Array<Array<number>>): number {
        const [ROW, COL] = [mat.length, mat[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const queue = new Queue<number[]>();
        queue.enqueue([0, 0]);
        let dist = 0;

        while(!queue.isEmpty()) {
            const len = queue.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = queue.dequeue()!;
                mat[R][C] = 1;

                if (R == ROW - 1 && C == COL - 1)
                    return dist;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (0 <= newR && newR < ROW && 
                        0 <= newC && newC < COL &&
                        mat[newR][newC] == 0) {
                        queue.enqueue([newR, newC]);
                    }
                }
            }

            ++dist;
        }

        return -1;
    }
    
    public static main(): void {}
}

MatrixBFS.main();