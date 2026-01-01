# 2025-11-21

## Instructions

Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

```
Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
 ```

Constraints:

3 <= s.length <= 105
s consists of only lowercase English letters.

## My Thoughts

This problem seemed intimidating at first because “palindromic subsequences” sounds like something that would require backtracking or dynamic programming. But once I realized that every palindrome of length three has the structure x-y-x, the entire problem simplified. The key insight is that the outer characters must match, and any character that appears between their first and last occurrence can serve as the middle letter. That perspective transforms the problem from “find subsequences” into “analyze position ranges.”
My first approach was messier than it needed to be—I tried building palindromes from combinations of letters, but that didn't properly enforce ordering or uniqueness. Once I shifted to a letter-by-letter strategy (checking each possible outer character and looking inside its range), the logic became much cleaner and matched exactly what the problem required.

## What I Learned

- A length-3 palindrome has only one structure: x y x, so the heart of the problem is identifying possible outer characters and then counting distinct middle characters.
- Subsequence problems often look complex until you reduce them to positional constraints; “first occurrence” and “last occurrence” end up being more powerful than brute-force combinations.
- Using a fixed alphabet (a–z) means you can loop 26 times with predictable work—this turns what looks like an O(n²) problem into O(n).
- LeetCode’s “optimal” solution isn’t more clever—it’s just a more efficient implementation of the same insight: precompute first/last positions and use small fixed-size arrays instead of Sets for speed.
- The big takeaway is that simplifying the structure of the problem is far more important than optimizing the code. Once the idea was right, writing the solution was straightforward.
