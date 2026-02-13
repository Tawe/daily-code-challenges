# 2026-02-13
[2026-02-13 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-13)

## Instructions
2026 Winter Games Day 8: Luge
Given an array of times (in seconds) for each track segment, calculate the speed for each segment and return which segment had the fastest speed.

## My Thoughts

This is a clean one-pass solution. I map each time to its matching segment distance by index, compute `speed = distance / time`, and keep track of the best speed seen so far along with the segment number (`i + 1`). That gives the answer in linear time without extra data structures.

## What I Learned

- When two related datasets are index-aligned, a single loop is usually enough.
- For optimization-style problems, track both the current best value and where it happened.
- Returning a formatted result (`toFixed(2)`) makes numeric output easier to read.
- This pattern is naturally `O(n)` time and `O(1)` extra space, which is optimal for scanning every segment once.
