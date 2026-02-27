# 2026-02-27

## Instructions
You are given a binary string s, and an integer k.

In one operation, you must choose exactly k different indices and flip each '0' to '1' and each '1' to '0'.

Return the minimum number of operations required to make all characters in the string equal to '1'. If it is not possible, return -1.

```
Example 1:
Input: s = "110", k = 1
Output: 1
Explanation:
There is one '0' in s.
Since k = 1, we can flip it directly in one operation.

Example 2:
Input: s = "0101", k = 3
Output: 2
Explanation:
One optimal set of operations choosing k = 3 indices in each operation is:
Operation 1: Flip indices [0, 1, 3]. s changes from "0101" to "1000".
Operation 2: Flip indices [1, 2, 3]. s changes from "1000" to "1111".
Thus, the minimum number of operations is 2.

Example 3:
Input: s = "101", k = 2
Output: -1
Explanation:
Since k = 2 and s has only one '0', it is impossible to flip exactly k indices to make all '1'. Hence, the answer is -1.
``` 
Constraints:

1 <= s.length <= 10​​​​​​​5
s[i] is either '0' or '1'.
1 <= k <= s.length

## My Thoughts

Instead of thinking about flipping exact indices directly, I tracked only one value:  
`z = number of zeros`.

Each operation flips exactly `k` bits:

- If we flip `a` zeros to ones, that reduces zeros by `a`
- We must also flip `k - a` ones to zeros, which increases zeros by `k - a`
- So the next zero count is:
  `z' = z - a + (k - a) = z + k - 2a`

So this becomes a shortest-path problem on states `z in [0, n]`, where each edge is one operation.  
That suggests BFS.

The tricky part is performance: we cannot scan all candidates naively for every state.  
Reachable `z'` values from a state form a contiguous range with step `2` (same parity).  
To process only unvisited states efficiently, I used a union-find-style `next` array with path compression that jumps to the next unvisited state of the same parity.

This keeps the solution efficient:

- Time: `O(n * alpha(n))` (near linear)
- Space: `O(n)`

## What I Learned

- Some binary-flip problems can be reduced to counting state (`#zeros`) instead of tracking exact bit positions.
- The transition formula `z' = z + k - 2a` makes the graph structure clear and naturally leads to BFS.
- A parity-aware "next unvisited" structure with path compression is a strong pattern for iterating large ranges efficiently.
