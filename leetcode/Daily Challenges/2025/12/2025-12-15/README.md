# 2025-12-15

## Instructions

You are given an integer array prices representing the daily price history of a stock, where prices[i] is the stock price on the ith day.

A smooth descent period of a stock consists of one or more contiguous days such that the price on each day is lower than the price on the preceding day by exactly 1. The first day of the period is exempted from this rule.

Return the number of smooth descent periods.

```
Example 1:
Input: prices = [3,2,1,4]
Output: 7
Explanation: There are 7 smooth descent periods:
[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]
Note that a period with one day is a smooth descent period by the definition.

Example 2:
Input: prices = [8,6,7,7]
Output: 4
Explanation: There are 4 smooth descent periods: [8], [6], [7], and [7]
Note that [8,6] is not a smooth descent period as 8 - 6 ≠ 1.

Example 3:
Input: prices = [1]
Output: 1
Explanation: There is 1 smooth descent period: [1]
 ```

Constraints:

1 <= prices.length <= 105
1 <= prices[i] <= 105

## My Thoughts

At first, this problem felt like it might require checking every possible subarray, which would be far too slow given the constraints. The phrase “one or more contiguous days” immediately suggests a lot of combinations, and it’s easy to drift toward a brute-force mindset.
The key realization was that the rule is very strict: prices must decrease by exactly 1 each day. That restriction turns the problem from a general subarray problem into a run-counting problem. As soon as the difference between two days isn’t exactly one, the current smooth descent period is broken.
Once I reframed the problem in terms of tracking the length of the current descent run, everything simplified. Each day contributes as many valid periods as the length of the run ending on that day. Summing those contributions across the array gives the total count without ever enumerating subarrays explicitly.
What initially looked combinatorial ended up being a simple linear scan with a running counter.

## What I Learned

- Strict conditions often simplify problems.
Requiring a difference of exactly 1 removes most possible cases and creates clear “runs” in the data.
- Counting subarrays doesn’t always require nested loops.
Many subarray problems can be reduced to counting contributions per index.
- Run length is a powerful invariant.
Tracking the length of the current valid run lets you count all subarrays ending at each position in constant time.
- Single elements are often the base case.
Remembering that every individual day is a valid period helps anchor the logic.
- Think in terms of “what ends here.”
Asking “how many valid periods end at index i?” is often easier than asking “which periods exist overall.”
- Linear scans beat brute force every time.
With constraints up to 100,000, recognizing the O(n) path early is crucial.
