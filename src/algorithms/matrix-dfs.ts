/* algorithms: Matrix DFS */
// count paths to destination

class MatrixDFS {
    countPaths(mat: Array<Array<number>>): number {
        const [ROW, COL] = [mat.length, mat[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const dfs = (R: number, C: number): number => {
            if (R == ROW || C == COL ||
                Math.min(R, C) < 0 || mat[R][C] == 1)
                return 0;

            if (R == ROW - 1 && C == COL - 1)
                return 1;

            mat[R][C] = 1;
            let count = 0;

            for (const [dR, dC] of dirs) {
                count += dfs(R + dR, C + dC);
            }

            mat[R][C] = 0;

            return count;
        };

        return dfs(0, 0);
    }

    public static main(): void {}
}

MatrixDFS.main();