# 2026-02-09
[2026-02-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-09)

## Instructions

2026 Winter Games Day 4: Ski Jumping
Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.
Your score is calculated by summing the above four values.
The current total scores of the other jumpers are:
165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal"

## My Thoughts

You did a few things especially well here: •	Separated concerns clearly: •	One line to calculate your score. •	One array for the other jumpers’ scores. •	Sorting the competitors in descending order makes the ranking logic intuitive. •	The early return inside the loop is efficient and easy to reason about. The conditional return:
``return i === 0 ? "Gold" : i === 1 ? "Silver" : i === 2 ? "Bronze" : "No Medal";`` is compact but still readable, a good balance between conciseness and clarity.

## What I Learned

- Ranking problems often become much simpler once the data is sorted.
- When the output depends on position (1st, 2nd, 3rd), using the loop index directly is a clean approach.
- Early exits (return as soon as the result is known) keep code efficient and easy to follow.
- You don’t need to insert your score into the array to rank it, comparing against a sorted list works just as well.
