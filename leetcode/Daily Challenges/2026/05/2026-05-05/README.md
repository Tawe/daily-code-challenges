# 2026-05-05

## Instructions
Given the `head` of a linked list, rotate the list to the right by `k` places.

**Example 1:**
![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)
**Input:** head = [1,2,3,4,5], k = 2
**Output:** [4,5,1,2,3]

**Example 2:**
![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)
**Input:** head = [0,1,2], k = 4
**Output:** [2,0,1]

**Constraints:**
- The number of nodes in the list is in the range `[0, 500]`.
- `-100 <= Node.val <= 100`
- `0 <= k <= 2 * 109`

## My Thoughts

The clean way to rotate a linked list to the right is to first understand its length. Once the list length is known, rotating by `k` places is the same as rotating by `k % len`, because every full loop brings the list back to the same shape.

The Ruby solution follows the standard pattern:

- walk the list once to find the length and current tail
- reduce `k` with modulo
- connect the tail back to the head to form a circular list
- move to the new tail, which is `len - k - 1` steps from the original head
- cut the circle and return the new head

That avoids repeatedly shifting nodes and keeps the logic to just a couple of passes through the list.

### Complexity

- Time: `O(n)`
- Space: `O(1)`

## What I Learned

This challenge reinforced a common linked-list technique: turning the list into a temporary cycle can make rotation problems much easier to solve.

It also highlighted how important modulo reduction is in circular problems. Large values of `k` do not need special handling once they are reduced to the effective rotation amount.
