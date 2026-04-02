# 2026-04-01
[2026-04-01 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-01)

## Instructions
Prank Number

Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:

- The numbers increase from one to the next by a fixed amount (addition).
- The numbers decrease from one to the next by a fixed amount (subtraction).

For example, given `[2, 4, 7, 8, 10]` return `[2, 4, 6, 8, 10]`.

## My Thoughts

The core idea is that the real pattern is the most common difference between adjacent numbers.

The solution works in three steps:

- compute all adjacent differences
- find the difference value that appears most often
- try fixing each position so the array follows that common difference

Once the expected step `d` is known, validating a candidate array is easy:

- every adjacent pair must differ by exactly `d`

Your implementation tries each index as the possible bad value, adjusts it to fit the progression, and returns the first fully valid corrected array.

Time complexity: `O(n^2)` in the worst case  
Space complexity: `O(n)`

## What I Learned

- In “one value is wrong” sequence problems, the correct rule usually shows up as the majority pattern.
- Looking at differences is often more useful than looking at raw values for arithmetic progressions.
- A small validation helper can simplify trial-fix approaches.
- Brute-forcing the single broken index is practical when the array is small and the repair rule is simple.
