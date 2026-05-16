# 2026-05-16

## Instructions
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,4,4,5,6,7]` might become:

- `[4,5,6,7,0,1,4]` if it was rotated `4` times.
- `[0,1,4,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` that may contain **duplicates**, return _the minimum element of this array_.

You must decrease the overall operation steps as much as possible.

**Example 1:**
**Input:** nums = [1,3,5]
**Output:** 1

**Example 2:**
**Input:** nums = [2,2,2,0,1]
**Output:** 0

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` is sorted and rotated between `1` and `n` times.

**Follow up:** This problem is similar to [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/), but `nums` may contain **duplicates**. Would this affect the runtime complexity? How and why?

## Solution

Use a modified binary search.

As in the version without duplicates, compare `nums[mid]` with `nums[right]` to decide which side may contain the minimum.
The difference here is that duplicates can make the comparison ambiguous.

### Key idea

Maintain two pointers:

- `left`
- `right`

While `left < right`:

1. Compute `mid`
2. Compare `nums[mid]` and `nums[right]`

There are three cases:

- if `nums[mid] > nums[right]`, the minimum must be to the right of `mid`
  - set `left = mid + 1`
- if `nums[mid] < nums[right]`, the minimum is at `mid` or to its left
  - set `right = mid`
- if `nums[mid] == nums[right]`, we cannot tell which side contains the minimum
  - safely shrink the search space with `right -= 1`

When the loop finishes, `left` points to the minimum element.

### Why `right -= 1` is safe

If `nums[mid] == nums[right]`, removing `nums[right]` does not discard a uniquely better candidate than `nums[mid]`, because they have the same value.

So:

- if that value is not the minimum, removing it is harmless
- if that value is the minimum, another copy still exists at `mid` or elsewhere in the remaining range

This lets us keep searching without missing the answer.

### Why duplicates affect runtime

Without duplicates, each comparison cleanly removes half the search space, giving `O(log n)` time.

With duplicates, the ambiguous case:

- `nums[mid] == nums[right]`

may happen repeatedly.
In that case we only shrink the range by one element instead of halving it.

So the complexity becomes:

- Average / typical case: close to `O(log n)`
- Worst case: `O(n)`

An example worst case is an array where many values are the same, such as `[2,2,2,2,2,0,2]`.

### Complexity

- Time: `O(log n)` on many inputs, `O(n)` in the worst case
- Space: `O(1)`
