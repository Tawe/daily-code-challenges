# 2026-03-14

## Instructions
A **happy string** is a string that:

- consists only of letters of the set `['a', 'b', 'c']`.
- `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1` (string is 1-indexed).

For example, strings **"abc", "ac", "b"** and **"abcbabcbcb"** are all happy strings and strings **"aa", "baa"** and **"ababbc"** are not happy strings.

Given two integers `n` and `k`, consider a list of all happy strings of length `n` sorted in lexicographical order.

Return _the kth string_ of this list or return an **empty string** if there are less than `k` happy strings of length `n`.

**Example 1:**
**Input:** n = 1, k = 3
**Output:** "c"
**Explanation:** The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

**Example 2:**
**Input:** n = 1, k = 4
**Output:** ""
**Explanation:** There are only 3 happy strings of length 1.

**Example 3:**
**Input:** n = 3, k = 9
**Output:** "cab"
**Explanation:** There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"

**Constraints:**

- `1 <= n <= 10`
- `1 <= k <= 100`

## My Thoughts

Instead of generating all happy strings, this solution picks characters directly by counting how many strings each choice would produce.

Key counting facts:

- first character has 3 choices (`a`, `b`, `c`)
- each later position has 2 choices (anything except previous char)
- so total happy strings of length `n` is `3 * 2^(n-1)`

If `k` is larger than that total, answer is `""`.

Otherwise, build the answer left to right:

- at position `i`, each valid next character represents a block of `2^(n-1-i)` strings
- iterate candidate chars in lexicographic order
- if `k` falls inside that block, pick that char
- otherwise subtract the block size from `k` and continue

This is basically k-th lexicographic selection by skipping whole blocks, not brute-force enumeration.

Time complexity: `O(n)`  
Space complexity: `O(n)` for the output string

## What I Learned

- For “k-th lexicographic string” tasks, counting completions per prefix is usually better than generating everything.
- The happy-string adjacency rule creates a simple branching pattern: `3` options first, then `2` each step.
- Block-skipping with `k` is a reliable pattern for direct combinatorial selection.
- Early total-count validation (`k > total`) cleanly handles impossible requests.
