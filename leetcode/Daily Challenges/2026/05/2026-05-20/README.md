# 2026-05-20

## Instructions
You are given two **0-indexed** integer permutations `A` and `B` of length `n`.

A **prefix common array** of `A` and `B` is an array `C` such that `C[i]` is equal to the count of numbers that are present at or before the index `i` in both `A` and `B`.

Return _the **prefix common array** of_ `A` _and_ `B`.

A sequence of `n` integers is called a **permutation** if it contains all integers from `1` to `n` exactly once.

**Example 1:**
**Input:** A = [1,3,2,4], B = [3,1,2,4]
**Output:** [0,2,3,4]
**Explanation:** At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.

**Example 2:**
**Input:** A = [2,3,1], B = [3,1,2]
**Output:** [0,1,3]
**Explanation:** At i = 0: no number is common, so C[0] = 0.
At i = 1: only 3 is common in A and B, so C[1] = 1.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.

**Constraints:**
- `1 <= A.length == B.length == n <= 50`
- `1 <= A[i], B[i] <= n`
- `It is guaranteed that A and B are both a permutation of n integers.`

## Solution

Walk through both arrays from left to right and track which values have appeared so far in each one.

For each index `i`:

- add `A[i]` to the set of values seen in `A`
- add `B[i]` to the set of values seen in `B`
- count how many seen values are present in both sets

That count becomes the answer for position `i`.

### Key idea

The prefix common count at index `i` depends only on:

- values seen in `A[0..i]`
- values seen in `B[0..i]`

So we keep two hash-based sets:

- `in_a`
- `in_b`

After inserting the current elements, we count the keys in `in_a` that also exist in `in_b`.

Because `A` and `B` are permutations, each value appears only once in each array, which keeps the logic simple.

### Why this works

At step `i`, a number should contribute to `C[i]` exactly when it has already appeared in both prefixes.

That is precisely what the membership test checks:

- if a value is in both `in_a` and `in_b`, it is prefix-common
- otherwise, it is not yet common

Doing this at every index produces the full prefix common array.

### Complexity

- Time: `O(n^2)` in this implementation, because we recount common keys at each index
- Space: `O(n)`

With `n <= 50`, this is easily fast enough.
