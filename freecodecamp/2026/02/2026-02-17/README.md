# 2026-02-17
[2026-02-17 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-17)

## Instructions
2026 Winter Games Day 12: Bobsled
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

- The length of the array determines the team size: 1, 2 or 4 person teams.
- All given weight values are in kilograms (kg).

The bobsled (sled by iteself) must have a minimum weight of:

- 162 kg for a 1-person team
- 170 kg for a 2-person team
- 210 kg for a 4-person team

The total weight of the bobsled (athletes plus sled) must not exceed:

- 247 kg for a 1-person team
- 390 kg for a 2-person team
- 630 kg for a 4-person team

Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.

## My Thoughts

This one looked simple at first, but the key detail is that the minimum requirement applies to the **sled only**, while the maximum applies to **athletes + sled**.

I handled it by:

- using `athleteWeights.length` to determine which team rules apply
- mapping team size to both `minSledWeight` and `maxTotalWeight`
- summing athlete weights, then computing `totalWeight = athleteTotal + sledWeight`
- returning `"Not Eligible"` when `sledWeight < minSledWeight`
- returning `"Not Eligible"` when `totalWeight > maxTotalWeight`

Otherwise the team is `"Eligible"`.

## What I Learned

- In word problems, similar-sounding constraints can apply to different values, so variable naming matters a lot (`minSledWeight` vs `maxTotalWeight`).
- Splitting validation into explicit checks makes bugs easier to spot than one overloaded condition.
- Re-reading the prompt language carefully is often enough to catch failed edge-case tests.
