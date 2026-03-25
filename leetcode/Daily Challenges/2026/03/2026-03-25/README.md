# 2026-03-25

## Instructions
You are given an `m x n` matrix `grid` of positive integers. Your task is to determine if it is possible to make **either one horizontal or one vertical cut** on the grid such that:

- Each of the two resulting sections formed by the cut is **non-empty**.
- The sum of the elements in both sections is **equal**.

Return `true` if such a partition exists; otherwise return `false`.

**Example 1:**
**Input:** grid = [[1,4],[2,3]]
**Output:** true
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/03/30/lc.png)![](https://assets.leetcode.com/uploads/2025/03/30/lc.jpeg)
A horizontal cut between row 0 and row 1 results in two non-empty sections, each with a sum of 5. Thus, the answer is `true`.

**Example 2:**
**Input:** grid = [[1,3],[2,4]]
**Output:** false
**Explanation:**
No horizontal or vertical cut results in two non-empty sections with equal sums. Thus, the answer is `false`.

**Constraints:**

- `1 <= m == grid.length <= 105`
- `1 <= n == grid[i].length <= 105`
- `2 <= m * n <= 105`
- `1 <= grid[i][j] <= 105`

## My Thoughts

A valid cut means one side sums to exactly half of the total grid sum.

So the solution starts by:

- computing the total sum of all cells
- if the total is odd, return `false` immediately
- otherwise target sum for one side is `total / 2`

Then check both cut directions:

- horizontal cuts:
  - accumulate rows from top to bottom
  - after each possible cut, see if the running sum equals `half`
- vertical cuts:
  - accumulate columns from left to right
  - after each possible cut, see if the running sum equals `half`

As soon as one prefix reaches `half`, the other side must also equal `half`, so we can return `true`.

Time complexity: `O(m * n)`  
Space complexity: `O(1)`

## What I Learned

- Equal-partition grid problems often reduce to checking whether any prefix region reaches half of the total sum.
- An odd total sum is a fast impossibility check that avoids unnecessary work.
- Because only one straight horizontal or vertical cut is allowed, we only need row-prefix and column-prefix scans.
- Early return on the first valid cut keeps the implementation simple and efficient.
