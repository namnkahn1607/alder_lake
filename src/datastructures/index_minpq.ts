/* advanced ADT: Minimum-oriented Index Priority Queue */

/**
 * API methods (client's) works with ID.
 * Private helper methods works with heappos.
 */
class IndexMinPQ<Key> {
    private maxN: number;
    private n: number;
    private compareFn: (a: Key, b: Key) => number;

    // 1-indexed Arrays for the sake of simplicity.
    private pq: Array<number>; // heappos -> ID
    private qp: Array<number>; // ID -> heappos
    private keys: Array<Key | null>; // ID -> key

    constructor(maxN: number, compareFn?: (a: Key, b: Key) => number) {
        if (maxN < 0) {
            throw new Error('PQ\'s maximum capacity cannot be negative.');
        }

        this.maxN = maxN;
        this.n = 0;
        this.keys = new Array<Key | null>(maxN + 1);
        this.pq = new Array<number>(maxN + 1);
        this.qp = new Array(maxN + 1).fill(-1);

        this.compareFn = compareFn ?? ((a: Key, b: Key) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

    /**
     * Associates key with given ID.
     * @param {number} id 
     * @param {Key} key 
     */
    insert(id: number, key: Key): void {
        this.validateID(id);

        if (this.contains(id)) {
            throw new Error('ID is already occupied in PQ.');
        }

        ++this.n;
        this.qp[id] = this.n;
        this.pq[this.n] = id;
        this.keys[id] = key;
        this.swim(this.n);
    }

    /**
     * Removes minimum key and returns its ID.
     * @returns {number}
     */
    delMin(): number {
        if (this.isEmpty()) {
            throw new Error('PQ is currently empty.');
        }

        const minID = this.pq[1];
        this.swap(1, this.n--);
        this.sink(1);
        this.qp[minID] = -1;
        this.keys[minID] = null;
        this.pq[this.n + 1] = -1;

        return minID;
    }

    /**
     * Deletes the key associates with given ID.
     * @param {number} id
     * @returns {Key}
     */
    deleteKey(id: number): Key {
        this.validateID(id);

        if (!this.contains(id)) {
            throw new Error('ID does not exist in PQ.');
        }

        const key = this.keys[id]!;
        const heappos = this.qp[id];
        this.swap(heappos, this.n--);

        if (heappos <= this.n) {
            this.swim(heappos);
            this.sink(heappos);
        }

        this.keys[id] = null;
        this.qp[id] = -1;
        this.pq[this.n + 1] = -1;

        return key;
    }

    /**
     * Modifies the key (priority value) of given ID.
     * @param {number} id 
     * @param {Key} key 
     */
    changeKey(id: number, key: Key): void {
        this.validateID(id);

        if (!this.contains(id)) {
            throw new Error('ID does not exist in PQ.');
        }

        this.keys[id] = key;
        this.swim(this.qp[id]);
        this.sink(this.qp[id]);
    }

    /**
     * Increase the key (priority value) of given ID.
     * @param {number} id 
     * @param {number} key 
     */
    increaseKey(id: number, key: Key): void {
        this.validateID(id);

        if (!this.contains(id)) {
            throw new Error('ID does not exist in PQ.');
        }
        
        const cmp = this.compareFn(this.keys[id]!, key);

        if (cmp >= 0) {
            throw new Error(
                'Called to increaseKey() with a key less or equal than original one in PQ.'
            )
        }

        this.keys[id] = key;
        this.sink(this.qp[id]);
    }

    /**
     * Decrease the key (priority value) of given ID.
     * @param {number} id 
     * @param {number} key 
     */
    decreaseKey(id: number, key: Key): void {
        this.validateID(id);

        if (!this.contains(id)) {
            throw new Error('ID does not exist in PQ.');
        }

        const cmp = this.compareFn(this.keys[id]!, key);

        if (cmp <= 0) {
            throw new Error(
                'Called to decreaseKey() with a key greater or equal than original one in PQ.'
            )
        }

        this.keys[id] = key;
        this.swim(this.qp[id]);
    }

    /**
     * Returns ID of the minimum key.
     * @returns {number}
     */
    minID(): number {
        if (this.isEmpty()) {
            throw new Error('PQ is currently empty.');
        }

        return this.pq[1];
    }

    /**
     * Returns the minimum key.
     * @returns {Key}
     */
    minKey(): Key {
        if (this.isEmpty()) {
            throw new Error('PQ is currently empty.');
        }

        return this.keys[this.pq[1]]!;
    }

    /**
     * Returns the key associated with given ID.
     * @param {number} id
     * @returns {Key}
     */
    keyOf(id: number): Key {
        this.validateID(id);

        if (!this.contains(id)) {
            throw new Error('ID does not exist in PQ.');
        }

        return this.keys[id]!;
    }
    
    /**
     * Check if given ID exists within the PQ.
     * @param {number} id 
     * @returns {boolean}
     */
    contains(id: number): boolean {
        this.validateID(id);
        return this.qp[id] != -1;
    }

    isEmpty() {
        return this.n == 0;
    }

    size() {
        return this.n;
    }

    /**
     * Percolates key with given heappos.
     * @param {number} i the heappos
     */
    private swim(i: number): void {
        while (i > 1 && this.greater(Math.floor(i / 2), i)) {
            const par = Math.floor(i / 2);
            this.swap(i, par);
            i = par;
        }
    }

    /**
     * Shrinks key with given heappos.
     * @param {number} i the heappos
     */
    private sink(i: number): void {
        while (2 * i <= this.n) {
            let child = 2 * i;

            if (child < this.n && this.greater(child, child + 1)) {
                ++child;
            }

            if (!this.greater(i, child)) {
                break;
            }

            this.swap(i, child);
            i = child;
        }
    }

    /**
     * Compares keys at 2 different heappos.
     * @param {number} i 
     * @param {number} j 
     * @returns {boolean}
     */
    private greater(i: number, j: number): boolean {
        return this.compareFn(
            this.keys[this.pq[i]]!, this.keys[this.pq[j]]!
        ) > 0;
    }

    /**
     * Swaps keys at 2 different heappos.
     * @param {number} i 
     * @param {number} j 
     */
    private swap(i: number, j: number): void {
        const temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;

        this.qp[this.pq[i]] = i;
        this.qp[this.pq[j]] = j;
    }

    private validateID(id: number) {
        if (id < 0 || id >= this.maxN) {
            throw new Error('ID is out of bounds.');
        }
    }
}

export { IndexMinPQ };