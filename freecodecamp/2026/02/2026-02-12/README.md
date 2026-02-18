# 2026-02-12
[2026-02-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-12)

## Instructions

2026 Winter Games Day 7: Speed Skating
Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.
The first element of each array corresponds to lap 1, the second to lap 2, and so on.

## My Thoughts

This one is a straightforward single pass. Since lap numbers line up by index, I just compare `skater1[i]` and `skater2[i]`, track the largest absolute difference seen so far, and store the corresponding lap number (`i + 1`). No nested loops are needed because we are only comparing matching laps.

## What I Learned

- When two arrays represent aligned events, index-by-index comparison is usually the right model.
- Returning the lap number means tracking both the best value and where it occurred.
- `Math.abs(a - b)` keeps the difference logic clean and avoids duplicate branch checks.
- For this type of problem, `O(n)` time and `O(1)` extra space is the simplest and best approach.
