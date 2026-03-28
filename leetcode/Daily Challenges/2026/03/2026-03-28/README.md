# 2026-03-28

## Instructions
We define the `lcp` matrix of any **0-indexed** string `word` of `n` lowercase English letters as an `n x n` grid such that:

- `lcp[i][j]` is equal to the length of the **longest common prefix** between the substrings `word[i,n-1]` and `word[j,n-1]`.

Given an `n x n` matrix `lcp`, return the alphabetically smallest string `word` that corresponds to `lcp`. If there is no such string, return an empty string.

A string `a` is lexicographically smaller than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`. For example, `"aabd"` is lexicographically smaller than `"aaca"` because the first position they differ is at the third letter, and `'b'` comes before `'c'`.

**Example 1:**
**Input:** lcp = [[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]]
**Output:** "abab"
**Explanation:** lcp corresponds to any 4 letter string with two alternating letters. The lexicographically smallest of them is "abab".

**Example 2:**
**Input:** lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,1]]
**Output:** "aaaa"
**Explanation:** lcp corresponds to any 4 letter string with a single distinct letter. The lexicographically smallest of them is "aaaa". 

**Example 3:**
**Input:** lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,3]]
**Output:** ""
**Explanation:** lcp[3][3] cannot be equal to 3 since word[3,...,3] consists of only a single letter; Thus, no answer exists.

**Constraints:**

- `1 <= n ==` `lcp.length ==` `lcp[i].length` `<= 1000`
- `0 <= lcp[i][j] <= n`

## My Thoughts

This problem has two phases:

- validate whether the given `lcp` matrix could come from any string
- if valid, build the lexicographically smallest such string

Validation checks:

- `lcp[i][i]` must equal the remaining suffix length `n - i`
- the matrix must be symmetric
- if `lcp[i][j] > 0`, then it should satisfy the suffix relation:
  - `lcp[i][j] = 1 + lcp[i+1][j+1]`

After that, I use DSU (Union-Find):

- if `lcp[i][j] > 0`, then positions `i` and `j` must contain the same character
- union all such pairs into components

Then build the smallest string:

- assign characters to components from left to right
- always choose the smallest letter that does not violate any `lcp[i][j] == 0` constraint with earlier positions

Finally, reconstruct the string by mapping each index to its component’s assigned character.

Time complexity: `O(n^2)`  
Space complexity: `O(n)`

## What I Learned

- LCP matrices encode both equality information and recursive suffix structure, so both need to be validated.
- `lcp[i][j] > 0` immediately means the first characters at `i` and `j` must match.
- Union-Find is a clean way to group positions that are forced to share the same character.
- Building the answer left to right with the smallest valid character is a good way to guarantee lexicographic minimality.
