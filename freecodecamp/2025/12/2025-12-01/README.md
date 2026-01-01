# 2025-12-01
[2025-12-01 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-01)

## Instructions

Given a distance in miles as a number, return the equivalent distance in kilometers.
- The input will always be a non-negative number.
- 1 mile equals 1.60934 kilometers.
- Round the result to two decimal places.

## My Thoughts

This challenge seemed extremely simple at first—just convert miles to kilometers—but it reminded me how easy it is to misread or gloss over details. I initially used a rounded conversion value (1.61) and added extra conditional logic that wasn't needed. When I revisited the instructions more carefully, I realized the conversion constant needed to be exact and the rounding rule applied consistently, not conditionally. It was a good reminder that even straightforward problems depend on precision. The simplest version of the solution ended up being the correct one: multiply by the exact constant and round to two decimals.

## What I Learned

- Always use the exact conversion factor when a problem provides one—small rounding differences matter.
- toFixed(2) returns a string, so wrapping it with Number() produces a true numeric result.
- The rounding rule applies universally - all outputs must be rounded to two decimal places, even values under 1.
- Sometimes the optimal solution is the simplest one: compute, round, return.
