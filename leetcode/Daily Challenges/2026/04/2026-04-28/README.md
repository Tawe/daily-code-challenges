# 2026-04-28

## Instructions
You are given a 2D integer `grid` of size `m x n` and an integer `x`. In one operation, you can **add** `x` to or **subtract** `x` from any element in the `grid`.

A **uni-value grid** is a grid where all the elements of it are equal.

Return _the **minimum** number of operations to make the grid **uni-value**_. If it is not possible, return `-1`.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/09/21/gridtxt.png)
**Input:** grid = [[2,4],[6,8]], x = 2
**Output:** 4
**Explanation:** We can make every element equal to 4 by doing the following: 
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used.

**Example 2:**
![](https://assets.leetcode.com/uploads/2021/09/21/gridtxt-1.png)
**Input:** grid = [[1,5],[2,3]], x = 1
**Output:** 5
**Explanation:** We can make every element equal to 3.

**Example 3:**
![](https://assets.leetcode.com/uploads/2021/09/21/gridtxt-2.png)
**Input:** grid = [[1,2],[3,4]], x = 2
**Output:** -1
**Explanation:** It is impossible to make every element equal.

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 105`
- `1 <= m * n <= 105`
- `1 <= x, grid[i][j] <= 104`

## My Thoughts

This one becomes much cleaner after flattening the grid into a single array.

Before optimizing anything, we need a feasibility check: because each move changes a value by exactly `x`, two numbers can only be made equal if they have the same remainder modulo `x`.  
So if any cell has a different `value % x`, the answer is immediately `-1`.

If it is feasible, the problem reduces to minimizing total absolute distance in steps of `x`.  
That is the classic median optimization pattern:

- sort all flattened values
- choose the median as the target value
- sum `abs(value - median) / x` across all elements

The median minimizes the sum of absolute differences, so this gives the minimum number of operations.

### Complexity

- Time: `O(m * n * log(m * n))` due to sorting
- Space: `O(m * n)` for the flattened array

## What I Learned

This challenge reinforced the habit of checking modular invariants early.  
The `% x` condition decides possibility before any heavier work.

It also highlighted a very reusable pattern: once operations are uniform step changes and we minimize absolute movement, the median is usually the right target.