# 2026-05-17

## Instructions
Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach **any** index with value 0.

Notice that you can not jump outside of the array at any time.

**Example 1:**
**Input:** arr = [4,2,3,0,3,1,2], start = 5
**Output:** true
**Explanation:** 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 

**Example 2:**
**Input:** arr = [4,2,3,0,3,1,2], start = 0
**Output:** true 
**Explanation:** 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3

**Example 3:**
**Input:** arr = [3,0,2,1,2], start = 2
**Output:** false
**Explanation:** There is no way to reach at index 1 with value 0.

**Constraints:**
- `1 <= arr.length <= 5 * 104`
- `0 <= arr[i] < arr.length`
- `0 <= start < arr.length`

## Solution

Treat the array like a graph:

- each index is a node
- from index `i`, you can move to:
  - `i + arr[i]`
  - `i - arr[i]`

The question becomes: starting from `start`, can we reach any node whose value is `0`?

### Key idea

Use BFS from the starting index.

Maintain:

- a `visited` array so we do not revisit indices and loop forever
- a queue of indices to process

For each popped index `i`:

1. If `arr[i] == 0`, return `true`
2. Compute the two possible next positions
3. If a next position is inside the array and unvisited, mark it visited and push it into the queue

If the queue becomes empty, then every reachable index has been explored and none had value `0`, so the answer is `false`.

### Why this works

BFS explores all indices that can be reached from `start`.
Since every valid jump is added to the queue exactly once:

- if a zero-valued index is reachable, BFS will eventually visit it
- if BFS finishes without finding one, then no reachable path leads to `0`

The `visited` array is important because jumps can create cycles.

### Complexity

- Time: `O(n)`
- Space: `O(n)`

Each index is visited at most once, and each visit considers only two next positions.
