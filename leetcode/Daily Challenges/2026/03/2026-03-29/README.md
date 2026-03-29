# 2026-03-29

## Instructions
You are given two strings `s1` and `s2`, both of length `4`, consisting of **lowercase** English letters.

You can apply the following operation on any of the two strings **any** number of times:

- Choose any two indices `i` and `j` such that `j - i = 2`, then **swap** the two characters at those indices in the string.

Return `true` _if you can make the strings_ `s1` _and_ `s2` _equal, and_ `false` _otherwise_.

**Example 1:**
**Input:** s1 = "abcd", s2 = "cdab"
**Output:** true
**Explanation:** We can do the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = "cbad".
- Choose the indices i = 1, j = 3. The resulting string is s1 = "cdab" = s2.

**Example 2:**
**Input:** s1 = "abcd", s2 = "dacb"
**Output:** false
**Explanation:** It is not possible to make the two strings equal.

**Constraints:**
- `s1.length == s2.length == 4`
- `s1` and `s2` consist only of lowercase English letters.

## My Thoughts

The allowed swaps only connect indices that differ by `2`, which means:

- positions `0` and `2` can swap with each other
- positions `1` and `3` can swap with each other

So the string is really split into two independent groups:

- even indices: `{0, 2}`
- odd indices: `{1, 3}`

That means `s1` can become `s2` if and only if:

- the characters at indices `0` and `2` match as a pair, in either order
- the characters at indices `1` and `3` match as a pair, in either order

The implementation checks exactly those two conditions directly.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Swap constraints often partition positions into independent components.
- Here, distance-2 swaps preserve index parity, so even and odd positions must be handled separately.
- Once those components are identified, the problem becomes simple pair matching rather than simulation.
- For tiny fixed-size strings, direct condition checks can be clearer than using sorting or graph traversal.
