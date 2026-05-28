# 2026-05-27

## Instructions
You are given a string `word`. A letter `c` is called **special** if it appears **both** in lowercase and uppercase in `word`, and **every** lowercase occurrence of `c` appears before the **first** uppercase occurrence of `c`.

Return the number of **special** letters in `word`.

**Example 1:**
**Input:** word = "aaAbcBC"
**Output:** 3
**Explanation:**
The special characters are `'a'`, `'b'`, and `'c'`.

**Example 2:**
**Input:** word = "abc"
**Output:** 0
**Explanation:**
There are no special characters in `word`.

**Example 3:**
**Input:** word = "AbBCab"
**Output:** 0

**Explanation:**
There are no special characters in `word`.

**Constraints:**
- `1 <= word.length <= 2 * 105`
- `word` consists of only lowercase and uppercase English letters.

## Solution

We need more than just knowing whether a letter appears in both cases.
We also need the ordering rule:

- every lowercase occurrence must come before the first uppercase occurrence

### Key idea

For each letter, track:

- `last_lower[letter]` = the last index where the lowercase version appears
- `first_upper[letter]` = the first index where the uppercase version appears

Scan the string once from left to right:

- if the character is lowercase, update `last_lower`
- if it is uppercase, set `first_upper` only the first time we see it

After the scan, a letter is special exactly when:

- it appears in both maps
- and `last_lower[letter] < first_upper[letter]`

That condition means every lowercase occurrence is before the first uppercase occurrence.

### Why this works

If the last lowercase position is still before the first uppercase position, then all lowercase copies must lie to the left of all uppercase copies.

If instead:

- there is no lowercase occurrence
- there is no uppercase occurrence
- or `last_lower[letter] >= first_upper[letter]`

then the letter does not satisfy the definition.

So comparing these two boundary positions is enough.

### Complexity

- Time: `O(n)`
- Space: `O(1)`

`n` is the length of the word, and the extra space is effectively constant because there are only 26 English letters.
