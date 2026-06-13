class SparseTable {
    private log: number[];
    private stMax: number[][];
    private stMin: number[][];

    constructor(nums: number[]) {
        const n = nums.length;
        this.log = new Array(n + 1);
        this.log[1] = 0;
        for (let i = 2; i <= n; i++) this.log[i] = this.log[i >> 1] + 1;

        const k = this.log[n] + 1;
        this.stMax = Array.from({ length: k }, () => new Array(n).fill(0));
        this.stMin = Array.from({ length: k }, () => new Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            this.stMax[0][i] = nums[i];
            this.stMin[0][i] = nums[i];
        }
        for (let j = 1; j < k; j++) {
            for (let i = 0; i + (1 << j) <= n; i++) {
                const half = 1 << (j - 1);
                this.stMax[j][i] = Math.max(this.stMax[j - 1][i], this.stMax[j - 1][i + half]);
                this.stMin[j][i] = Math.min(this.stMin[j - 1][i], this.stMin[j - 1][i + half]);
            }
        }
    }

    queryMax(l: number, r: number): number {
        const k = this.log[r - l + 1];
        return Math.max(this.stMax[k][l], this.stMax[k][r - (1 << k) + 1]);
    }

    queryMin(l: number, r: number): number {
        const k = this.log[r - l + 1];
        return Math.min(this.stMin[k][l], this.stMin[k][r - (1 << k) + 1]);
    }
}

type HeapItem = { val: number; l: number; r: number };

function maxTotalValue(nums: number[], k: number): number {
    const n = nums.length;
    const st = new SparseTable(nums);
    const heap: HeapItem[] = [];

    const heapPush = (item: HeapItem) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p].val >= heap[i].val) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const heapPop = (): HeapItem => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let best = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                if (left < heap.length && heap[left].val > heap[best].val) best = left;
                if (right < heap.length && heap[right].val > heap[best].val) best = right;
                if (best === i) break;
                [heap[i], heap[best]] = [heap[best], heap[i]];
                i = best;
            }
        }
        return top;
    };

    const subarrayValue = (l: number, r: number) => st.queryMax(l, r) - st.queryMin(l, r);

    for (let l = 0; l < n; l++) {
        heapPush({ val: subarrayValue(l, n - 1), l, r: n - 1 });
    }

    let total = 0n;
    for (let i = 0; i < k; i++) {
        const { val, l, r } = heapPop();
        total += BigInt(val);
        if (r > l) heapPush({ val: subarrayValue(l, r - 1), l, r: r - 1 });
    }

    return Number(total);
}

console.log(maxTotalValue([1, 3, 2], 2)); // 4
console.log(maxTotalValue([4, 2, 5, 1], 3)); // 12
