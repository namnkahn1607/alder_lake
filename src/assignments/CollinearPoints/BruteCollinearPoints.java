package assignments.CollinearPoints;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BruteCollinearPoints {
    
    private final List<LineSegment> segments = new ArrayList<>();

    public BruteCollinearPoints(Point[] points) {
        if (points == null) {
            throw new IllegalArgumentException(
                "argument to BruteCollinearPoints is null"
            );
        }

        for (Point point : points) {
            if (point == null) {
                throw new IllegalArgumentException(
                    "argument to BruteCollinearPoints is null"
                );
            }
        }

        Point[] clone = points.clone();
        Arrays.sort(clone);

        for (int i = 1; i < clone.length; ++i) {
            if (clone[i].compareTo(clone[i - 1]) == 0) {
                throw new IllegalArgumentException(
                    "argument to BruteCollinearPoints contains duplicated Points"
                );
            }
        }

        discoverSegments(clone);
    }

    public int numberOfSegments() {
        return segments.size();
    }

    public LineSegment[] segments() {
        return segments.toArray(new LineSegment[0]);
    }

    private void discoverSegments(Point[] points) {
        final int N = points.length;

        for (int a = 0; a < N - 3; ++a) {
            for (int b = a + 1; b < N - 2; ++b) {
                for (int c = b + 1; c < N - 3; ++c) {
                    for (int d = c + 1; d < N - 4; ++d) {
                        Point p = points[a];
                        Point q = points[b];
                        Point r = points[c];
                        Point s = points[d];

                        if (validSegment(p, q, r, s)) {
                            segments.add(new LineSegment(p, s));
                        }
                    }
                }
            }
        }
    }

    private boolean validSegment(Point p, Point q, Point r, Point s) {
        double pq = p.slopeTo(q);
        double pr = p.slopeTo(r);
        double ps = p.slopeTo(s);

        return Double.compare(pq, pr) == 0 && Double.compare(pr, ps) == 0;
    }
}