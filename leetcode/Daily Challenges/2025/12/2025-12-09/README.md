# 2025-12-09

## Instructions
You are given an integer array nums.

A special triplet is defined as a triplet of indices (i, j, k) such that:

0 <= i < j < k < n, where n = nums.length
nums[i] == nums[j] * 2
nums[k] == nums[j] * 2
Return the total number of special triplets in the array.

Since the answer may be large, return it modulo 109 + 7.

 
```yaml
Example 1:
Input: nums = [6,3,6]
Output: 1

Explanation:
The only special triplet is (i, j, k) = (0, 1, 2), where:
nums[0] = 6, nums[1] = 3, nums[2] = 6
nums[0] = nums[1] * 2 = 3 * 2 = 6
nums[2] = nums[1] * 2 = 3 * 2 = 6

Example 2:
Input: nums = [0,1,0,0]
Output: 1

Explanation:
The only special triplet is (i, j, k) = (0, 2, 3), where:
nums[0] = 0, nums[2] = 0, nums[3] = 0
nums[0] = nums[2] * 2 = 0 * 2 = 0
nums[3] = nums[2] * 2 = 0 * 2 = 0

Example 3:
Input: nums = [8,4,2,8,4]
Output: 2

Explanation:
There are exactly two special triplets:
(i, j, k) = (0, 1, 3)
nums[0] = 8, nums[1] = 4, nums[3] = 8
nums[0] = nums[1] * 2 = 4 * 2 = 8
nums[3] = nums[1] * 2 = 4 * 2 = 8
(i, j, k) = (1, 2, 4)
nums[1] = 4, nums[2] = 2, nums[4] = 4
nums[1] = nums[2] * 2 = 2 * 2 = 4
nums[4] = nums[2] * 2 = 2 * 2 = 4
 ```

Constraints:

3 <= n == nums.length <= 105
0 <= nums[i] <= 105

### My Thoughts

This problem looked straightforward at first: find triples where the middle element is exactly half of the elements on both sides. But the real complexity appears as soon as you consider the constraints, up to 100,000 elements means any brute-force or nested-loop approach collapses immediately.

My first instinct was to think in terms of three explicit loops (i, j, k), but that’s O(n³) and impossible here. Even an i/k scan for every j is still O(n²), which is also too slow. So the challenge here wasn’t the math — it was the data flow and how to organize counts efficiently.

The breakthrough came from flipping the problem inside out: instead of scanning for triplets directly, treat each j as the anchor and ask what it needs to form valid triplets. That perspective instantly exposes the structure:

For a fixed middle index j, the value must be x = nums[j].

Valid i and k must both equal 2x.

The number of valid triplets created by that j is:
(how many 2x appear before j) × (how many 2x appear after j)

Once seen this way, the problem becomes a frequency-tracking exercise rather than a combinatorial one.
This reframing is a common pattern in algorithm-heavy challenges: convert a multi-loop brute-force into a counting problem.

A second insight was that keeping track of values "to the left of j" and "to the right of j" is extremely cheap if you maintain rolling frequency counts. Instead of scanning, you simply:

move one element from the right-frequency table to the left-frequency table as you iterate,

giving an O(n) solution with excellent cache locality.

This problem turned into a good reminder that speed in algorithms often comes from observing symmetry and roles within a triple. Here, j is special, once that became clear, the solution fell into place.

## What I Learned
- Fixing the middle index simplifies 3-way relationships.
Instead of thinking in (i, j, k), treat j as the pivot. That turns a 3-dimensional search into two independent 1-dimensional counts.
- Many “triplet counting” problems reduce to frequency maps.
If you can reframe the condition using counts before/after an index, the problem becomes linear.
- Iterating once while shifting counts from right → left is a powerful pattern.
It avoids repeated scanning and implicitly maintains all needed information.
- L * R is a common signature for combinatorial problems.
When left choices and right choices are independent, multiplication is the natural rule.
- Always check constraints early.
The moment you see n = 100,000, loops nested inside loops should immediately be questioned.
- The modulo arithmetic is the easy part, the hard part is finding the structure.
By the time the frequency method is found, everything else becomes implementation detail.
- The problem is secretly about data flow, not math.
This is a pattern across many LeetCode “triplets” problems — the relationship between indices often matters more than the values themselves.