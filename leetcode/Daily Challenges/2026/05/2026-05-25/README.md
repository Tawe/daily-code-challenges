# 2026-05-25

## Instructions
You are given a **0-indexed** binary string `s` and two integers `minJump` and `maxJump`. In the beginning, you are standing at index `0`, which is equal to `'0'`. You can move from index `i` to index `j` if the following conditions are fulfilled:

- `i + minJump <= j <= min(i + maxJump, s.length - 1)`, and
- `s[j] == '0'`.

Return `true` _if you can reach index_ `s.length - 1` _in_ `s`_, or_ `false` _otherwise._

**Example 1:**
**Input:** s = "011010", minJump = 2, maxJump = 3
**Output:** true
**Explanation:**
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.

**Example 2:**
**Input:** s = "01101110", minJump = 2, maxJump = 3
**Output:** false

**Constraints:**
- `2 <= s.length <= 105`
- `s[i]` is either `'0'` or `'1'`.
- `s[0] == '0'`
- `1 <= minJump <= maxJump < s.length`

## Solution

Track which positions are reachable and sweep forward through the string.

The main challenge is avoiding repeated scans of the same jump ranges.

### Key idea

Use:

- `reach[i]` = whether index `i` is reachable
- `prev` = the farthest index we have already processed in any jump range

For every reachable index `i`, its jump window is:

- from `i + minJump`
- to `i + maxJump`

But if earlier reachable indices have already scanned part of that range, we do not need to scan it again.

So for each reachable `i`, only process:

- `lo = max(prev + 1, i + minJump)`
- `hi = min(i + maxJump, n - 1)`

Then:

- mark every `j` in `[lo, hi]` as reachable if `s[j] == '0'`
- update `prev = max(prev, hi)`

### Why this works

Any reachable index creates a valid interval of possible next positions.
If a later BFS-style process would revisit part of an interval that was already scanned, it adds no new information.

The `prev` boundary ensures:

- every position is checked at most once as part of some jump interval
- we still mark every valid reachable `'0'` position

At the end, `reach[n - 1]` tells us whether the last index can be reached.

### Complexity

- Time: `O(n)`
- Space: `O(n)`

Because each index is scanned at most once across all jump windows, this is efficient enough for `n <= 10^5`.
