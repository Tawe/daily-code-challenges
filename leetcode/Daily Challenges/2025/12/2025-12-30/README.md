# 2025-12-30

## Instructions


A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.

```
Example 1:
Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation:
The following subgrid is a 3 x 3 magic square:
while this one is not:
In total, there is only one magic square inside the given grid.

Example 2:
Input: grid = [[8]]
Output: 0
```

Constraints:

row == grid.length
col == grid[i].length
1 <= row, col <= 10
0 <= grid[i][j] <= 15

## My Thoughts

At first glance, this problem looked like it might require checking every possible combination of numbers inside each 3×3 grid, which sounded expensive and error-prone. But once I focused on the specific constraints of a 3×3 magic square, the problem became much more manageable.
The biggest insight was realizing that all valid 3×3 magic squares using the numbers 1–9 share fixed properties, especially that the center must be 5 and the total sum must be 15. That allowed me to eliminate a huge number of invalid subgrids early without doing full checks.
Instead of trying to be clever with math or permutations, treating this as a sliding window validation problem made the solution straightforward and reliable.

## What I Learned

- Strong constraints often imply powerful shortcuts (like the center being 5).
- Sliding window techniques are useful for fixed-size subgrid problems.
- Early pruning can drastically reduce unnecessary computation.
- Validating uniqueness is just as important as validating sums.
- Understanding the structure of a problem can simplify the solution more than optimization tricks.
