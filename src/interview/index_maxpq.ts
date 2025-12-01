/* advanced ADT: Index Max Priority Queue */

import { IndexPQ } from './index_pq.ts';

class IndexMaxPQ extends IndexPQ {
    constructor(items: Array<number> = []) {
        super(items);
    }

    protected swim(i: number): void {
        const heap = this.pq;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (heap[i] > heap[parent]) {
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    protected sink(i: number): void {
        const size = this.size();
        const heap = this.pq;

        // Proceed while having children
        while (2 * i + 1 <= size - 1) {
            const [left, right] = [2 * i + 1, 2 * i + 2];
            let maxChild = left;

            if (right <= size - 1 && heap[right] > heap[left]) {
                maxChild = right;
            }

            if (heap[i] < heap[maxChild]) {
                [heap[i], heap[maxChild]] = [heap[maxChild], heap[i]];
                i = maxChild;
            } else {
                break;
            }
        }
    }
}

export { IndexMaxPQ }; 