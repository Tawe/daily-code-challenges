# 2026-03-30

## Instructions
You are given two strings `s1` and `s2`, both of length `n`, consisting of **lowercase** English letters.

You can apply the following operation on **any** of the two strings **any** number of times:

- Choose any two indices `i` and `j` such that `i < j` and the difference `j - i` is **even**, then **swap** the two characters at those indices in the string.

Return `true` _if you can make the strings_ `s1` _and_ `s2` _equal, and_ `false` _otherwise_.

**Example 1:**
**Input:** s1 = "abcdba", s2 = "cabdab"
**Output:** true
**Explanation:** We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = "cbadba".
- Choose the indices i = 2, j = 4. The resulting string is s1 = "cbbdaa".
- Choose the indices i = 1, j = 5. The resulting string is s1 = "cabdab" = s2.

**Example 2:**
**Input:** s1 = "abe", s2 = "bea"
**Output:** false
**Explanation:** It is not possible to make the two strings equal.

**Constraints:**

- `n == s1.length == s2.length`
- `1 <= n <= 105`
- `s1` and `s2` consist only of lowercase English letters.

## My Thoughts

The key observation is that swapping indices with even distance preserves parity:

- even indices can only swap with other even indices
- odd indices can only swap with other odd indices

So we do not care about exact positions inside each parity group.  
We only need the same multiset of characters among:

- even positions
- odd positions

The implementation tracks that with frequency differences:

- for each even index, add `s1[i]` and subtract `s2[i]`
- for each odd index, do the same in a separate counter

If all counts end at zero, then `s1` can be rearranged within parity groups to match `s2`.

Time complexity: `O(n)`  
Space complexity: `O(1)` because the alphabet size is fixed at 26

## What I Learned

- Swap rules often imply invariants, and here the invariant is index parity.
- Once parity is identified as the only constraint, the problem reduces to comparing character counts within even and odd buckets.
- Using difference arrays is a compact way to compare two multisets in one pass.
- Large input size does not require complex logic when the allowed transformation has a simple structural rule.
