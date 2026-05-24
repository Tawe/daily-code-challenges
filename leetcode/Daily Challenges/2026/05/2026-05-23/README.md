# 2026-05-23

## Instructions

Given an array `nums`, return `true` _if the array was originally sorted in non-decreasing order, then rotated **some** number of positions (including zero)_. Otherwise, return `false`.

There may be **duplicates** in the original array.

**Note:** An array `A` rotated by `x` positions results in an array `B` of the same length such that `B[i] == A[(i+x) % A.length]` for every valid index `i`.

**Example 1:**
**Input:** nums = [3,4,5,1,2]
**Output:** true
**Explanation:** [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].

**Example 2:**
**Input:** nums = [2,1,3,4]
**Output:** false
**Explanation:** There is no sorted array once rotated that can make nums.

**Example 3:**
**Input:** nums = [1,2,3]
**Output:** true
**Explanation:** [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

**Constraints:**
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Solution

If an array is sorted and then rotated, its order can only "drop" once.

For example:

- `[1,2,3,4,5]` has no drops
- `[3,4,5,1,2]` has exactly one drop, from `5` to `1`

So we can detect validity by counting how many times:

- `nums[i] < nums[i - 1]`

### Key idea

Scan the array from left to right and count the number of decreasing transitions.

If the array came from a sorted non-decreasing array and was rotated:

- there can be at most one such drop

But one more condition is needed when a drop exists:

- the last element must be less than or equal to the first element

That condition is what allows the rotated tail to wrap back to the rotated head correctly.

So the array is valid if:

- `count <= 1`
- and either:
  - `count == 0`, or
  - `nums[-1] <= nums[0]`

### Why this works

A sorted non-decreasing array has no drops at all.
After one rotation, the array is split into:

- a suffix of the sorted array
- followed by a prefix of the same sorted array

That creates exactly one place where the value decreases.

If there is more than one drop, the array cannot be produced by a single rotation of a sorted array.
If there is exactly one drop but the last element is greater than the first, then the wraparound order is invalid.

### Complexity

- Time: `O(n)`
- Space: `O(1)`

This is easily sufficient for the given constraints.
