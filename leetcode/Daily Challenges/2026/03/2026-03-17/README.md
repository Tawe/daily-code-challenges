# 2026-03-17

## Instructions
You are given a binary matrix `matrix` of size `m x n`, and you are allowed to rearrange the **columns** of the `matrix` in any order.

Return _the area of the largest submatrix within_ `matrix` _where **every** element of the submatrix is_ `1` _after reordering the columns optimally._

**Example 1:**
![](https://assets.leetcode.com/uploads/2020/12/29/screenshot-2020-12-30-at-40536-pm.png)

**Input:** matrix = [[0,0,1],[1,1,1],[1,0,1]]
**Output:** 4
**Explanation:** You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.

**Example 2:**
![](https://assets.leetcode.com/uploads/2020/12/29/screenshot-2020-12-30-at-40852-pm.png)

**Input:** matrix = [[1,0,1,0,1]]
**Output:** 3
**Explanation:** You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.

**Example 3:**
**Input:** matrix = [[1,1,0],[1,0,1]]
**Output:** 2
**Explanation:** Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m * n <= 105`
- `matrix[i][j]` is either `0` or `1`.

## My Thoughts

The key trick is to convert each row into histogram heights of consecutive `1`s ending at that row.

Step 1: build heights

- if `matrix[i][j] == 0`, height is `0`
- else height is `1 + height from row i-1`

Step 2: exploit column reordering

- for a fixed row, we can reorder columns however we want
- so sort that row’s heights in descending order
- for each width `w`, the limiting height is the `w`-th largest value
- area candidate = `height[w-1] * w`

Take the maximum across all rows.

This works because after sorting, choosing the first `w` columns guarantees at least that limiting height for all of them.

Time complexity: `O(m * n log n)` (sorting each row)  
Space complexity: `O(m * n)` for stored heights

## What I Learned

- “Can reorder columns” means column identity no longer matters; only multiset of heights matters per row.
- Converting binary rows to histogram heights is a reusable pattern for maximal-rectangle style problems.
- Sorting per row transforms the search into a simple width-vs-height scan.
- The `w`-th tallest column determines the best possible height for width `w`.
