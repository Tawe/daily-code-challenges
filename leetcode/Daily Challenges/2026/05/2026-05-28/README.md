# 2026-05-28

## Instructions
You are given two arrays of strings `wordsContainer` and `wordsQuery`.

For each `wordsQuery[i]`, you need to find a string from `wordsContainer` that has the **longest common suffix** with `wordsQuery[i]`. If there are two or more strings in `wordsContainer` that share the longest common suffix, find the string that is the **smallest** in length. If there are two or more such strings that have the **same** smallest length, find the one that occurred **earlier** in `wordsContainer`.

Return _an array of integers_ `ans`_, where_ `ans[i]` _is the index of the string in_ `wordsContainer` _that has the **longest common suffix** with_ `wordsQuery[i]`_._

**Example 1:**
**Input:** wordsContainer = ["abcd","bcd","xbcd"], wordsQuery = ["cd","bcd","xyz"]
**Output:** [1,1,1]
**Explanation:**
Let's look at each `wordsQuery[i]` separately:

- For `wordsQuery[0] = "cd"`, strings from `wordsContainer` that share the longest common suffix `"cd"` are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
- For `wordsQuery[1] = "bcd"`, strings from `wordsContainer` that share the longest common suffix `"bcd"` are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
- For `wordsQuery[2] = "xyz"`, there is no string from `wordsContainer` that shares a common suffix. Hence the longest common suffix is `""`, that is shared with strings at index 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.

**Example 2:**
**Input:** wordsContainer = ["abcdefgh","poiuygh","ghghgh"], wordsQuery = ["gh","acbfgh","acbfegh"]
**Output:** [2,0,2]
**Explanation:**
Let's look at each `wordsQuery[i]` separately:

- For `wordsQuery[0] = "gh"`, strings from `wordsContainer` that share the longest common suffix `"gh"` are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.
- For `wordsQuery[1] = "acbfgh"`, only the string at index 0 shares the longest common suffix `"fgh"`. Hence it is the answer, even though the string at index 2 is shorter.
- For `wordsQuery[2] = "acbfegh"`, strings from `wordsContainer` that share the longest common suffix `"gh"` are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.

**Constraints:**
- `1 <= wordsContainer.length, wordsQuery.length <= 104`
- `1 <= wordsContainer[i].length <= 5 * 103`
- `1 <= wordsQuery[i].length <= 5 * 103`
- `wordsContainer[i]` consists only of lowercase English letters.
- `wordsQuery[i]` consists only of lowercase English letters.
- Sum of `wordsContainer[i].length` is at most `5 * 105`.
- Sum of `wordsQuery[i].length` is at most `5 * 105`.

## Solution

Turn suffix matching into prefix matching by reversing every word.

Then build a trie from the reversed `wordsContainer` strings.
Each trie node stores the best container index for that suffix path according to the problem’s tie-break rules:

- prefer the shortest word
- if lengths tie, prefer the earlier index

### Key idea

If two strings share a suffix, then their reversed strings share a prefix.

So:

- insert each container word reversed into a trie
- while inserting, update every visited node with the best index seen for that suffix

That includes:

- the root node, which represents the empty suffix
- every deeper node, which represents a longer matched suffix

For each query:

- reverse-traverse it character by character through the trie
- keep following edges while they exist
- the deepest node reached gives the longest common suffix
- the stored index at that node is already the correct answer after tie-breaking

### Why this works

Every trie path corresponds to a suffix of some container word.

When querying:

- the longest path we can follow is exactly the longest suffix shared with some container word

And because each node stores the best candidate index among all words passing through that node, we do not need any extra comparison work during queries.

The answer for:

- no matched characters at all

comes from the root node, which stores the best word for the empty suffix.

### Complexity

- Time: `O(total_container_chars + total_query_chars)`
- Space: `O(total_container_chars)`

This fits the constraints because each character is processed a constant number of times.
