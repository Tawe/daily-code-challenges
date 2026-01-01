# 2025-12-05

## Instructions

You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

Left subarray contains indices [0, i].
Right subarray contains indices [i + 1, n - 1].
Return the number of partitions where the difference between the sum of the left and right subarrays is even.

```
Example 1:
Input: nums = [10,10,3,7,6]
Output: 4
Explanation:
The 4 partitions are:
[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.

Example 2:
Input: nums = [1,2,2]
Output: 0
Explanation:
No partition results in an even sum difference.

Example 3:
Input: nums = [2,4,6,8]
Output: 3
Explanation:
All partitions result in an even sum difference.
```

Constraints:
2 <= n == nums.length <= 100
1 <= nums[i] <= 100

## My Thoughts

When I first read the problem, my instinct was to reach for prefix sums and manually simulate each partition. It felt like one of those tasks where you accumulate a running left sum, compute the right sum from the total, and then check the parity for every split. And while that approach would work, something felt suspicious about how simple the examples were. Problems that revolve around “even vs odd” differences often hide a parity shortcut.
Once I wrote out the expression for the difference explicitly, everything clicked. The problem frames the difference as leftSum - rightSum, but substituting rightSum = total - leftSum reveals a much cleaner structure:
`diff = 2 * leftSum - total`
This was the entire puzzle.
2 * leftSum is always even. That means the parity of the final difference is determined solely by the parity of total. If total is odd, no partition can ever produce an even difference. If total is even, every partition will produce an even difference.
I didn’t need prefix sums at all. I didn’t even need to inspect individual indices. The entire problem collapses to a single check on the total sum. Once I saw that, the “optimal solution” went from a full loop with running state to a three-line function.
It was a reminder that whenever a question involves “even or odd,” the fastest path is often not math but parity reasoning—reduce the expression and see what actually controls the parity.

## What I Learned

- Parity simplifies problems dramatically.
By expressing the difference in its expanded form, the entire computation reduced to checking whether total was even.
2 * leftSum hides an important property:
Multiplying any integer by 2 guarantees an even number. Once that clicked, it became obvious that leftSum never affected the even/odd nature of the result.
- If a value doesn’t influence parity, it can often be ignored entirely.
This is why checking every prefix sum is unnecessary the left sums influence magnitude, but not parity.
- Sometimes the best optimization is algebra, not code.
Rearranging the equation saved an entire pass and simplified the problem to a constant-time decision.
- The number of valid partitions is structural, not data-driven.
When the total is even, every split between 0 and n-2 is valid, giving exactly n - 1 partitions.
- Reading examples carefully can hint at the hidden pattern.
All-evens → all valid. Contains an odd total → none valid. That consistency hinted that something global—not per-index—was controlling the output.
