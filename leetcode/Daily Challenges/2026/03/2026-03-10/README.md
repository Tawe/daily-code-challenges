# 2026-03-10

## Instructions
You are given 3 positive integers `zero`, `one`, and `limit`.

A binary array `arr` is called **stable** if:

- The number of occurrences of 0 in `arr` is **exactly** `zero`.
- The number of occurrences of 1 in `arr` is **exactly** `one`.
- Each subarray of `arr` with a size greater than `limit` must contain **both** 0 and 1.

Return the _total_ number of **stable** binary arrays.

Since the answer may be very large, return it **modulo** `109 + 7`.

**Example 1:**
**Input:** zero = 1, one = 1, limit = 2
**Output:** 2
**Explanation:**
The two possible stable binary arrays are `[1,0]` and `[0,1]`.

**Example 2:**
**Input:** zero = 1, one = 2, limit = 1
**Output:** 1
**Explanation:**
The only possible stable binary array is `[1,0,1]`.

**Example 3:**
**Input:** zero = 3, one = 3, limit = 2
**Output:** 14
**Explanation:**
All the possible stable binary arrays are `[0,0,1,0,1,1]`, `[0,0,1,1,0,1]`, `[0,1,0,0,1,1]`, `[0,1,0,1,0,1]`, `[0,1,0,1,1,0]`, `[0,1,1,0,0,1]`, `[0,1,1,0,1,0]`, `[1,0,0,1,0,1]`, `[1,0,0,1,1,0]`, `[1,0,1,0,0,1]`, `[1,0,1,0,1,0]`, `[1,0,1,1,0,0]`, `[1,1,0,0,1,0]`, and `[1,1,0,1,0,0]`.

**Constraints:**

- `1 <= zero, one, limit <= 1000`

## My Thoughts

With limits up to `1000`, a DP that explicitly tracks every run length becomes expensive.

I used a compressed DP:

- `dp0[i][j]`: number of valid arrays with `i` zeros and `j` ones that end with `0`
- `dp1[i][j]`: number of valid arrays with `i` zeros and `j` ones that end with `1`

To build `dp0[i][j]`, the final block of zeros can have length `k` where `1 <= k <= limit`, so we need:

- `dp1[i-k][j]` summed over that range of `k`

Similarly, `dp1[i][j]` needs a range sum of `dp0[i][j-k]`.

Instead of summing each range directly every time, I used prefix-sum tables:

- `pref1[x][j]` for column-wise prefix sums of `dp1`
- `pref0[i][y]` for row-wise prefix sums of `dp0`

That turns each transition into `O(1)` range-sum queries, so the whole solution runs in:

Time complexity: `O(zero * one)`  
Space complexity: `O(zero * one)`

## What I Learned

- For constrained-run DP, grouping the last run and summing over valid run lengths is often cleaner than storing run length as a full state dimension.
- Prefix sums are a practical optimization when DP transitions depend on contiguous ranges.
- Base cases for single-bit arrays (`all 0s` or `all 1s`) need explicit handling when one count is zero.
- Modulo-safe subtraction (`(a - b + MOD) % MOD`) is essential when doing range-sum differences.
