# Q3. Find All Numbers Disappeared in an Array

## Instructions
Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return _an array of all the integers in the range_ `[1, n]` _that do not appear in_ `nums`.

**Example 1:**
**Input:** nums = [4,3,2,7,8,2,3,1]
**Output:** [5,6]

**Example 2:**
**Input:** nums = [1,1]
**Output:** [2]

**Constraints:**

- `n == nums.length`
- `1 <= n <= 105`
- `1 <= nums[i] <= n`

**Follow up:** Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.

## My Thoughts

This problem is another “missing values in a known range” pattern.

The numbers are guaranteed to be in `[1, n]`, so I used a frequency array of size `n + 1`:

- first pass: count how many times each value appears
- second pass: collect every value from `1` to `n` whose count is `0`

That gives a straightforward and reliable answer with linear time.

Even though the follow-up asks for no extra space, this counting approach is clean and easy to reason about, which makes it a good baseline implementation.

Time complexity: `O(n)`  
Space complexity: `O(n)`

## What I Learned

- When the valid domain is exactly `1..n`, frequency counting is usually the simplest way to find missing values.
- Separating the solution into “count pass” and “collect pass” keeps the logic clear.
- This problem is closely related to Set Mismatch: both are about detecting missing/duplicate behavior from occurrence counts.
- There is often a space-optimized in-place variant, but starting with the clear `O(n)` counting version helps validate correctness first.
