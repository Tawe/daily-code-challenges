# 2025-11-25
[2025-11-25 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-25)

## Instructions

Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

- 3 with "Fizz".
- 5 with "Buzz".
- 3 and 5 with "FizzBuzz".


## My Thoughts
FizzBuzz is one of those classic problems that looks trivial, but it still forces you to pay attention to the order of your conditions. My first instinct was just to check each rule individually, but I quickly realized that the case for numbers divisible by both 3 and 5 needs to come first, or the code will match one of the smaller conditions before reaching the combined one. Once I put the combined check at the top, everything else became straightforward.

## What I Learned
I learned that even in a simple problem, logical ordering matters. Handling the most specific case first, divisible by 3 and 5, prevents incorrect matches and makes the code easier to reason about. I also reinforced the habit of writing clean, readable loops and using modulo effectively to check divisibility. Even though FizzBuzz is used as a beginner problem, it’s a good reminder that clear structure and correct condition flow are essential for predictable logic.