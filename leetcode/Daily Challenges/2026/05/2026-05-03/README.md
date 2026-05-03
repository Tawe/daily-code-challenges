# 2026-05-03

## Instructions
Given two strings `s` and `goal`, return `true` _if and only if_ `s` _can become_ `goal` _after some number of **shifts** on_ `s`.

A **shift** on `s` consists of moving the leftmost character of `s` to the rightmost position.

- For example, if `s = "abcde"`, then it will be `"bcdea"` after one shift.

**Example 1:**
**Input:** s = "abcde", goal = "cdeab"
**Output:** true

**Example 2:**
**Input:** s = "abcde", goal = "abced"
**Output:** false

**Constraints:**
- `1 <= s.length, goal.length <= 100`
- `s` and `goal` consist of lowercase English letters.

## My Thoughts

The key observation is that every possible rotation of `s` appears as a contiguous substring inside `s + s`. For example, if `s = "abcde"`, then `"abcdeabcde"` contains `"abcde"`, `"bcdea"`, `"cdeab"`, `"deabc"`, and `"eabcd"` as substrings.

So the Ruby solution is very small:

- if the lengths differ, return `false`
- otherwise, check whether `goal` appears inside `s + s`

If it does, then `goal` is some rotation of `s`. If it does not, then no sequence of left shifts can produce it.

### Complexity

- Time: `O(n)` to `O(n^2)` depending on substring search behavior
- Space: `O(n)` for the doubled string

## What I Learned

This challenge reinforced a very common string trick: when rotations are involved, doubling the original string often turns the problem into a substring check.

It also showed how helpful it is to verify the simple prerequisite first. If the two strings do not have the same length, there is no need to do any further work.
