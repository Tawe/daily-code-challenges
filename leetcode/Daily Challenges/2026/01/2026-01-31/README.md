# 2026-01-31

## Instructions
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
```
Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
```

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

## My Thoughts
This problem felt very approachable once I focused on what “lexicographically greater” actually means. At its core, it’s just comparing character order and returning the first one that’s strictly greater than the target.

Because the input array is already sorted, I didn’t need to do anything fancy, a simple scan from left to right works. As soon as I found a character that comes after the target alphabetically, I could return it immediately. The wrap-around case (when nothing is greater than the target) is also clearly defined, which made the logic feel complete and safe.

I chose to map characters to their alphabet index to make the comparisons explicit. That helped reinforce what “greater than” meant instead of relying on implicit string comparisons.

This felt like a good reminder that sometimes the simplest solution is perfectly acceptable, especially when constraints are small enough.

## What I Learned
	•	“Lexicographically greater” just means “comes later in the alphabet.”
	•	Since letters is already sorted, the first valid match is guaranteed to be the smallest valid answer.
	•	A linear scan is often enough when the problem structure supports early exits.
	•	The wrap-around requirement is important: if nothing is greater, return the first element.
	•	Converting characters to numeric positions can make comparisons more concrete and easier to reason about.
	•	Not every sorted-array problem needs binary search correctness and clarity come first.