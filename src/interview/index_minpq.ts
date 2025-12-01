/* advanced ADT: Index Min Priority Queue */
// supports decreaseKey() operation
import { IndexPQ } from './index_pq.ts';

class IndexMinPQ extends IndexPQ {
    constructor(items: Array<number> = []) {
        super(items);
    }

    protected swim(i: number): void {
        const heap = this.pq;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (heap[i] < heap[parent]) {
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
            let minChild = left;

            if (right <= size - 1 && heap[right] < heap[left]) {
                minChild = right;
            }

            if (heap[minChild] < heap[i]) {
                [heap[i], heap[minChild]] = [heap[minChild], heap[i]];
                i = minChild;
            } else {
                break;
            }
        }
    }
}

export { IndexMinPQ };