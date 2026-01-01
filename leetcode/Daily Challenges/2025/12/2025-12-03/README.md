# 2025-12-03

## Instructions

You are given a 2D integer array points where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.

Return the number of unique trapezoids that can be formed by choosing any four distinct points from points.

A trapezoid is a convex quadrilateral with at least one pair of parallel sides. Two lines are parallel if and only if they have the same slope.

```
Example 1:
Input: points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]
Output: 2
Explanation:
There are two distinct ways to pick four points that form a trapezoid:
The points [-3,2], [2,3], [3,2], [2,-3] form one trapezoid.
The points [2,3], [3,2], [3,0], [2,-3] form another trapezoid.

Example 2:
Input: points = [[0,0],[1,0],[0,1],[2,1]]
Output: 1
Explanation:
There is only one trapezoid which can be formed.
```

Constraints:

4 <= points.length <= 500
–1000 <= xi, yi <= 1000
All points are pairwise distinct.

## My Thoughts

This problem looked at first like a geometry heavy challenge, especially with terms like “quadrilaterals,” “parallel sides,” and “trapezoids.” But once I broke it down, the real structure became clear: everything depends on pairs of points, not full shapes.
Parallel sides can be counted by grouping segments with the same slope. Parallelograms can be detected by grouping segments with the same midpoint. That reduces the entire shape-counting problem to a combinatorics problem on pairs—no need to manually handle quadrilaterals at all.
The tricky part was realizing that midpoint grouping also counts degenerate cases (four collinear points). Those aren’t valid quadrilaterals, so subtracting them was necessary to avoid underflow or negative results.
Once I separated real parallelograms from degenerate ones, the solution became clean and efficient.

## What I Learned

- Many geometry problems can be reframed as pair counting problems using slopes and midpoints.
- Midpoints detect parallelograms, but they also detect collinear configurations—those need to be removed.
- Degenerate parallelograms can be counted efficiently per line, without expensive cross-product checks.
- The final count comes from a simple relationship:
    - Count all pairs of parallel sides
    - Subtract the correct number of parallelograms
- Performance comes from clever grouping, not from checking quadrilaterals directly.
- This challenge reinforced how powerful it is to translate geometric rules into clean combinatorial formulas.
