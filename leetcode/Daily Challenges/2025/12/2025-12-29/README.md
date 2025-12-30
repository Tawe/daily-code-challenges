2025-12-29

## Instructions
You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains one less block than the row beneath it and is centered on top.

To make the pyramid aesthetically pleasing, there are only specific triangular patterns that are allowed. A triangular pattern consists of a single block stacked on top of two blocks. The patterns are given as a list of three-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.

For example, "ABC" represents a triangular pattern with a 'C' block stacked on top of an 'A' (left) and 'B' (right) block. Note that this is different from "BAC" where 'B' is on the left bottom and 'A' is on the right bottom.
You start with a bottom row of blocks bottom, given as a single string, that you must use as the base of the pyramid.

Given bottom and allowed, return true if you can build the pyramid all the way to the top such that every triangular pattern in the pyramid is in allowed, or false otherwise.

```yaml
Example 1:
Input: bottom = "BCD", allowed = ["BCC","CDE","CEA","FFF"]
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build "CE" on level 2 and then build "A" on level 1.
There are three triangular patterns in the pyramid, which are "BCC", "CDE", and "CEA". All are allowed.

Example 2:
Input: bottom = "AAAA", allowed = ["AAB","AAC","BCD","BBE","DEF"]
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.
 ```

Constraints:

2 <= bottom.length <= 6
0 <= allowed.length <= 216
allowed[i].length == 3
The letters in all input strings are from the set {'A', 'B', 'C', 'D', 'E', 'F'}.
All the values of allowed are unique.

## My Thoughts

This challenge looked intimidating at first because it involves exploring multiple possible pyramid configurations, and it wasn’t obvious whether a greedy approach would work. The examples made it clear that even when early levels look promising, you can still get stuck later, which meant I had to consider all valid possibilities.

Once I realized how small the input size was, the problem became much more approachable. Instead of trying to be clever, I focused on systematically exploring all valid transitions while pruning impossible paths as early as possible. Preprocessing the allowed patterns into a lookup structure helped keep the recursive logic clean and focused.

Memoization turned out to be essential, without it, the same intermediate rows could be recomputed many times through different paths.

## What I Learned
	•	Some problems are naturally suited for backtracking, especially when choices branch and constraints are local.
	•	Input constraints often signal the intended solution — small limits invite recursion.
	•	Preprocessing data into a fast lookup (like a map of pairs to possible tops) simplifies recursive logic.
	•	Memoization can turn exponential-looking recursion into something manageable.
	•	When greedy logic fails, exploring the state space carefully is often the right move.
