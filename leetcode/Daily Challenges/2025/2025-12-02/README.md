# 2025-12-02

## Instructions
You are given a 2D integer array points, where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.

A horizontal trapezoid is a convex quadrilateral with at least one pair of horizontal sides (i.e. parallel to the x-axis). Two lines are parallel if and only if they have the same slope.

Return the number of unique horizontal trapezoids that can be formed by choosing any four distinct points from points.

Since the answer may be very large, return it modulo 109 + 7.


```yaml
Example 1:
Input: points = [[1,0],[2,0],[3,0],[2,2],[3,2]]
Output: 3
Explanation:
There are three distinct ways to pick four points that form a horizontal trapezoid:

Using points [1,0], [2,0], [3,2], and [2,2].
Using points [2,0], [3,0], [3,2], and [2,2].
Using points [1,0], [3,0], [3,2], and [2,2].

Example 2:
Input: points = [[0,0],[1,0],[0,1],[2,1]]
Output: 1
Explanation:
There is only one horizontal trapezoid that can be formed.
```
 

Constraints:

4 <= points.length <= 105
–108 <= xi, yi <= 108
All points are pairwise distinct.


## My Thoughts
This challenge looked intimidating at first because it framed the problem in geometric terms—counting horizontal trapezoids from arbitrary points in 2D space. My first instinct was to reach for geometry tools: checking slopes, verifying convexity, validating quadrilateral shapes. But once I zoomed out, the real structure of the problem became much simpler.

A trapezoid with horizontal sides doesn’t require deep geometry. It requires something surprisingly straightforward:

Two horizontal lines (two distinct y-coordinates)

At least two points on each line

Pick any two points on the lower line + any two on the upper line

I realized that if I stop thinking in terms of shapes and start thinking in terms of combinatorics, the entire problem collapses into a clean counting formula. And the optimized solution shown in the discussion—using a running prefix sum—was the last piece needed to make it not just correct, but optimal for huge inputs.
This challenge wasn’t about spatial reasoning, it was about recognizing the pattern:
Geometry problem → grouping → combinations → pairwise sum
Once that clicked, the whole solution became elegant and fast.

## What I Learned

1. Many geometry problems are actually grouping problems.
By grouping points by their y-coordinate, the spatial difficulty disappeared. This is a common trick: convert geometric constraints into counting constraints.
2. A trapezoid with horizontal sides is formed exactly by choosing 2 points on one y-line and 2 on another.
No need to check slopes, convexity, or quadrilateral validity, the structure guarantees it.

3. Combinatorics simplifies the problem.
The number of ways to choose 2 points on a line with p points is:

```C(p, 2) = p * (p - 1) / 2```

This transforms the geometric selection into pure math.

4. Summing combinations across all pairs of lines can be optimized.

Naively, I would do:

```python
for each line i:
  for each line j > i:
    ans += edge[i] * edge[j]
```

But that's O(m²).

Instead, the trick is:

```python
for each edge:
    ans += edge * prefix_sum
    prefix_sum += edge
```

This runs in O(m) and is exactly what the optimal solution does.

5. BigInt + modulo is essential for reliability.
With up to 100k points, intermediate values can explode. Using BigInt ensures safe arithmetic without overflow.

6. Elegant solutions come from reducing the problem to its essence.
Once I stopped imagining shapes on the plane and started seeing buckets of y-coordinates and combinations, the entire problem became clear and almost trivial.