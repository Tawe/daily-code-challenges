# 2026-01-11

## Instructions
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
```
Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:
Input: matrix = [["0"]]
Output: 0
Example 3:

Input: matrix = [["1"]]
Output: 1
 ```

Constraints:

rows == matrix.length
cols == matrix[i].length
1 <= rows, cols <= 200
matrix[i][j] is '0' or '1'.

## My Thoughts

This problem initially looks like a 2D matrix challenge, but the real unlock is realizing it can be reduced to a series of 1D histogram problems. Once that clicked, the solution became much more manageable.

The key mental shift was treating each row as the base of a histogram, where each column accumulates height as long as it continues to see '1'. From there, the problem becomes identical to Largest Rectangle in Histogram, which is a problem I’ve already seen.

The monotonic stack approach still feels a bit “magical” at first, but stepping through it slowly helped. The idea that each bar gets pushed and popped exactly once makes the algorithm feel much more grounded and predictable, especially when reasoning about performance.

What I liked about this solution is that it doesn’t try to be clever with 2D geometry. It embraces a known, well-understood pattern and reuses it in a disciplined way.

## What I Learned
	•	A 2D problem can sometimes be reduced to repeated 1D problems with the right perspective.
	•	The monotonic stack is a powerful pattern for range-based rectangle problems.
	•	Adding a sentinel value (extra 0 at the end) is a clean way to flush the stack without special cases.
	•	Each index in the stack is pushed and popped once, which guarantees O(n) time for the histogram step.
	•	Resetting heights to 0 on '0' cells naturally handles row breaks without extra logic.
	•	This approach scales cleanly to the upper bounds of the problem (200×200) without performance concerns.
	•	Understanding why the stack works is more important than memorizing the code.