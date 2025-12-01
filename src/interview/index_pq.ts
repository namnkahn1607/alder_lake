/* advanced ADT: Index Priority Queue */

abstract class IndexPQ {
    // 0-indexed Array - error-prone but promotes generic afterwards
    protected pq: Array<number>;

    constructor(items: Array<number> = []) {
        // Cloning - argument Array does not want to be a Heap
        this.pq = structuredClone(items);
        this.heapify();
    }

    insert(val: number): void {
        this.pq.push(val);
        this.swim(this.size() - 1);
    }

    remove(): number | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        if (this.size() == 1) {
            return this.pq.pop();
        }

        const ans = this.pq[0];
        this.pq[0] = this.pq.pop()!;
        this.sink(0);

        return ans;
    }

    size(): number {
        return this.pq.length;
    }

    isEmpty(): boolean {
        return this.size() == 0;
    }

    // Percolate
    protected abstract swim(i: number): void;

    // Shrink
    protected abstract sink(i: number): void;

    /** Heapify
     * -> Use only for PQ construction from Array of N size.
     * - Efficient - O(N) compared to percolating/shrinking
     * N items, which takes O(NlogN).
     */
    private heapify(): void {
        const size = this.size() - 1;
        const start = Math.floor((size - 1) / 2) - 1;

        for (let i = start; i >= 0; --i) {
            this.sink(i);
        }
    }
}

export { IndexPQ };