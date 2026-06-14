class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function pairSum(head: ListNode | null): number {
    let slow = head;
    let fast = head;

    while (fast?.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr = slow;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let max = 0;
    let left = head;
    let right = prev;
    while (right) {
        max = Math.max(max, left!.val + right.val);
        left = left!.next;
        right = right.next;
    }

    return max;
}

function fromArray(nums: number[]): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;
    for (const n of nums) {
        curr.next = new ListNode(n);
        curr = curr.next;
    }
    return dummy.next;
}

console.log(pairSum(fromArray([5, 4, 2, 1]))); // 6
console.log(pairSum(fromArray([4, 2, 2, 3]))); // 7
console.log(pairSum(fromArray([1, 100000]))); // 100001
