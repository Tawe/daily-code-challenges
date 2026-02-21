# 2026-02-18
[2026-02-18 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-18)

## Instructions

2026 Winter Games Day 13: Nordic Combined
Given an array of jump scores for athletes, calculate their start delay times for the cross-country portion of the Nordic Combined.
The athlete with the highest jump score starts first (0 second delay). All other athletes start later based on how far behind their jump score is compared to the best jump.
To calculate the delay for each athlete, subtract the athlete's jump score from the best overall jump score and multiply the result by 1.5. Round the delay up to the nearest integer.

## My Thoughts

I solved this with a mapping approach: - find the best score with `Math.max(...jumpScores)`
- map each score to a delay using `(bestScore - score) * 1.5`
- round up each delay with `Math.ceil(...)` That directly matches the problem formula, and it keeps the code short and easy to read.

## What I Learned

- `Math.ceil` is the right rounding choice when the prompt says "round up."
- Transforming arrays with `map` is a clean fit when each output depends only on one input value plus a shared reference value (the best score).
- A small optimization is to compute `bestScore` once before `map` instead of recalculating `Math.max(...jumpScores)` for every element.
