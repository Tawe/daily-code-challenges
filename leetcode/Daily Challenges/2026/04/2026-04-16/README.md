# 2026-04-16

## Instructions
You are given a **circular** array `nums` and an array `queries`.

For each query `i`, you have to find the following:

- The **minimum** distance between the element at index `queries[i]` and **any** other index `j` in the **circular** array, where `nums[j] == nums[queries[i]]`. If no such index exists, the answer for that query should be -1.

Return an array `answer` of the **same** size as `queries`, where `answer[i]` represents the result for query `i`.

**Example 1:**
**Input:** nums = [1,3,1,4,1,3,2], queries = [0,3,5]
**Output:** [2,-1,3]
**Explanation:**
- Query 0: The element at `queries[0] = 0` is `nums[0] = 1`. The nearest index with the same value is 2, and the distance between them is 2.
- Query 1: The element at `queries[1] = 3` is `nums[3] = 4`. No other index contains 4, so the result is -1.
- Query 2: The element at `queries[2] = 5` is `nums[5] = 3`. The nearest index with the same value is 1, and the distance between them is 3 (following the circular path: `5 -> 6 -> 0 -> 1`).

**Example 2:**
**Input:** nums = [1,2,3,4], queries = [0,1,2,3]
**Output:** [-1,-1,-1,-1]
**Explanation:**
Each value in `nums` is unique, so no index shares the same value as the queried element. This results in -1 for all queries.

**Constraints:**
- `1 <= queries.length <= nums.length <= 105`
- `1 <= nums[i] <= 106`
- `0 <= queries[i] < nums.length`

## My Thoughts

The useful observation here is that for each value in `nums`, I only care about the indices where that value appears. Once those positions are grouped together, each query becomes: find the queried index inside its value's position list, then check the nearest matching position on the left and right in circular order.

The Rust solution builds a `HashMap<i32, Vec<i32>>` from value to sorted list of indices. Since the indices are collected while scanning the array from left to right, each list is already ordered. For a query, it binary-searches the queried index inside that list, then grabs the previous and next matching index with wraparound.

Because the array is circular, the distance is not just the direct index difference. For each neighbor, I compute the linear gap and then take `min(diff, n - diff)` to account for wrapping around the end of the array. If a value appears only once, the answer is just `-1`.

### Complexity

- Time: `O(n + q log k)`, where `k` is the frequency of the queried value
- Space: `O(n)`

## What I Learned

This problem was a good reminder that repeated-value queries usually become much easier after preprocessing positions by value. Instead of re-scanning the array for every query, the work is reduced to a binary search in a much smaller list.

It also reinforced a neat circular-array pattern: once you know the linear difference between two indices, the circular distance is just the smaller of going directly or wrapping around the end.
