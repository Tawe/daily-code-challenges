# 2026-05-04

## Instructions
You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**
![](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)
**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]
**Output:** [[7,4,1],[8,5,2],[9,6,3]]

**Example 2:**
![](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)
**Input:** matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
**Output:** [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

**Constraints:**
- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## My Thoughts

The standard in-place way to rotate a matrix 90 degrees clockwise is to break it into two simpler operations:

1. transpose the matrix across its main diagonal
2. reverse each row

The Ruby solution does exactly that. The first nested loop swaps `matrix[i][j]` with `matrix[j][i]` for the upper triangle, which turns rows into columns. After that, reversing each row shifts those transposed values into their final clockwise-rotated positions.

This works in-place because every change is done through swaps and row reversal, so no second matrix is needed.

### Complexity

- Time: `O(n^2)`
- Space: `O(1)` extra space

## What I Learned

This challenge reinforced a really useful matrix pattern: many geometric transformations become much simpler when split into a transpose plus a directional reversal.

It also showed why iterating only over the upper triangle matters during transpose. That avoids swapping the same pair twice and keeps the in-place update clean.
