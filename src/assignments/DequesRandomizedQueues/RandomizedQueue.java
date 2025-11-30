package assignments.DequesRandomizedQueues;

import java.util.Iterator;
import java.util.NoSuchElementException;

import edu.princeton.cs.algs4.StdRandom;

public class RandomizedQueue<T> implements Iterable<T> {
    
    private static final int INITIAL_CAPACITY = 8;
    
    @SuppressWarnings("unchecked")
    private T[] array = (T[]) new Object[INITIAL_CAPACITY];
    private int capacity = INITIAL_CAPACITY;
    private int size = 0;

    public RandomizedQueue() {}

    public void enqueue(T val) {
        validateItem(val);

        if (size == capacity) {
            grow();
        }

        array[size++] = val;
    }

    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Can not operate on empty RandomizedQueue");
        }

        int pos = StdRandom.uniformInt(size);
        T ans = array[pos];
        array[pos] = array[--size];

        if (size > 0 && size <= capacity / 4) {
            shrink();
        }

        return ans;
    }

    public T sample() {
        if (isEmpty()) {
            throw new NoSuchElementException("Can not operate on empty RandomizedQueue");
        }

        return array[StdRandom.uniformInt(size)];
    }

    public boolean isEmpty() {
        return size() == 0;
    }

    public int size() {
        return this.size;
    }

    @Override
    public Iterator<T> iterator() {
        return new RandomizedQueueIterator();
    }

    private class RandomizedQueueIterator implements Iterator<T> {

        private final int[] indices;
        private int current;
        
        public RandomizedQueueIterator() {
            this.indices = new int[size()];
            this.current = 0;

            for (int i = 0; i < size; ++i) {
                indices[i] = i;
            }

            StdRandom.shuffle(indices);
        }

        @Override
        public boolean hasNext() {
            return current < indices.length;
        }

        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException("No more item to iterate");
            }

            T val = array[indices[current++]];
            return val;
        }
    }

    private void grow() {
        resize(2 * capacity);
    }

    private void shrink() {
        resize(Math.max(1, capacity / 2));
    }

    @SuppressWarnings("unchecked")
    private void resize(int newCapacity) {
        T[] newArray = (T[]) new Object[newCapacity];
        System.arraycopy(array, 0, newArray, 0, size);

        array = newArray;
        capacity = newCapacity;
    }

    private void validateItem(T val) {
        if (val == null) {
            throw new IllegalArgumentException("Item must not be null");
        }
    }
}