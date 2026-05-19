# 2026-05-19

## Instructions
Given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, return _the **minimum integer common** to both arrays_. If there is no common integer amongst `nums1` and `nums2`, return `-1`.

Note that an integer is said to be **common** to `nums1` and `nums2` if both arrays have **at least one** occurrence of that integer.

**Example 1:**
**Input:** nums1 = [1,2,3], nums2 = [2,4]
**Output:** 2
**Explanation:** The smallest element common to both arrays is 2, so we return 2.

**Example 2:**
**Input:** nums1 = [1,2,3,6], nums2 = [2,3,4,5]
**Output:** 2
**Explanation:** There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

**Constraints:**

- `1 <= nums1.length, nums2.length <= 105`
- `1 <= nums1[i], nums2[j] <= 109`
- Both `nums1` and `nums2` are sorted in **non-decreasing** order.

## Solution

Because both arrays are already sorted, we can find the smallest common value with two pointers.

Keep:

- `i` for `nums1`
- `j` for `nums2`

Then walk through the arrays from left to right.

### Key idea

At each step, compare:

- `nums1[i]`
- `nums2[j]`

There are three cases:

- if they are equal, we found a common value and can return it immediately
- if `nums1[i] < nums2[j]`, then `nums1[i]` cannot match anything earlier in `nums2`, so move `i`
- if `nums2[j] < nums1[i]`, then `nums2[j]` cannot match anything earlier in `nums1`, so move `j`

Since the arrays are sorted, advancing the pointer at the smaller value never skips a possible smaller common answer.

### Why the first match is the answer

Both pointers only move forward.
That means the first time we see:

- `nums1[i] == nums2[j]`

it is the smallest value that appears in both arrays.

If we finish scanning one array without finding a match, then there is no common integer and we return `-1`.

### Complexity

- Time: `O(n + m)`
- Space: `O(1)`

where:

- `n = nums1.length`
- `m = nums2.length`

This is optimal for sorted input.
