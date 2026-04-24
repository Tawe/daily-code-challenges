# 2026-04-24

## Instructions
You are given a string `moves` of length `n` consisting only of characters `'L'`, `'R'`, and `'_'`. The string represents your movement on a number line starting from the origin `0`.

In the `ith` move, you can choose one of the following directions:

- move to the left if `moves[i] = 'L'` or `moves[i] = '_'`
- move to the right if `moves[i] = 'R'` or `moves[i] = '_'`

Return _the **distance from the origin** of the **furthest** point you can get to after_ `n` _moves_.

**Example 1:**
**Input:** moves = "L_RL__R"
**Output:** 3
**Explanation:** The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves "LLRLLLR".

**Example 2:**
**Input:** moves = "_R__LL_"
**Output:** 5
**Explanation:** The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves "LRLLLLL".

**Example 3:**
**Input:** moves = "_______"
**Output:** 7
**Explanation:** The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves "RRRRRRR".

**Constraints:**
- `1 <= moves.length == n <= 50`
- `moves` consists only of characters `'L'`, `'R'` and `'_'`.

## My Thoughts

The useful simplification here is that the exact order of the moves does not matter for the final maximum distance. What matters is the net difference between fixed left moves and fixed right moves, plus how many flexible `'_'` moves are available.

The Rust solution counts:

- how many `'L'` moves there are
- how many `'R'` moves there are
- how many `'_'` moves there are

The fixed moves contribute a base displacement of `abs(left - right)`. After that, every underscore can be chosen to keep pushing in the better direction, so each one increases the maximum possible distance by `1`. That leads directly to:

`abs(left - right) + underscore`

### Complexity

- Time: `O(n)`
- Space: `O(1)`

## What I Learned

This challenge was a good reminder that some movement problems do not need simulation at all. Once the flexible moves are recognized as always helping the stronger direction, the answer becomes a simple counting formula.

It also reinforced the idea of separating fixed contribution from optional contribution. The fixed `L` and `R` moves determine the current offset, and the underscores just extend that offset as far as possible.
