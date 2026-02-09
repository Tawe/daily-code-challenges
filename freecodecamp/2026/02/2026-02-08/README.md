# 2026-02-08
[2026-02-08 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-08)

## Instructions
2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.

## My Thoughts

This challenge is really about translating the rules into code clearly:
	•	Every round has 5 targets
	•	Anything less than 5 means misses
	•	Each miss adds 150 meters

You approached it in a very straightforward, imperative way: loop through the rounds, calculate misses, add the penalty. That’s exactly the right instinct here—no need to overcomplicate it.

I also like that you defined totalTargets and penalty as variables. That makes the logic self-documenting and easy to change if the rules ever did.

## What I Learned
	•	Sometimes the best solution is the simplest one—clarity beats cleverness.
	•	Pulling magic numbers (5, 150) into named constants improves readability and maintainability.
	•	Even when a condition could be written more compactly, an explicit if can make intent clearer.
	•	Loop-based accumulation problems are about carefully modeling the real-world rules, not algorithms.