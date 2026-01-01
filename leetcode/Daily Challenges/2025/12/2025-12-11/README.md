# 2025-12-11

## Instructions

You are given a positive integer n, representing an n x n city. You are also given a 2D grid buildings, where buildings[i] = [x, y] denotes a unique building located at coordinates [x, y].

A building is covered if there is at least one building in all four directions: left, right, above, and below.

Return the number of covered buildings.

```
Example 1:
Input: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]
Output: 1
Explanation:
Only building [2,2] is covered as it has at least one building:
above ([1,2])
below ([3,2])
left ([2,1])
right ([2,3])
Thus, the count of covered buildings is 1.

Example 2:
Input: n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]
Output: 0
Explanation:

No building has at least one building in all four directions.

Example 3:
Input: n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]
Output: 1
Explanation:
Only building [3,3] is covered as it has at least one building:
above ([1,3])
below ([5,3])
left ([3,2])
right ([3,5])
Thus, the count of covered buildings is 1.
 ```

Constraints:

2 <= n <= 105
1 <= buildings.length <= 105
buildings[i] = [x, y]
1 <= x, y <= n
All coordinates of buildings are unique.

## My Thoughts

At first glance this problem feels like it wants a spatial or geometric solution, something like checking each building’s neighbors on a grid. My early instinct was to treat it like a direct adjacency search: for each building, scan outward to see if something exists on the left, right, above, and below. But with up to 100,000 buildings, a naïve approach becomes way too slow.
The moment things clicked was when I realized the puzzle isn’t actually about distance or searching. A building doesn’t need the nearest neighbor, it just needs any building in each direction. That shifts the problem from spatial traversal to something much simpler: understanding the boundary behavior of each row and column.
Once I saw that, the problem collapsed into a clean min/max strategy. For each row, the smallest and largest y fully determine which buildings have something to their left and right. For each column, the smallest and largest x determine who has something above and below. Everything else is just checking whether a building sits strictly between those extremes.
What felt like a geometry problem was actually a range-analysis problem hiding under coordinate notation.
This challenge was a great reminder that when constraints look big, you probably need to transform the problem, not brute-force it. Often the correct approach is to find the invariant structure (here: rows and columns forming independent intervals) and let that do the work.

## What I Learned

- Geometry problems are often interval problems in disguise.
Even though the setup uses coordinates, the real trick is noticing that each row and column can be reduced to min/max bounds.
- “Any building in a direction” ≠ “nearest building in a direction.”
Removing the requirement for closeness drastically simplifies the logic. The min/max check is possible only because distance is irrelevant.
- Two-pass solutions are extremely powerful.
First pass builds structure (row/column boundaries); second pass applies the rules. This is a common pattern in high-constraint problems.
- Unique coordinates don’t imply a grid.
The city is n×n, but the buildings are sparse — solving it like a dense grid would be a trap. Work with the actual data, not the implied space.
- Intervals reveal coverage.
A building is horizontally covered if it lies between the min and max on its row, and vertically covered if it lies between the min and max on its column.
- Stop thinking in terms of neighbor-search.
When the constraints reach 100k, adjacency checks per point become costly. Range boundaries scale beautifully.
