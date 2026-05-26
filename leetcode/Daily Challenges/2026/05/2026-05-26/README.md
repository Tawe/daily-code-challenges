# 2026-05-26

## Instructions
You are given a string `word`. A letter is called **special** if it appears **both** in lowercase and uppercase in `word`.

Return the number of **special** letters in `word`.

**Example 1:**
**Input:** word = "aaAbcBC"
**Output:** 3
**Explanation:**
The special characters in `word` are `'a'`, `'b'`, and `'c'`.

**Example 2:**
**Input:** word = "abc"
**Output:** 0
**Explanation:**
No character in `word` appears in uppercase.

**Example 3:**
**Input:** word = "abBCab"
**Output:** 1
**Explanation:**
The only special character in `word` is `'b'`.

**Constraints:**
- `1 <= word.length <= 50`
- `word` consists of only lowercase and uppercase English letters.

## Solution

Track lowercase and uppercase appearances separately, then count how many letters appear in both forms.

### Key idea

Use two hash-based sets:

- `lower` for letters that appear in lowercase
- `upper` for letters that appear in uppercase

When scanning each character:

- if it is lowercase, store it directly in `lower`
- if it is uppercase, convert it to lowercase first and store that letter in `upper`

After the scan, count how many letters from `lower` also exist in `upper`.

That count is exactly the number of special letters.

### Why this works

A letter is special if and only if:

- its lowercase form appears somewhere in the word
- and its uppercase form also appears somewhere in the word

By normalizing uppercase letters with `downcase`, both sets use the same key format.
That makes the overlap test straightforward.

### Complexity

- Time: `O(n)`
- Space: `O(1)`

`n` is the length of `word`, and the space is effectively constant because there are only 26 English letters.
