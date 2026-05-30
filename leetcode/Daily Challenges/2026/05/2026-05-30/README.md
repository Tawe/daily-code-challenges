# 2026-05-30

## Instructions
There exists an infinite number line, with its origin at 0 and extending towards the **positive** x-axis.

You are given a 2D array `queries`, which contains two types of queries:

1. For a query of type 1, `queries[i] = [1, x]`. Build an obstacle at distance `x` from the origin. It is guaranteed that there is **no** obstacle at distance `x` when the query is asked.
2. For a query of type 2, `queries[i] = [2, x, sz]`. Check if it is possible to place a block of size `sz` _anywhere_ in the range `[0, x]` on the line, such that the block **entirely** lies in the range `[0, x]`. A block **cannot** be placed if it intersects with any obstacle, but it may touch it. Note that you do **not** actually place the block. Queries are separate.

Return a boolean array `results`, where `results[i]` is `true` if you can place the block specified in the `ith` query of type 2, and `false` otherwise.

**Example 1:**
**Input:** queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]
**Output:** [false,true,true]
**Explanation:**
**![](https://assets.leetcode.com/uploads/2024/04/22/example0block.png)**

For query 0, place an obstacle at `x = 2`. A block of size at most 2 can be placed before `x = 3`.

**Example 2:**
**Input:** queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]
**Output:** [true,true,false]
**Explanation:**
**![](https://assets.leetcode.com/uploads/2024/04/22/example1block.png)**
- Place an obstacle at `x = 7` for query 0. A block of size at most 7 can be placed before `x = 7`.
- Place an obstacle at `x = 2` for query 2. Now, a block of size at most 5 can be placed before `x = 7`, and a block of size at most 2 before `x = 2`.

**Constraints:**

- `1 <= queries.length <= 15 * 104`
- `2 <= queries[i].length <= 3`
- `1 <= queries[i][0] <= 2`
- `1 <= x, sz <= min(5 * 104, 3 * queries.length)`
- The input is generated such that for queries of type 1, no obstacle exists at distance `x` when the query is asked.
- The input is generated such that there is at least one query of type 2.

## Solution

We need to answer two operations efficiently:

- insert a new obstacle at position `x`
- ask whether there is any obstacle-free segment of length at least `sz` inside `[0, x]`

The solution keeps two kinds of information:

- the positions of inserted obstacles in sorted order
- the maximum free gap available up to any coordinate

### Key idea

Think of the line as being split by obstacles.
If we know the obstacle positions in sorted order, then every free place for a block comes from a gap between consecutive obstacles, plus the suffix gap from the last obstacle up to `x`.

This implementation maintains:

- `nxt`: a linked-list style structure of obstacle successors
- `max_t`: a segment tree storing the maximum obstacle position in a range
- `gap_t`: a segment tree storing the largest gap ending at each obstacle

When inserting an obstacle at `p`:

1. Find its predecessor obstacle `pred`
2. Find its successor obstacle `succ`
3. Insert `p` into the linked structure
4. Update:
   - the obstacle-position tree at `p`
   - the gap for `p - pred`
   - and, if `succ` exists, the gap for `succ - p`

So every obstacle stores the length of the free segment immediately before it.

### Answering a query

For a query `[2, x, sz]`, a valid block can fit in `[0, x]` if either:

- some full obstacle-to-obstacle gap ending at or before `x` has length at least `sz`
- or the tail segment from the last obstacle before `x` up to `x` has length at least `sz`

So the algorithm does two checks:

1. Query `gap_t` for the maximum stored gap up to position `x`
2. Query `max_t` for the last obstacle position `<= x`, then check whether `x - last_obstacle >= sz`

If either condition is true, the answer is `true`.

### Why this works

Any block placed in `[0, x]` must lie entirely inside one obstacle-free interval.
Every such interval is either:

- between two consecutive obstacles
- or between the last obstacle before `x` and the endpoint `x`

The data structure tracks both cases:

- `gap_t` covers the internal gaps
- `max_t` lets us recover the last obstacle for the trailing gap

That is enough to answer each placement query without scanning all obstacles.

### Complexity

- Time: `O(log M)` per query
- Space: `O(M)`

where `M` is the maximum coordinate bound (`<= 50000` here).

That makes the approach efficient enough for up to `1.5 * 10^5` queries.
