package assignments.DequesRandomizedQueues;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class Deque<T> implements Iterable<T> {

    private class Node {
        T val;
        Node prev;
        Node next;

        Node(Node prev, T val, Node next) {
            this.prev = prev;
            this.val = val;
            this.next = next;
        }

        Node(Node prev, T val) {
            this(prev, val, null);
        }

        Node(T val, Node next) {
            this(null, val, next);
        }

        Node(T val) {
            this(null, val, null);
        }
    }

    private Node head = null;
    private Node tail = null;
    private int size = 0;

    public Deque() {}

    public void addFirst(T val) {
        validateItem(val);

        if (isEmpty()) {
            head = new Node(val);
            tail = head; 
        } else {
            Node newNode = new Node(val, head);
            head.prev = newNode;
            head = newNode;
        }

        ++size;
    }

    public void addLast(T val) {
        validateItem(val);

        if (isEmpty()) {
            tail = new Node(val);
            head = tail;
        } else {
            Node newNode = new Node(tail, val);
            tail.next = newNode;
            tail = newNode;
        }

        ++size;
    }

    public T removeFirst() {
        if (isEmpty()) {
            throw new NoSuchElementException("Can not operate on empty Deque");
        }

        T ans = head.val;
        head = head.next;
        --size;

        if (isEmpty()) {
            tail = null;
        } else {
            head.prev = null;
        }

        return ans;
    }

    public T removeLast() {
        if (isEmpty()) {
            throw new NoSuchElementException("Can not operate on empty Deque");
        }

        T ans = tail.val;
        tail = tail.prev;
        --size;

        if (isEmpty()) {
            head = null;
        } else {
            tail.next = null;
        }

        return ans;
    }

    public boolean isEmpty() {
        return size() == 0;
    }

    public int size() {
        return this.size();
    }

    @Override
    public Iterator<T> iterator() {
        return new DequeIterator();
    }

    private class DequeIterator implements Iterator<T> {

        private Node current = head;

        @Override
        public boolean hasNext() {
            return current != null;
        }

        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException("No more element to iterate");
            }

            T val = current.val;
            current = current.next;

            return val;
        }

        @Override
        public void remove() {
            throw new UnsupportedOperationException(
                "This operation is not allowed"
            );
        }
    }

    private void validateItem(T val) {
        if (val == null) {
            throw new IllegalArgumentException("Item must not be null");
        }
    }
}