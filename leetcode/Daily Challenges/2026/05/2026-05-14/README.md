# 2026-05-14

## Instructions
You are given an integer array `nums`. We consider an array **good** if it is a permutation of an array `base[n]`.

`base[n] = [1, 2, ..., n - 1, n, n]` (in other words, it is an array of length `n + 1` which contains `1` to `n - 1` exactly once, plus two occurrences of `n`). For example, `base[1] = [1, 1]` and `base[3] = [1, 2, 3, 3]`.

Return `true` _if the given array is good, otherwise return_ `false`.

**Note:** A permutation of integers represents an arrangement of these numbers.

**Example 1:**
**Input:** nums = [2, 1, 3]
**Output:** false
**Explanation:** Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. However, base[3] has four elements but array nums has three. Therefore, it can not be a permutation of base[3] = [1, 2, 3, 3]. So the answer is false.

**Example 2:**
**Input:** nums = [1, 3, 3, 2]
**Output:** true
**Explanation:** Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. It can be seen that nums is a permutation of base[3] = [1, 2, 3, 3] (by swapping the second and fourth elements in nums, we reach base[3]). Therefore, the answer is true.

**Example 3:**
**Input:** nums = [1, 1]
**Output:** true
**Explanation:** Since the maximum element of the array is 1, the only candidate n for which this array could be a permutation of base[n], is n = 1. It can be seen that nums is a permutation of base[1] = [1, 1]. Therefore, the answer is true.

**Example 4:**
**Input:** nums = [3, 4, 4, 1, 2, 1]
**Output:** false
**Explanation:** Since the maximum element of the array is 4, the only candidate n for which this array could be a permutation of base[n], is n = 4. However, base[4] has five elements but array nums has six. Therefore, it can not be a permutation of base[4] = [1, 2, 3, 4, 4]. So the answer is false.

**Constraints:**
- `1 <= nums.length <= 100`
- `1 <= num[i] <= 200`

## Solution

Let `n` be the maximum value in `nums`.

If `nums` is a permutation of:

- `base[n] = [1, 2, ..., n - 1, n, n]`

then a few things must be true immediately:

- the array length must be `n + 1`
- the value `n` must appear exactly twice
- every value from `1` to `n - 1` must appear exactly once

That gives a very direct validation strategy.

### Key idea

The maximum value determines the only possible candidate for `n`.

Once we know that `n = nums.max`, there is only one target multiset that could work:

- one copy of every integer from `1` to `n - 1`
- two copies of `n`

So the algorithm is:

1. Set `n = nums.max`
2. Check that `nums.length == n + 1`
3. Count the frequency of every value
4. Verify:
   - `count[n] == 2`
   - `count[i] == 1` for every `i` from `1` to `n - 1`

If any check fails, the array is not good.

### Why this works

`base[n]` has a very strict structure.
There is no flexibility beyond permutation:

- the size is fixed
- the maximum value must be repeated twice
- all smaller values must appear once each

So these frequency checks are both necessary and sufficient.

### Complexity

- Time: `O(m)`, where `m = nums.length`
- Space: `O(m)` in the worst case for the frequency map

With `nums.length <= 100`, this is easily within the limits.
