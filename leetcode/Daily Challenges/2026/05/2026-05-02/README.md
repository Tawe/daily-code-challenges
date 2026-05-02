# 2026-05-02

## Instructions
An integer `x` is a **good** if after rotating each digit individually by 180 degrees, we get a valid number that is different from `x`. Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. For example:

- `0`, `1`, and `8` rotate to themselves,
- `2` and `5` rotate to each other (in this case they are rotated in a different direction, in other words, `2` or `5` gets mirrored),
- `6` and `9` rotate to each other, and
- the rest of the numbers do not rotate to any other number and become invalid.

Given an integer `n`, return _the number of **good** integers in the range_ `[1, n]`.

**Example 1:**
**Input:** n = 10
**Output:** 4
**Explanation:** There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

**Example 2:**
**Input:** n = 1
**Output:** 0

**Example 3:**
**Input:** n = 2
**Output:** 1

**Constraints:**
- `1 <= n <= 104`

## My Thoughts

This solution checks each number from `1` through `n` and asks two questions:

- are all of its digits valid after rotation?
- does the rotated result become a different number?

The Ruby solution uses a hash map for the digit transformation:

- `0`, `1`, and `8` stay the same
- `2 <-> 5`
- `6 <-> 9`

For each number, it converts the number to a string, makes sure every digit exists in the rotation map, then builds the rotated version digit by digit. If the rotated number is valid and different from the original number, it counts as good.

This is a straightforward brute-force approach, but the constraint is small enough that it works comfortably.

### Complexity

- Time: `O(n * d)`, where `d` is the number of digits
- Space: `O(d)`

## What I Learned

This challenge reinforced a simple but useful pattern: when a problem defines a per-character transformation, a lookup table often makes the logic much cleaner.

It also highlighted the difference between "valid after transformation" and "actually changed by transformation." Digits like `0`, `1`, and `8` stay legal, but they do not make a number good on their own.
