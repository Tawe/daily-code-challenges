# 2026-02-03

## Instructions
You are given an integer array nums of length n.

An array is trionic if there exist indices 0 < p < q < n − 1 such that:

nums[0...p] is strictly increasing,
nums[p...q] is strictly decreasing,
nums[q...n − 1] is strictly increasing.
Return true if nums is trionic, otherwise return false.
```
Example 1:
Input: nums = [1,3,5,4,2,6]
Output: true
Explanation:
Pick p = 2, q = 4:
nums[0...2] = [1, 3, 5] is strictly increasing (1 < 3 < 5).
nums[2...4] = [5, 4, 2] is strictly decreasing (5 > 4 > 2).
nums[4...5] = [2, 6] is strictly increasing (2 < 6).

Example 2:
Input: nums = [2,1,3]
Output: false
Explanation:
There is no way to pick p and q to form the required three segments.
```
Constraints:

3 <= n <= 100
-1000 <= nums[i] <= 1000

## My Thoughts

This problem felt like a “pattern detection” question disguised as a multi-pointer puzzle. At first glance it looks like I need to pick two split points p and q, but the real challenge is making sure each segment is strictly monotonic and the split points are valid positions (0 < p < q < n-1).

My approach was to reduce the search space by precomputing two things:
	•	A prefixInc[i] array that tells me whether nums[0..i] is strictly increasing.
	•	A suffixInc[i] array that tells me whether nums[i..n-1] is strictly increasing.

That way, I don’t waste time checking p values that can’t possibly work (because the first segment already fails), or q values that can’t work (because the last segment fails).

Then for the middle “strictly decreasing” segment, I only check it when both ends are viable (prefix ok at p, suffix ok at q). That made the brute-force part much smaller and much more controlled.

It also helped me notice that this problem is basically “find a mountain valley mountain” structure, but with strict rules, so even equal adjacent values instantly break the possibility.

## What I Learned
	•	Precomputing monotonic prefixes/suffixes is a great way to prune a search.
	•	“Strictly increasing/decreasing” is unforgiving: one equality breaks the entire segment.
	•	The split constraints matter: p can’t be 0 and q can’t be n-1, because each segment needs at least one comparison to prove its direction.
	•	Even when n is small (≤ 100), it’s still worth shaping the search so you’re only doing expensive checks when you have to.
	•	This is a good example of combining:
	•	O(n) preprocessing (prefix/suffix)
	•	with a targeted O(n³) worst-case check, but in practice much smaller due to pruning.