# 2026-01-17

## Instructions
There exist n rectangles in a 2D plane with edges parallel to the x and y axis. You are given two 2D integer arrays bottomLeft and topRight where bottomLeft[i] = [a_i, b_i] and topRight[i] = [c_i, d_i] represent the bottom-left and top-right coordinates of the ith rectangle, respectively.

You need to find the maximum area of a square that can fit inside the intersecting region of at least two rectangles. Return 0 if such a square does not exist.

```
Example 1:
Input: bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]
Output: 1
Explanation:
A square with side length 1 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 1. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.

Example 2:
Input: bottomLeft = [[1,1],[1,3],[1,5]], topRight = [[5,5],[5,7],[5,9]]
Output: 4
Explanation:
A square with side length 2 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 2 * 2 = 4. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.

Example 3:
Input: bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]
Output: 1
Explanation:
A square with side length 1 can fit inside the intersecting region of any two rectangles. Also, no larger square can, so the maximum area is 1. Note that the region can be formed by the intersection of more than 2 rectangles.

Example 4:
Input: bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]
Output: 0
Explanation:
No pair of rectangles intersect, hence, the answer is 0.
```
 

Constraints:

n == bottomLeft.length == topRight.length
2 <= n <= 103
bottomLeft[i].length == topRight[i].length == 2
1 <= bottomLeft[i][0], bottomLeft[i][1] <= 107
1 <= topRight[i][0], topRight[i][1] <= 107
bottomLeft[i][0] < topRight[i][0]
bottomLeft[i][1] < topRight[i][1]

## My Thoughts

This problem was really about understanding what it means for a square to “fit” inside the intersection of rectangles. Once I realized that any square must be contained within the overlapping region of at least two rectangles, the approach became straightforward.

For each pair of rectangles, I computed their intersection by taking the max of the bottom-left coordinates and the min of the top-right coordinates. If that intersection had positive width and height, the largest square that could fit inside it would simply have a side length equal to the smaller of those two dimensions.

The brute-force double loop initially felt risky, but given the constraint of at most 1000 rectangles, an O(n^2) solution is well within acceptable limits. This made the solution simple, readable, and reliable without overengineering.

Overall, the challenge was less about optimization tricks and more about correctly modeling the geometry and constraints.

## What I Learned
	•	The largest square inside a rectangle is determined by min(width, height).
	•	Pairwise intersection checks are sufficient even when more than two rectangles overlap.
	•	O(n^2) solutions are sometimes the intended optimal approach when constraints allow.
	•	Geometry problems often reduce to careful boundary comparisons rather than complex math.
	•	Clear logic and correctness matter more than premature optimization.
