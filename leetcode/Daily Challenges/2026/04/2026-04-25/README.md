# 2026-04-25

## Instructions
You are given an integer `side`, representing the edge length of a square with corners at `(0, 0)`, `(0, side)`, `(side, 0)`, and `(side, side)` on a Cartesian plane.

You are also given a **positive** integer `k` and a 2D integer array `points`, where `points[i] = [xi, yi]` represents the coordinate of a point lying on the **boundary** of the square.

You need to select `k` elements among `points` such that the **minimum** Manhattan distance between any two points is **maximized**.

Return the **maximum** possible **minimum** Manhattan distance between the selected `k` points.

The Manhattan Distance between two cells `(xi, yi)` and `(xj, yj)` is `|xi - xj| + |yi - yj|`.

**Example 1:**
**Input:** side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4
**Output:** 2
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/01/28/4080_example0_revised.png)
Select all four points.

**Example 2:**
**Input:** side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4
**Output:** 1
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/01/28/4080_example1_revised.png)
Select the points `(0, 0)`, `(2, 0)`, `(2, 2)`, and `(2, 1)`.

**Example 3:**
**Input:** side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5
**Output:** 1
**Explanation:**
![](https://assets.leetcode.com/uploads/2025/01/28/4080_example2_revised.png)
Select the points `(0, 0)`, `(0, 1)`, `(0, 2)`, `(1, 2)`, and `(2, 2)`.

**Constraints:**
- `1 <= side <= 109`
- `4 <= points.length <= min(4 * side, 15 * 103)`
- `points[i] == [xi, yi]`
- The input is generated such that:
    - `points[i]` lies on the boundary of the square.
    - All `points[i]` are **unique**.
- `4 <= k <= min(25, points.length)`

## My Thoughts

The key trick here is to stop thinking about the square as a 2D shape and instead unwrap its boundary into a 1D circular perimeter. Each boundary point can be mapped to a single position along that perimeter, which makes the selection problem much easier to reason about.

The Rust solution does exactly that:

- convert every boundary point into its perimeter offset
- sort those offsets
- duplicate the array with `+ perimeter` added to handle the circular wraparound

From there, the answer is binary-searched. For a candidate minimum distance `d`, the helper checks whether it is possible to greedily pick `k` points so that each next chosen perimeter position is at least `d` farther than the previous one. A final wraparound check makes sure the first and last chosen points are also far enough apart around the circle.

Because feasibility is monotonic, binary search works cleanly: if distance `d` is possible, then any smaller distance is also possible.

### Complexity

- Time: `O(n log side + n * k * log n)` in this implementation
- Space: `O(n)`

## What I Learned

This challenge reinforced a really useful reduction: when points lie on the boundary of a shape, it can be better to linearize that boundary instead of working directly in 2D.

It also highlighted the common "binary search on the answer" pattern. Once the problem becomes "can I pick `k` points with at least distance `d`?", the monotonic yes/no structure makes the optimization step much more manageable.
