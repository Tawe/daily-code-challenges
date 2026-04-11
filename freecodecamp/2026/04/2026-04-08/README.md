# 2026-04-08
[2026-04-08 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-08)

## Instructions
FizzBuzz Validator

Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:
- Multiples of 3 are replaced with "Fizz".
- Multiples of 5 are replaced with "Buzz".
- Multiples of both 3 and 5 are replaced with "FizzBuzz".
- All other numbers remain as integers.

## My Thoughts

The useful trick here is to reconstruct where the sequence would have started.

If the array contains at least one actual number, then that number gives us an anchor:

- if `arr[j]` is a number, then the sequence start must be `arr[j] - j`

Once that start is known, we can generate the expected FizzBuzz value for every position and compare the whole array.

Your solution does that with:

- `fizzBuzzAt(n)` to generate the expected value at one number
- `matchesSlice(arr, start)` to validate the whole sequence from a candidate start

If the array contains no numeric entries at all, then the start is ambiguous, so the fallback is to try possible starting values until one matches.

Time complexity:

- fast path with a numeric anchor: `O(n)`
- fallback all-string path: larger brute-force search

Space complexity: `O(1)` extra space

## What I Learned

- Validation problems often become easier when you can recover one hidden parameter, here the starting number.
- A single concrete numeric value is enough to anchor the entire sequential pattern.
- Splitting the logic into “generate expected value” and “check the whole slice” makes the code easier to trust.
- When the input is underspecified, a fallback search can still be a reasonable practical strategy.
