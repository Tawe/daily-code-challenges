# 2026-01-12

## Instructions
On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

- You can move according to these rules:

- In 1 second, you can either:
    - move vertically by one unit,
    - move horizontally by one unit, or
    - move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
- You have to visit the points in the same order as they appear in the array.
- You are allowed to pass through points that appear later in the order, but these do not count as visits.
 
```
Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:

Input: points = [[3,2],[-2,2]]
Output: 5
`` 

Constraints:

points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000

## My Thoughts

At first glance, this problem looks like it might require simulating movement step by step, especially because diagonal movement has a different distance than horizontal or vertical movement. But once I thought about how diagonal moves work, the problem simplified a lot.

The key realization was that diagonal movement lets you reduce both the x and y distance at the same time. That means the total time between two points isn’t the sum of the distances, but the maximum of the horizontal and vertical differences.

Once that clicked, the solution became a simple loop over each consecutive pair of points, adding the maximum of the absolute coordinate differences. No path simulation or geometry tricks were needed.

This felt like one of those problems where understanding the movement rules mattered much more than writing clever code.

## What I Learned
	•	Diagonal movement often turns Manhattan-style problems into max(dx, dy) instead of dx + dy.
	•	Many pathfinding problems don’t require simulating the path if you understand the constraints.
	•	Breaking a problem into pairwise steps can dramatically simplify the logic.
	•	Optimal solutions are sometimes surprisingly short once the right insight is found.
	•	Recognizing when a problem is greedy (locally optimal choices lead to a global optimum) saves a lot of effort.