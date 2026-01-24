class PriorityQueue<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    enqueue(item: T): void {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }
        return top;
    }

    private heapifyUp(idx: number): void {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.compare(this.heap[idx], this.heap[parent]) < 0) {
                [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
                idx = parent;
            } else {
                break;
            }
        }
    }

    private heapifyDown(idx: number): void {
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

class DLLNode {
    idx: number;
    val: number;
    prev?: DLLNode;
    next?: DLLNode;
    isRemoved = false;

    constructor(idx: number, val: number, prev?: DLLNode, next?: DLLNode) {
        this.idx = idx;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function link(a: DLLNode, b: DLLNode): void {
    a.next = b;
    b.prev = a;
}

function merge(a: DLLNode, b: DLLNode): DLLNode {
    const c = new DLLNode(a.idx, a.val + b.val);

    link(a.prev!, c);
    link(c, b.next!);

    a.isRemoved = b.isRemoved = true;
    a.prev = a.next = undefined;
    b.prev = b.next = undefined;

    return c;
}

function minimumPairRemoval(nums: number[]): number {
    const q = new PriorityQueue<[DLLNode, DLLNode, number]>(
        (a, b) => a[2] - b[2] || a[0].idx - b[0].idx,
    );
    const n = nums.length;
    let unsortedPairs = 0;

    const head = new DLLNode(-1, -Infinity);
    let tail = new DLLNode(0, nums[0]);

    link(head, tail);

    for (let i = 1; i < n; ++i) {
        const node = new DLLNode(i, nums[i]);
        link(tail, node);
        q.enqueue([tail, node, tail.val + node.val]);
        if (tail.val > node.val) ++unsortedPairs;
        tail = node;
    }

    const sentinel = new DLLNode(n, Infinity);
    link(tail, sentinel);
    tail = sentinel;

    let ans = 0;

    while (unsortedPairs > 0) {
        const pair = q.dequeue();
        if (!pair) break;
        const [left, right, sum] = pair;

        if (left.isRemoved || right.isRemoved) continue;

        const merged = merge(left, right);
        const prev = merged.prev!;
        const next = merged.next!;

        if (prev !== head) q.enqueue([prev, merged, prev.val + sum]);
        if (next !== tail) q.enqueue([merged, next, sum + next.val]);

        if (prev.val > left.val) --unsortedPairs;
        if (left.val > right.val) --unsortedPairs;
        if (right.val > next.val) --unsortedPairs;

        if (prev.val > sum) ++unsortedPairs;
        if (sum > next.val) ++unsortedPairs;

        ++ans;
    }

    return ans;
}

const x = minimumPairRemoval([5,2,3,1])
x;