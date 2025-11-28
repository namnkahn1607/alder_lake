package assignments.Percolation;

import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {

    private final boolean[][] system;
    private final WeightedQuickUnionUF uf;
    private final int dimension;
    private int opened;

    private final int topVirtualSiteIndex;
    private final int bottomVirtualSiteIndex;

    private final int[][] dir = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    public Percolation(int N) {
        if (N <= 0) {
            throw new IllegalArgumentException(
                "Argument to Percolation is <= 0"
            );
        }

        final int totalSites = N * N;

        this.system = new boolean[N][N];
        this.uf = new WeightedQuickUnionUF(totalSites + 2);
        this.dimension = N;
        this.opened = 0;

        this.topVirtualSiteIndex = totalSites;
        this.bottomVirtualSiteIndex = totalSites + 1;
    }

    public void open(int row, int col) {
        validateOrThrow(row, col);

        if (system[row - 1][col - 1]) {
            return;
        }

        system[row - 1][col - 1] = true;
        ++opened;

        final int currentSiteIndex = calcIndex(row, col);

        if (row == 1) {
            uf.union(topVirtualSiteIndex, currentSiteIndex);
        }

        if (row == dimension) {
            uf.union(bottomVirtualSiteIndex, currentSiteIndex);
        }

        for (int[] direction : dir) {
            int newRow = row + direction[0];
            int newCol = col + direction[1];

            if (validatePos(newRow, newCol) && isOpen(newRow, newCol)) {
                final int neighborSiteIndex = calcIndex(newRow, newCol);
                uf.union(neighborSiteIndex, currentSiteIndex);
            }
        }
    }

    public boolean isOpen(int row, int col) {
        validateOrThrow(row, col);
        return system[row - 1][col - 1];
    }

    public boolean isFull(int row, int col) {
        if (!isOpen(row, col)) {
            return false;
        }

        return uf.find(calcIndex(row, col)) == uf.find(topVirtualSiteIndex);
    }

    public int numberOfOpenSites() {
        return opened;
    }

    public boolean percolates() {
        return uf.find(topVirtualSiteIndex) == uf.find(bottomVirtualSiteIndex);
    }

    private boolean validatePos(int row, int col) {
        return (1 <= row && row <= dimension) 
            && (1 <= col && col <= dimension);
    }

    private void validateOrThrow(int row, int col) {
        if (!validatePos(row, col)) {
            throw new IllegalArgumentException(
                "Accessing out of bounds"
            );
        }
    }

    private int calcIndex(int row, int col) {
        return (row - 1) * dimension + (col - 1);
    }
}