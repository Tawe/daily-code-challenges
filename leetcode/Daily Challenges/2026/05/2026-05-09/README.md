# 2026-05-09

## Instructions
You are given an `m x n` integer matrix `grid`​​​, where `m` and `n` are both **even** integers, and an integer `k`.

The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:

![](https://assets.leetcode.com/uploads/2021/06/10/ringofgrid.png)

A cyclic rotation of the matrix is done by cyclically rotating **each layer** in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the **counter-clockwise** direction. An example rotation is shown below:

![](https://assets.leetcode.com/uploads/2021/06/22/explanation_grid.jpg)

Return _the matrix after applying_ `k` _cyclic rotations to it_.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/06/19/rod2.png)
**Input:** grid = [[40,10],[30,20]], k = 1
**Output:** [[10,20],[40,30]]
**Explanation:** The figures above represent the grid at every state.

**Example 2:**
**![](https://assets.leetcode.com/uploads/2021/06/10/ringofgrid5.png)****![](https://assets.leetcode.com/uploads/2021/06/10/ringofgrid6.png)****![](https://assets.leetcode.com/uploads/2021/06/10/ringofgrid7.png)**
**Input:** grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2
**Output:** [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
**Explanation:** The figures above represent the grid at every state.

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 50`
- Both `m` and `n` are **even** integers.
- `1 <= grid[i][j] <= 5000`
- `1 <= k <= 109`

## Solution

Treat each layer of the matrix as its own ring.

For every layer:

- extract all values in perimeter order
- rotate that 1D ring by `k % ring_length`
- write the rotated values back into the same layer positions

This works because a single grid rotation only affects elements within the same layer, and each layer rotates independently.

### Key idea

Instead of simulating `k` rotations directly, flatten each ring once and use modular arithmetic.

For a given layer:

1. Read the ring in traversal order:
   - top row, left to right
   - right column, top to bottom
   - bottom row, right to left
   - left column, bottom to top
2. Compute `kk = k % ring.length`
3. When writing back index `j`, place `ring[(j + kk) % ring.length]`

That produces the same result as rotating the layer counter-clockwise `k` times, but without repeated simulation.

### Why this is efficient

Each cell belongs to exactly one layer.
So across all layers:

- each value is extracted once
- each value is written back once

No extra work is wasted on repeated rotations, even when `k` is very large.

### Complexity

- Time: `O(m * n)`
- Space: `O(m * n)` in the worst case across temporary ring storage, with `O(perimeter)` used per layer at a time

Since `m, n <= 50`, this is comfortably within the limits.
