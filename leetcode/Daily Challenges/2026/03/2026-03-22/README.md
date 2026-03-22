# 2026-03-22

## Instructions
Given two `n x n` binary matrices `mat` and `target`, return `true` _if it is possible to make_ `mat` _equal to_ `target` _by **rotating**_ `mat` _in **90-degree increments**, or_ `false` _otherwise._

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/05/20/grid3.png)
**Input:** mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
**Output:** true
**Explanation:** We can rotate mat 90 degrees clockwise to make mat equal target.

**Example 2:**
![](https://assets.leetcode.com/uploads/2021/05/20/grid4.png)
**Input:** mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
**Output:** false
**Explanation:** It is impossible to make mat equal to target by rotating mat.

**Example 3:**
![](https://assets.leetcode.com/uploads/2021/05/26/grid4.png)
**Input:** mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
**Output:** true
**Explanation:** We can rotate mat 90 degrees clockwise two times to make mat equal target.

**Constraints:**
- `n == mat.length == target.length`
- `n == mat[i].length == target[i].length`
- `1 <= n <= 10`
- `mat[i][j]` and `target[i][j]` are either `0` or `1`.

## My Thoughts

There are only 4 possible orientations of `mat`:

- original
- rotated 90 degrees
- rotated 180 degrees
- rotated 270 degrees

So the simplest solution is:

- compare `mat` with `target`
- if they are not equal, rotate `mat` 90 degrees clockwise
- repeat up to 4 times

I split that into two helpers:

- `isSame` to compare two matrices cell by cell
- `rotate` to build the next rotated matrix

Because `n <= 10`, this direct simulation is clean and more than fast enough.

Time complexity: `O(4 * n^2)`, which simplifies to `O(n^2)`  
Space complexity: `O(n^2)` for the rotated matrix

## What I Learned

- When the number of possible transformations is tiny and fixed, brute-force checking all cases is often the best solution.
- Separating “transform” and “compare” into helpers keeps the main logic easy to read.
- Clockwise matrix rotation follows a standard index mapping: `new[j][n-1-i] = old[i][j]`.
- Small constraints often reward straightforward code over premature optimization.
