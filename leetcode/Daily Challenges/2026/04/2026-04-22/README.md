# 2026-04-22

## Instructions
You are given two string arrays, `queries` and `dictionary`. All words in each array comprise of lowercase English letters and have the same length.

In one **edit** you can take a word from `queries`, and change any letter in it to any other letter. Find all words from `queries` that, after a **maximum** of two edits, equal some word from `dictionary`.

Return _a list of all words from_ `queries`_,_ _that match with some word from_ `dictionary` _after a maximum of **two edits**_. Return the words in the **same order** they appear in `queries`.

**Example 1:**
**Input:** queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
**Output:** ["word","note","wood"]
**Explanation:**
- Changing the 'r' in "word" to 'o' allows it to equal the dictionary word "wood".
- Changing the 'n' to 'j' and the 't' to 'k' in "note" changes it to "joke".
- It would take more than 2 edits for "ants" to equal a dictionary word.
- "wood" can remain unchanged (0 edits) and match the corresponding dictionary word.
Thus, we return ["word","note","wood"].

**Example 2:**
**Input:** queries = ["yes"], dictionary = ["not"]
**Output:** []
**Explanation:**
Applying any two edits to "yes" cannot make it equal to "not". Thus, we return an empty array.

**Constraints:**
- `1 <= queries.length, dictionary.length <= 100`
- `n == queries[i].length == dictionary[j].length`
- `1 <= n <= 100`
- All `queries[i]` and `dictionary[j]` are composed of lowercase English letters.

## My Thoughts

This problem is small enough that the direct approach is the right one. For each query word, I just compare it against every dictionary word and count how many positions differ. If any dictionary word differs in at most two places, that query belongs in the answer.

The Rust solution wraps that character-by-character comparison in a helper function, `within_two_edits`. It zips the bytes of the query and dictionary word together, increments a mismatch counter when the characters differ, and returns early as soon as the count goes above `2`.

That early exit matters because it avoids unnecessary work once a pair is already impossible. Then the outer loop simply keeps the query if at least one dictionary word passes the check.

### Complexity

- Time: `O(q * d * n)`
- Space: `O(1)` extra space, excluding the output

## What I Learned

This challenge was a good reminder that small constraints should influence the solution choice. With lengths up to `100`, there is no need for a more complicated indexing structure when a direct comparison is already fast enough.

It also reinforced how useful early termination is in string comparison problems. As soon as the mismatch count exceeds the allowed limit, the rest of the characters no longer matter.
