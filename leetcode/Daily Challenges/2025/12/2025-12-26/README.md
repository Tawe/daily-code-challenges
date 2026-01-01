# 2025-12-26

## Instructions


You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

if the ith character is 'Y', it means that customers come at the ith hour
whereas 'N' indicates that no customers come at the ith hour.
If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

For every hour when the shop is open and no customers come, the penalty increases by 1.
For every hour when the shop is closed and customers come, the penalty increases by 1.
Return the earliest hour at which the shop must be closed to incur a minimum penalty.

Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

```
Example 1:

Input: customers = "YYNY"
Output: 2
Explanation:
- Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
- Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
- Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
- Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
- Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.

Example 2:
Input: customers = "NNNNN"
Output: 0
Explanation: It is best to close the shop at the 0th hour as no customers arrive.

Example 3:
Input: customers = "YYYY"
Output: 4
Explanation: It is best to close the shop at the 4th hour as customers arrive at each hour.
 ```

Constraints:

1 <= customers.length <= 105
customers consists only of characters 'Y' and 'N'.

## My Thoughts

At first, this problem looked like it required recalculating penalties for every possible closing hour, which would be inefficient given the input size. The wording made it easy to think in terms of “simulate each closing time,” but that would lead to an O(n^2) approach.
The key insight was realizing that moving the closing time forward by one hour only changes the penalty by a small, predictable amount. Each hour contributes differently depending on whether the shop is open or closed, and that contribution flips exactly once as the closing time passes that hour.
By starting with the penalty for closing at hour 0 and updating it incrementally, I could track the minimum penalty in a single pass. Keeping the earliest hour when penalties tie was a small but important detail.

## What I Learned

- Many optimization problems can be solved by tracking deltas instead of totals.
- Reframing a problem as a running score often removes the need for nested loops.
- Off-by-one details matter when boundaries are inclusive or exclusive.
- Ties should be handled deliberately, especially when the problem asks for the earliest or smallest index.
- Even problems that look simulation-heavy often hide a clean linear solution.
