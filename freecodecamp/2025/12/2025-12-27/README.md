# 2025-12-27
[2025-12-27 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-27)

## Instructions

Rock, Paper, Scissors
Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.
The input strings will always be "Rock", "Paper", or "Scissors".
"Rock" beats "Scissors".
"Paper" beats "Rock".
"Scissors" beats "Paper".
Return:
"Player 1 wins" if Player 1 wins.
"Player 2 wins" if Player 2 wins.
"Tie" if both players choose the same option.

## My Thoughts

This problem was very straightforward once I recognized that there are only a fixed number of possible inputs. Because the domain is so small and well-defined, the solution doesn’t need anything fancy, just clear conditional logic. I made sure to handle the tie case first, since that short-circuits the rest of the logic. After that, listing out Player 1’s winning conditions made the remaining case easy to handle without additional checks. This was a good reminder that sometimes the most readable solution is also the best one.

## What I Learned

- When the input space is small and fixed, simple conditionals are often optimal.
- Handling base cases (like ties) early simplifies the rest of the logic.
- Clarity and correctness matter more than clever abstractions in simple problems.
- Lookup tables can make solutions more scalable, but aren’t always necessary.
- Not every problem needs optimization beyond constant time.
