# 2025-12-31

## Instructions


There is a 1-based binary matrix where 0 represents land and 1 represents water. You are given integers row and col representing the number of rows and columns in the matrix, respectively.

Initially on day 0, the entire matrix is land. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered with water (i.e., changed to 1).

You want to find the last day that it is possible to walk from the top to the bottom by only walking on land cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down).

Return the last day where it is possible to walk from the top to the bottom by only walking on land cells.

```
Example 1:
Input: row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
Output: 2
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.

Example 2:
Input: row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]
Output: 1
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 1.

Example 3:
Input: row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]
Output: 3
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 3.
 ```

Constraints:

2 <= row, col <= 2 * 104
4 <= row * col <= 2 * 104
cells.length == row * col
1 <= ri <= row
1 <= ci <= col
All the values of cells are unique.

## My Thoughts

This problem initially looks like a classic grid traversal question, which naturally pushes my thinking toward BFS or DFS. However, the twist is that the grid changes every day, and checking reachability repeatedly would be expensive. That’s what makes the problem feel harder than it first appears.
Learning that DSU (Disjoint Set Union) is a common solution here helped me reframe the problem. Instead of asking “Can I cross today?” every day, it’s more efficient to think in reverse: “When do the top and bottom become connected?” That shift in perspective is subtle but powerful.
The idea that connectivity can be tracked incrementally—without re-running a full traversal—was the key mental unlock.

## What I Learned

- DSU (Disjoint Set Union) is a powerful tool for tracking connectivity as a system changes.
- DSU is especially useful when connections are added over time and you need fast checks.
- Reversing time (starting from all water and adding land back) can simplify problems.
- Some grid problems aren’t really about traversal—they’re about dynamic connectivity.
- Choosing the right data structure can turn an otherwise slow solution into an optimal one.
