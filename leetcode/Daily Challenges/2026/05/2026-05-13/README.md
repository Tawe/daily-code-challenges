# 2026-05-13

## Instructions
You are given an integer array `nums` of **even** length `n` and an integer `limit`. In one move, you can replace any integer from `nums` with another integer between `1` and `limit`, inclusive.

The array `nums` is **complementary** if for all indices `i` (**0-indexed**), `nums[i] + nums[n - 1 - i]` equals the same number. For example, the array `[1,2,3,4]` is complementary because for all indices `i`, `nums[i] + nums[n - 1 - i] = 5`.

Return the _**minimum** number of moves required to make_ `nums` _**complementary**_.

**Example 1:**

**Input:** nums = [1,2,4,3], limit = 4
**Output:** 1
**Explanation:** In 1 move, you can change nums to [1,2,2,3] (underlined elements are changed).
nums[0] + nums[3] = 1 + 3 = 4.
nums[1] + nums[2] = 2 + 2 = 4.
nums[2] + nums[1] = 2 + 2 = 4.
nums[3] + nums[0] = 3 + 1 = 4.
Therefore, nums[i] + nums[n-1-i] = 4 for every i, so nums is complementary.

**Example 2:**

**Input:** nums = [1,2,2,1], limit = 2
**Output:** 2
**Explanation:** In 2 moves, you can change nums to [2,2,2,2]. You cannot change any number to 3 since 3 > limit.

**Example 3:**

**Input:** nums = [1,2,1,2], limit = 2
**Output:** 0
**Explanation:** nums is already complementary.

**Constraints:**

- `n == nums.length`
- `2 <= n <= 105`
- `1 <= nums[i] <= limit <= 105`
- `n` is even.

## Solution

Look at each mirrored pair:

- `a = nums[i]`
- `b = nums[n - 1 - i]`

For the array to become complementary, every pair must end up summing to the same target value `x`, where `2 <= x <= 2 * limit`.

The goal is to find the target sum `x` that gives the fewest total changes across all pairs.

### Key idea

For one pair `(a, b)`, the number of moves needed to make it sum to `x` falls into three ranges:

- `0` moves if `x == a + b`
- `1` move if `x` can be reached by changing just one of the two values
- `2` moves otherwise

For a pair `(a, b)`:

- the current sum is `s = a + b`
- with one change, achievable sums form one continuous interval
- outside that interval, we need two changes

Instead of checking every target sum separately for every pair, use a difference array to add these cost ranges efficiently.

### Range updates for one pair

Start by assuming every target sum costs `2` moves.

Then improve that baseline:

- on the one-change interval, reduce cost by `1`
- at the exact sum `s`, reduce cost by another `1`

That means:

- all sums start at `2`
- one-change range becomes `1`
- exact sum becomes `0`

Using a difference array lets us apply those interval changes in `O(1)` per pair, then recover the actual move counts with one prefix sum sweep.

### Why this works

Each mirrored pair contributes independently to the total number of moves for a chosen target sum.

So:

- compute how each pair affects every possible target sum
- accumulate all pair contributions
- pick the smallest total

The difference-array approach is what makes this fast enough: it avoids an `O(n * limit)` scan.

### Complexity

- Time: `O(n + limit)`
- Space: `O(limit)`

This is efficient enough for `n, limit <= 10^5`.
