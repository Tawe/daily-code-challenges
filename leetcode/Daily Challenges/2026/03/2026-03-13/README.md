# 2026-03-13

## Instructions
You are given an integer `mountainHeight` denoting the height of a mountain.

You are also given an integer array `workerTimes` representing the work time of workers in **seconds**.

The workers work **simultaneously** to **reduce** the height of the mountain. For worker `i`:

- To decrease the mountain's height by `x`, it takes `workerTimes[i] + workerTimes[i] * 2 + ... + workerTimes[i] * x` seconds. For example:
    - To reduce the height of the mountain by 1, it takes `workerTimes[i]` seconds.
    - To reduce the height of the mountain by 2, it takes `workerTimes[i] + workerTimes[i] * 2` seconds, and so on.

Return an integer representing the **minimum** number of seconds required for the workers to make the height of the mountain 0.

**Example 1:**

**Input:** mountainHeight = 4, workerTimes = [2,1,1]

**Output:** 3

**Explanation:**

One way the height of the mountain can be reduced to 0 is:

- Worker 0 reduces the height by 1, taking `workerTimes[0] = 2` seconds.
- Worker 1 reduces the height by 2, taking `workerTimes[1] + workerTimes[1] * 2 = 3` seconds.
- Worker 2 reduces the height by 1, taking `workerTimes[2] = 1` second.

Since they work simultaneously, the minimum time needed is `max(2, 3, 1) = 3` seconds.

**Example 2:**
**Input:** mountainHeight = 10, workerTimes = [3,2,2,4]
**Output:** 12
**Explanation:**
- Worker 0 reduces the height by 2, taking `workerTimes[0] + workerTimes[0] * 2 = 9` seconds.
- Worker 1 reduces the height by 3, taking `workerTimes[1] + workerTimes[1] * 2 + workerTimes[1] * 3 = 12` seconds.
- Worker 2 reduces the height by 3, taking `workerTimes[2] + workerTimes[2] * 2 + workerTimes[2] * 3 = 12` seconds.
- Worker 3 reduces the height by 2, taking `workerTimes[3] + workerTimes[3] * 2 = 12` seconds.
The number of seconds needed is `max(9, 12, 12, 12) = 12` seconds.

**Example 3:**
**Input:** mountainHeight = 5, workerTimes = [1]
**Output:** 15
**Explanation:**
There is only one worker in this example, so the answer is `workerTimes[0] + workerTimes[0] * 2 + workerTimes[0] * 3 + workerTimes[0] * 4 + workerTimes[0] * 5 = 15`.

**Constraints:**

- `1 <= mountainHeight <= 105`
- `1 <= workerTimes.length <= 104`
- `1 <= workerTimes[i] <= 106`

## My Thoughts

This is another “minimum time to finish” problem, so binary search on time works well.

If we guess a time `T`, we can ask:  
“Can all workers together reduce at least `mountainHeight` within `T` seconds?”

For one worker with base time `w`, reducing height by `x` costs:

- `w * (1 + 2 + ... + x) = w * x * (x + 1) / 2`

So for fixed `T`, we need the largest `x` such that:

- `w * x * (x + 1) / 2 <= T`

I compute this per worker using the quadratic formula approximation, then adjust by a small correction loop to avoid floating-point off-by-one issues.

Feasibility check:

- sum each worker’s max removable height in `T`
- if total >= `mountainHeight`, `T` is feasible

Since feasibility is monotonic, binary search gives the minimum feasible `T`.

Time complexity: `O(m * log U)` where `m = len(workerTimes)` and `U` is the binary-search upper bound  
Space complexity: `O(1)` extra space

## What I Learned

- Work-allocation problems with monotonic feasibility are strong candidates for binary search on answer.
- Triangular-number cost formulas (`x * (x + 1) / 2`) appear often in cumulative-time tasks.
- Solving the per-worker bound with quadratic math is much faster than iterating `x` directly.
- When using floating-point sqrt in integer problems, a quick correction step keeps results exact.
