# 2026-05-15

## Instructions
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return _the minimum element of this array_.

You must write an algorithm that runs in `O(log n) time`.

**Example 1:**
**Input:** nums = [3,4,5,1,2]
**Output:** 1
**Explanation:** The original array was [1,2,3,4,5] rotated 3 times.

**Example 2:**
**Input:** nums = [4,5,6,7,0,1,2]
**Output:** 0
**Explanation:** The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

**Example 3:**
**Input:** nums = [11,13,15,17]
**Output:** 11
**Explanation:** The original array was [11,13,15,17] and it was rotated 4 times. 

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are **unique**.
- `nums` is sorted and rotated between `1` and `n` times.

## Solution

Use binary search to find the rotation pivot, which is also the position of the minimum value.

Because the array was originally sorted and all values are unique:

- one side of any midpoint is still sorted
- the minimum must lie in the unsorted side, unless the midpoint itself could still be the minimum

### Key idea

Maintain two pointers:

- `left`
- `right`

While `left < right`:

1. Compute `mid`
2. Compare `nums[mid]` with `nums[right]`

There are two cases:

- if `nums[mid] > nums[right]`, the minimum must be to the right of `mid`
  - move `left = mid + 1`
- otherwise, the minimum is at `mid` or to its left
  - move `right = mid`

When the loop ends, `left == right`, and that index is the minimum.

### Why this works

If `nums[mid] > nums[right]`, then `mid` is in the larger left portion of the rotated array.
That means the rotation pivot, and therefore the minimum, must be somewhere after `mid`.

If `nums[mid] <= nums[right]`, then the segment from `mid` to `right` is sorted in increasing order.
So the minimum cannot be strictly to the right of `mid`; it must be at `mid` or in the left half.

Each step cuts the search space roughly in half, which gives the required logarithmic runtime.

### Complexity

- Time: `O(log n)`
- Space: `O(1)`

This satisfies the problem requirement directly.
