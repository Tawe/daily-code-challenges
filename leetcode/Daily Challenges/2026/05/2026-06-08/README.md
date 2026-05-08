# 2026-05-08

## Instructions
You are given an integer array `nums` of length `n`.

You start at index 0, and your goal is to reach index `n - 1`.

From any index `i`, you may perform one of the following operations:

- **Adjacent Step**: Jump to index `i + 1` or `i - 1`, if the index is within bounds.
- **Prime Teleportation**: If `nums[i]` is a prime number `p`, you may instantly jump to any index `j != i` such that `nums[j] % p == 0`.

Return the **minimum** number of jumps required to reach index `n - 1`.

**Example 1:**

**Input:** nums = [1,2,4,6]

**Output:** 2

**Explanation:**

One optimal sequence of jumps is:

- Start at index `i = 0`. Take an adjacent step to index 1.
- At index `i = 1`, `nums[1] = 2` is a prime number. Therefore, we teleport to index `i = 3` as `nums[3] = 6` is divisible by 2.

Thus, the answer is 2.

**Example 2:**
**Input:** nums = [2,3,4,7,9]
**Output:** 2
**Explanation:**
One optimal sequence of jumps is:

- Start at index `i = 0`. Take an adjacent step to index `i = 1`.
- At index `i = 1`, `nums[1] = 3` is a prime number. Therefore, we teleport to index `i = 4` since `nums[4] = 9` is divisible by 3.

Thus, the answer is 2.

**Example 3:**
**Input:** nums = [4,6,5,8]
**Output:** 3
**Explanation:**
- Since no teleportation is possible, we move through `0 → 1 → 2 → 3`. Thus, the answer is 3.

**Constraints:**
- `1 <= n == nums.length <= 105`
- `1 <= nums[i] <= 106`

## Solution

Use BFS over indices because every move has the same cost:

- from index `i`, we can move to `i - 1`
- from index `i`, we can move to `i + 1`
- if `nums[i]` is prime, we can teleport to every index whose value is divisible by `nums[i]`

The difficulty is making prime teleportation fast enough.

### Key idea

Precompute the smallest prime factor for every value up to `10^6`.
That lets us factor each number quickly and build:

- `jump_prime[p]`: whether prime `p` appears as an actual array value
- `by_prime[p]`: all indices whose values are divisible by `p`

During BFS:

- always try adjacent moves
- if `nums[i]` is prime `p`, process `by_prime[p]` once
- after using prime `p`, clear its bucket so we never scan it again

This keeps the traversal near-linear in practice because each index is visited once and each prime bucket is consumed once.

### Ruby-specific optimization

The big runtime win in Ruby was caching the smallest-prime-factor sieve across calls.
LeetCode runs many testcases in the same process, so rebuilding the sieve for every testcase was enough to cause TLE even though the per-test algorithm was already correct.

### Complexity

- Time: `O(M log log M + n * k)` preprocessing/traversal in practice, where `M = 10^6` and `k` is the number of distinct prime factors per value
- Space: `O(M + n)`

Since each number up to `10^6` has only a small number of distinct prime factors, this is efficient enough for the constraints.
