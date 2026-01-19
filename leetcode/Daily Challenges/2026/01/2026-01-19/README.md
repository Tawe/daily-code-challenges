# 2026-01-19

## Instructions
Given a m x n matrix mat and an integer threshold, return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

```
Example 1:
Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than 4 is 2 as shown.

Example 2:
Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0
```

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 300
0 <= mat[i][j] <= 104
0 <= threshold <= 105

## 
My Thoughts

This problem looks like “try every square,” but brute force explodes fast because you’d be summing the same cells again and again. The key unlock is realizing that if I can compute any square’s sum instantly, then the problem becomes “find the largest k that works,” which is perfect for binary search.

The prefix-sum grid is doing the heavy lifting: it converts repeated summations into constant-time queries. From there, the solution is mostly about carefully indexing the summed-area table and staying consistent with inclusive/exclusive boundaries.

## What I Learned
	•	2D prefix sums are the go-to tool when you need lots of submatrix sums.
	•	Binary searching an answer works great when the property is monotonic (“if k works, smaller sizes also work”).
	•	Using a (m+1) x (n+1) prefix array avoids annoying edge checks.
	•	The hardest part isn’t the algorithm — it’s getting the indices correct and consistent.
	•	“Brute force + caching” is often the bridge to a clean optimal solution.