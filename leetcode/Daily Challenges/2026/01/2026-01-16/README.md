# 2026-01-16

## Instructions
There is a large (m - 1) x (n - 1) rectangular field with corners at (1, 1) and (m, n) containing some horizontal and vertical fences given in arrays hFences and vFences respectively.

Horizontal fences are from the coordinates (hFences[i], 1) to (hFences[i], n) and vertical fences are from the coordinates (1, vFences[i]) to (m, vFences[i]).

Return the maximum area of a square field that can be formed by removing some fences (possibly none) or -1 if it is impossible to make a square field.

Since the answer may be large, return it modulo 109 + 7.

Note: The field is surrounded by two horizontal fences from the coordinates (1, 1) to (1, n) and (m, 1) to (m, n) and two vertical fences from the coordinates (1, 1) to (m, 1) and (1, n) to (m, n). These fences cannot be removed.

 
```
Example 1:
Input: m = 4, n = 3, hFences = [2,3], vFences = [2]
Output: 4
Explanation: Removing the horizontal fence at 2 and the vertical fence at 2 will give a square field of area 4.

Example 2:
Input: m = 6, n = 7, hFences = [2], vFences = [4]
Output: -1
Explanation: It can be proved that there is no way to create a square field by removing fences.
``` 

Constraints:

3 <= m, n <= 109
1 <= hFences.length, vFences.length <= 600
1 < hFences[i] < m
1 < vFences[i] < n
hFences and vFences are unique.

## My Thoughts

This one clicked once I reframed it as: “Can I find the largest possible side length that exists in both directions?”
Because removing fences basically means I’m allowed to choose any two horizontal fence lines as the top/bottom of my square, and any two vertical fence lines as the left/right. The side length is just the distance between the chosen pair.

So generating all possible gaps (differences) for horizontal fences and vertical fences, then taking the largest common gap, is a clean and correct approach. It’s also easy to reason about: if a side length exists in both sets, a square with that side is possible.

Where this solution can get heavy is performance: getAllGaps is O(k²) where k = (#fences + 2). With up to ~602 positions, that’s ~180k gaps per direction, which is actually still fine in JS/TS for these constraints. Memory is also okay because a Set of ~180k integers is manageable.

The BigInt part at the end is a good touch: squaring can overflow normal JS numbers once side lengths get large.

## What I Learned
	•	Turning the problem into “largest common distance” simplifies it a lot.
	•	Including the outer borders (1 and m, 1 and n) is essential—those fences can’t be removed but they do define valid edges.
	•	Building all pairwise gaps is a simple and effective strategy when the fence count is only a few hundred.
	•	The square’s area can overflow JS number, so using BigInt for (side * side) % MOD is the safe move.
	•	A set-intersection style approach (gap set vs gap set) is a nice pattern for “must match in two dimensions” problems.