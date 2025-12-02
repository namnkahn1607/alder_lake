/* advanced ADT: Index Priority Queue */

abstract class IndexPQ {
    protected pq: Array<number>; // heappos -> ID
    protected qp: Array<number>; // ID -> heappos
    protected keys: Array<number>; // ID -> priority value

    constructor(items: Array<number> = []) {
        const N = items.length;
        this.keys = structuredClone(items);
        
        // at this time, heappos == ID
        this.pq = Array.from({ length: N }, (_, i) => i);
        this.qp = Array.from({ length: N }, (_, i) => i);
        
        // correct the heap order
        this.heapify();
    }

    insert(val: number): void {
        this.keys.push(val);
        this.swim(this.size() - 1);
    }

    remove(): number | undefined {
        if (this.isEmpty()) return;

        const [pq, qp] = [this.pq, this.qp];
        const keys = this.keys;

        // remove at heappos 0
    }

    peek(): number | undefined {
        if (this.isEmpty()) return;

        return this.keys[this.pq[0]];
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

    protected greater(x: number, y: number): boolean {
        const idX = this.pq[x];
        const idY = this.pq[y];

        return this.keys[idX] > this.keys[idY];
    }

    protected swap(x: number, y: number): void {
        const [pq, qp] = [this.pq, this.qp];
        
        const temp = pq[x];
        pq[x] = pq[y];
        pq[y] = temp;

        qp[pq[x]] = x;
        qp[pq[y]] = y;
    }

    /** Heapify
     * -> Use only for PQ construction from Array of N size.
     * - Efficient - O(N) compared to percolating/shrinking
     * N items, which takes O(NlogN).
     */
    private heapify(): void {
        const size = this.size() - 1;
        const start = Math.floor((size - 2) / 2);

        for (let i = start; i >= 0; --i) {
            this.sink(i);
        }
    }
}

export { IndexPQ };