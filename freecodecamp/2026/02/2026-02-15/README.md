# 2026-02-15
[2026-02-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-15)

## Instructions

2026 Winter Games Day 10: Alpine Skiing
Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.
To determine the rating:
- Calculate the steepness of the hill by taking the drop divided by the distance.
- Then, calculate the adjusted steepness based on the hill type:
- "Downhill" multiply steepness by 1.2
- "Slalom": multiply steepness by 0.9
- "Giant Slalom": multiply steepness by 1.0
Return:
- "Green" if the adjusted steepness is less than or equal to 0.1
- "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
- "Black" if the adjusted steepness is greater than 0.25

## My Thoughts

This one is a straightforward formula + threshold classification problem. I first compute base steepness as `drop / distance`, then apply a multiplier based on `type` (`Downhill`, `Slalom`, `Giant Slalom`) to get adjusted steepness. After that, I classify with ordered boundary checks: - `<= 0.1` => `Green`
- `<= 0.25` => `Blue`
- otherwise => `Black` Using the conditions in ascending order keeps the comparisons simple and avoids overlapping cases.

## What I Learned

- Problems that mix calculation and labels are clearer when split into two phases: compute, then classify.
- Ordered threshold checks (`low` to `high`) make range logic easier to read and less error-prone.
- Keeping one variable for the "working" value (`adjustedSteepness`) makes type-based adjustments explicit.
- Even for simple conditionals, matching the prompt's exact boundary wording (`<=`, `>`) prevents off-by-one-style logic mistakes.
