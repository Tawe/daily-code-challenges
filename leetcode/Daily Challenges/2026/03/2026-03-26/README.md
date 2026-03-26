# 2026-03-26

## Instructions
You are given an `m x n` matrix `grid` of positive integers. Your task is to determine if it is possible to make **either one horizontal or one vertical cut** on the grid such that:

- Each of the two resulting sections formed by the cut is **non-empty**.
- The sum of elements in both sections is **equal**, or can be made equal by discounting **at most** one single cell in total (from either section).
- If a cell is discounted, the rest of the section must **remain connected**.

Return `true` if such a partition exists; otherwise, return `false`.

**Note:** A section is **connected** if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.

**Example 1:**
**Input:** grid = [[1,4],[2,3]]
**Output:** true
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/03/30/lc.jpeg)
- A horizontal cut after the first row gives sums `1 + 4 = 5` and `2 + 3 = 5`, which are equal. Thus, the answer is `true`.

**Example 2:**
**Input:** grid = [[1,2],[3,4]]
**Output:** true
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/04/01/chatgpt-image-apr-1-2025-at-05_28_12-pm.png)
- A vertical cut after the first column gives sums `1 + 3 = 4` and `2 + 4 = 6`.
- By discounting 2 from the right section (`6 - 2 = 4`), both sections have equal sums and remain connected. Thus, the answer is `true`.

**Example 3:**
**Input:** grid = [[1,2,4],[2,3,5]]
**Output:** false
**Explanation:**
**![](https://assets.leetcode.com/uploads/2025/04/01/chatgpt-image-apr-2-2025-at-02_50_29-am.png)**
- A horizontal cut after the first row gives `1 + 2 + 4 = 7` and `2 + 3 + 5 = 10`.
- By discounting 3 from the bottom section (`10 - 3 = 7`), both sections have equal sums, but they do not remain connected as it splits the bottom section into two parts (`[2]` and `[5]`). Thus, the answer is `false`.

**Example 4:**
**Input:** grid = [[4,1,8],[3,2,6]]
**Output:** false
**Explanation:**
No valid cut exists, so the answer is `false`.

**Constraints:**

- `1 <= m == grid.length <= 105`
- `1 <= n == grid[i].length <= 105`
- `2 <= m * n <= 105`
- `1 <= grid[i][j] <= 105`

## My Thoughts

This is an extension of the equal-partition cut problem, but now one side is allowed to discount at most one cell as long as the remaining section stays connected.

The overall structure is still:

- try every horizontal cut
- try every vertical cut
- maintain running sums of the two sides

For each cut:

- if the sums are already equal, return `true`
- otherwise let `diff` be the gap between the larger side and the smaller side
- the only way to fix that cut is to discount a single cell with value exactly `diff` from the larger side

The extra complication is connectivity:

- if the section has height > 1 and width > 1, removing any single cell still leaves it connected, so it is enough to know whether a cell of value `diff` exists in that side
- if the section is only one row or one column, removing an interior cell would split it, so only an endpoint cell can be discounted

That is why the solution keeps frequency maps for both sides and uses special endpoint checks for thin sections.

Time complexity: `O(m * n)`  
Space complexity: `O(m * n)` in the worst case for the frequency maps

## What I Learned

- Allowing one adjustment often turns a partition problem into “can I find an element equal to the sum difference?”
- Connectivity constraints matter most in degenerate shapes like single rows or single columns.
- Frequency maps are useful when cuts move incrementally, because they let you test value existence without rescanning a whole section.
- This problem is a good example of combining prefix-style accumulation with shape-specific edge-case handling.
