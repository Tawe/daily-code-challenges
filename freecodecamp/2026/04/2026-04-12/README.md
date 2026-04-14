# 2026-04-12
[2026-04-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-12)

## Instructions
Spiral Matrix

Given a 2D matrix, return a flat array with all of its values in clockwise order.

The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.

For example, given:

```json
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Return `[1, 2, 3, 6, 9, 8, 7, 4, 5]`.

## My Thoughts

This is a classic boundary-walking problem. Instead of trying to simulate every turn manually, the cleaner approach is to track four edges of the remaining matrix: `top`, `bottom`, `left`, and `right`.

The JavaScript solution peels off one outer layer at a time:

- move left to right across the top row
- move top to bottom down the right column
- if there is still a remaining bottom row, move right to left
- if there is still a remaining left column, move bottom to top

After each pass, the boundaries shrink inward and the process repeats until there are no cells left.

Time complexity: `O(m * n)`  
Space complexity: `O(m * n)` for the output array

## What I Learned

- Spiral traversal gets much easier when the problem is framed as shrinking boundaries instead of changing direction step by step.
- The extra boundary checks before traversing the bottom row and left column matter for single-row or single-column leftovers.
- Problems that read like movement simulations often become simpler once the state is reduced to a few indices.
