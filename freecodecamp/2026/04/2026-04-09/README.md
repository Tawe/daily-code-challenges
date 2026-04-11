# 2026-04-09
[2026-04-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-09)

## Instructions

Next Bingo Number

Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:

|Letter|Number Range|
|---|---|
|`"B"`|1-15|
|`"I"`|16-30|
|`"N"`|31-45|
|`"G"`|46-60|
|`"O"`|61-75|

For example, given `"B10"`, return `"B11"`, the next bingo number. If given the last bingo number, return `"B1"`.

## My Thoughts

This problem is mostly about parsing and range boundaries.

The solution flow is:

- split the bingo value into:
  - the letter prefix
  - the numeric part
- increment the number
- if the value passes the current letter’s max range, move to the next bingo letter
- if the input was the very last number (`O75`), wrap back to `B1`

Using a small lookup object for the maximum value of each letter makes the boundary check simple and easy to read.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Mixed-format strings are often easiest to handle by separating the symbolic prefix from the numeric suffix.
- Small fixed-range problems work well with lookup tables instead of long condition chains.
- Wraparound behavior is an important edge case and is often best handled explicitly.
- Increment-and-boundary problems usually become simple once the valid ranges are encoded clearly.
