2025-12-28

## Instructions
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

```yaml
Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
```

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
 
 ## My Thoughts

My first instinct was to simply loop through every value in the matrix and count the negatives. That approach is straightforward and guaranteed to work, but it completely ignores the most important part of the problem: the matrix is already sorted.

Once I stepped back and thought about what the sorting implied, it became clear that checking every cell was unnecessary. Because the values decrease as you move right and down, finding a negative number tells you something about an entire section of the matrix, not just a single cell.

The challenge was less about counting and more about using the structure of the data efficiently.

## What I Learned
	•	Correct solutions aren’t always optimal solutions.
	•	Sorted data often allows you to skip large portions of work.
	•	Two-pointer techniques can turn nested loops into linear scans.
	•	Understanding problem guarantees is key to improving performance.
	•	Simple optimizations can dramatically reduce time complexity.
