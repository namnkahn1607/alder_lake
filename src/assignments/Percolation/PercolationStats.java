package assignments.Percolation;

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {
    
    private final int T;
    private final double[] fractions;
    private final double mean;
    private final double stddev;

    public PercolationStats(int N, int trials) {
        if (N <= 0 || trials <= 0) {
            throw new IllegalArgumentException(
                "Arguments to PercolationStats is <= 0"
            );
        }

        final int totalSites = N * N;

        this.T = trials;
        this.fractions = new double[trials];
        
        for (int i = 0; i < trials; ++i) {
            Percolation model = new Percolation(N);

            while (!model.percolates()) {
                final int row = 1 + StdRandom.uniformInt(N);
                final int col = 1 + StdRandom.uniformInt(N);

                model.open(row, col);
            }

            fractions[i] = 1.0 * model.numberOfOpenSites() / totalSites;
        }

        this.mean = StdStats.mean(fractions);
        this.stddev = StdStats.stddev(fractions);
    }

    public double mean() {
        return this.mean;
    }

    public double stddev() {
        return this.stddev;
    }

    public double confidenceLo() {
        return mean() - 1.96 * stddev() / Math.sqrt(T);
    }

    public double confidenceHi() {
        return mean() + 1.96 * stddev() / Math.sqrt(T);
    }

    public static void main(String[] args) {
        final int N = StdIn.readInt();
        final int T = StdIn.readInt();

        PercolationStats unit = new PercolationStats(N, T);
        StdOut.printf("mean                    = %f%n", unit.mean());
        StdOut.printf("stddev                  = %f%n", unit.stddev());
        StdOut.printf("95%% confidence interval = [%f, %f]%n", unit.confidenceLo(), unit.confidenceHi());
    }
}