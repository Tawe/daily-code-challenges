# 2026-04-19

## Instructions
You are given two **non-increasing 0-indexed** integer arrays `nums1`​​​​​​ and `nums2`​​​​​​.

A pair of indices `(i, j)`, where `0 <= i < nums1.length` and `0 <= j < nums2.length`, is **valid** if both `i <= j` and `nums1[i] <= nums2[j]`. The **distance** of the pair is `j - i`​​​​.

Return _the **maximum distance** of any **valid** pair_ `(i, j)`_. If there are no valid pairs, return_ `0`.

An array `arr` is **non-increasing** if `arr[i-1] >= arr[i]` for every `1 <= i < arr.length`.

**Example 1:**

**Input:** nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
**Output:** 2
**Explanation:** The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).

**Example 2:**

**Input:** nums1 = [2,2,2], nums2 = [10,10,1]
**Output:** 1
**Explanation:** The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).

**Example 3:**

**Input:** nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
**Output:** 2
**Explanation:** The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).

**Constraints:**

- `1 <= nums1.length, nums2.length <= 105`
- `1 <= nums1[i], nums2[j] <= 105`
- Both `nums1` and `nums2` are **non-increasing**.

## My Thoughts

The important detail here is that both arrays are already non-increasing. That means for a fixed `i`, once `nums2[j]` becomes too small to satisfy `nums1[i] <= nums2[j]`, every later position will also fail. So instead of scanning all of `nums2`, I can binary-search for the rightmost valid `j`.

The Rust solution loops through each index `i` in `nums1` and searches only the range `j >= i`, because valid pairs must satisfy `i <= j`. Within that range, it binary-searches `nums2` to find the farthest index where `nums2[j] >= nums1[i]`. If such a `j` exists, that gives a candidate distance of `j - i`.

Taking the maximum over all `i` gives the final answer. This works well because the monotonic ordering in `nums2` makes the "rightmost valid index" search efficient.

### Complexity

- Time: `O(n1 log n2)`
- Space: `O(1)`

## What I Learned

This challenge reinforced how much value you can get from a sorted or monotonic input. The non-increasing order turns what could be a nested-loop comparison problem into repeated binary searches.

It also highlighted a useful pattern: when a condition stays true up to some boundary and false after that, searching for the rightmost valid position is often the cleanest way to maximize an answer.
