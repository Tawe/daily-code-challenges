# 2026-05-06

## Instructions
You are given an `m x n` matrix of characters `boxGrid` representing a side-view of a box. Each cell of the box is one of the following:

- A stone `'#'`
- A stationary obstacle `'*'`
- Empty `'.'`

The box is rotated **90 degrees clockwise**, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity **does not** affect the obstacles' positions, and the inertia from the box's rotation **does not** affect the stones' horizontal positions.

It is **guaranteed** that each stone in `boxGrid` rests on an obstacle, another stone, or the bottom of the box.

Return _an_ `n x m` _matrix representing the box after the rotation described above_.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcodewithstones.png)
**Input:** boxGrid = [["#",".","#"]]
**Output:** [["."],
         ["#"],
         ["#"]]

**Example 2:**
![](https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode2withstones.png)
**Input:** boxGrid = [["#",".","*","."],
              ["#","#","*","."]]
**Output:** [["#","."],
         ["#","#"],
         ["*","*"],
         [".","."]]

**Example 3:**
![](https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode3withstone.png)
**Input:** boxGrid = [["#","#","*",".","*","."],
              ["#","#","#","*",".","."],
              ["#","#","#",".","#","."]]
**Output:** [[".","#","#"],
         [".","#","#"],
         ["#","#","*"],
         ["#","*","."],
         ["#",".","*"],
         ["#",".","."]]

**Constraints:**
- `m == boxGrid.length`
- `n == boxGrid[i].length`
- `1 <= m, n <= 500`
- `boxGrid[i][j]` is either `'#'`, `'*'`, or `'.'`.

## My Thoughts

The clean way to think about this problem is to separate it into two phases:

1. simulate where the stones settle before rotation
2. rotate the finished box 90 degrees clockwise

In the original side view, rotating clockwise means gravity will eventually pull stones "down" in the rotated box, which corresponds to stones sliding to the right inside each row before the rotation. The Ruby solution handles that by scanning each row from right to left and keeping track of the next empty position where a stone can land.

Whenever it hits:

- an obstacle `'*'`, the next available landing position resets to just before that obstacle
- a stone `'#'`, the stone is moved to the current rightmost empty slot in that segment

After all rows are settled this way, the code builds the rotated matrix with the standard clockwise mapping:

`rotated[j][m - 1 - i] = box_grid[i][j]`

### Complexity

- Time: `O(m * n)`
- Space: `O(m * n)` for the rotated matrix

## What I Learned

This challenge reinforced how useful it is to simulate movement in the frame where it is easiest. Instead of rotating first and then dropping stones, it is simpler to let stones slide right in each row and rotate afterward.

It also highlighted a nice scanning pattern: when items fall or slide within segments separated by obstacles, tracking the next available slot from the end of the segment keeps the update logic very clean.
