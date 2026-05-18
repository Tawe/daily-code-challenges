# 2026-05-18

## Instructions
Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

- `i + 1` where: `i + 1 < arr.length`.
- `i - 1` where: `i - 1 >= 0`.
- `j` where: `arr[i] == arr[j]` and `i != j`.

Return _the minimum number of steps_ to reach the **last index** of the array.

Notice that you can not jump outside of the array at any time.

**Example 1:**
**Input:** arr = [100,-23,-23,404,100,23,23,23,3,404]
**Output:** 3
**Explanation:** You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

**Example 2:**
**Input:** arr = [7]
**Output:** 0
**Explanation:** Start index is the last index. You do not need to jump.

**Example 3:**
**Input:** arr = [7,6,9,6,9,6,9,7]
**Output:** 1
**Explanation:** You can jump directly from index 0 to index 7 which is last index of the array.

**Constraints:**
- `1 <= arr.length <= 5 * 104`
- `-108 <= arr[i] <= 108`

## Solution

This is a shortest-path problem on array indices, so BFS is the right tool.

From index `i`, we can move to:

- `i - 1`
- `i + 1`
- every index `j` where `arr[j] == arr[i]`

Since each move costs exactly one step, BFS guarantees that the first time we reach the last index, we used the minimum number of jumps.

### Key idea

The expensive part would be finding all indices with the same value every time we visit an index.

To avoid that, first build:

- `buckets[value] = all indices where arr[index] == value`

Then run BFS from index `0`.

For each popped index `i`, the neighbors are:

- `i - 1`, if it exists
- `i + 1`, if it exists
- all indices in `buckets[arr[i]]`

The critical optimization is:

- after using `buckets[arr[i]]` once, delete that bucket

That prevents scanning the same equal-value group over and over again.

### Why this works

BFS explores indices in increasing order of distance from the start.
So:

- the first time an index is visited, we already know the minimum number of steps to reach it
- when we first reach `n - 1`, that distance is the answer

Deleting a value bucket is safe because all same-value edges from that value become available the first time we visit any one of those indices.
After that, revisiting the same bucket would only repeat work and never improve distances.

### Complexity

- Time: `O(n)`
- Space: `O(n)`

Each index is enqueued at most once, and each same-value bucket is processed at most once.
