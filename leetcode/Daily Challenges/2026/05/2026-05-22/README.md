# 2026-05-22

## Instructions
There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly left rotated** at an unknown index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be left rotated by `3` indices and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return _the index of_ `target` _if it is in_ `nums`_, or_ `-1` _if it is not in_ `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
**Input:** nums = [4,5,6,7,0,1,2], target = 0
**Output:** 4

**Example 2:**
**Input:** nums = [4,5,6,7,0,1,2], target = 3
**Output:** -1

**Example 3:**
**Input:** nums = [1], target = 0
**Output:** -1

**Constraints:**
- `1 <= nums.length <= 5000`
- `-104 <= nums[i] <= 104`
- All values of `nums` are **unique**.
- `nums` is an ascending array that is possibly rotated.
- `-104 <= target <= 104`

## Solution

Use binary search, but adapt it to the rotated structure.

Even though the whole array is not fully sorted, at any midpoint one of the two halves is guaranteed to still be sorted because all values are unique.

### Key idea

Maintain:

- `left`
- `right`

At each step:

1. Compute `mid`
2. If `nums[mid] == target`, return `mid`
3. Determine which half is sorted

There are two cases:

- if `nums[left] <= nums[mid]`, then the left half is sorted
- otherwise, the right half is sorted

Once we know which half is sorted, we check whether `target` lies inside that half:

- if it does, continue binary search inside that half
- otherwise, search the other half

This preserves the usual binary-search idea of discarding half the search space each iteration.

### Why this works

Because the array is a rotated version of a strictly increasing array:

- there is at most one pivot where the order wraps around
- therefore, for any `mid`, at least one side must still be in sorted order

If the target falls inside the sorted half’s value range, it must be there.
If it does not, it must be in the other half.

That lets us keep shrinking the search interval in `O(log n)` time.

### Complexity

- Time: `O(log n)`
- Space: `O(1)`

This satisfies the required runtime bound.
