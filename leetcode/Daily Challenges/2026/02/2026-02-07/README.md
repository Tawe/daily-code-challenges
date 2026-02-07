# 2026-02-07

## Instructions
You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.
```
Example 1:
Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

Example 2:
Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.
``` 

Constraints:

1 <= s.length <= 105
s[i] is 'a' or 'b'​​.

## My Thoughts

This problem looks like a counting problem, but it’s really a dynamic decision problem. The moment you see an a after a b, you’re forced to choose which side to sacrifice past or future.

The elegant part is realizing:

You never need to remember which characters you deleted, only the minimum cost so far.

That’s why this runs in linear time and constant space.


## What You Learned
	•	“Balanced” often means monotonic order
	•	Greedy + running minimum can replace full DP
	•	Tracking choices, not history, simplifies solutions
	•	Many string problems reduce to conflict resolution
	•	Counting alone rarely works when deletions are optional