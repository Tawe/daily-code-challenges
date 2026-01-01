# 2025-12-14

## Instructions

Along a long library corridor, there is a line of seats and decorative plants. You are given a 0-indexed string corridor of length n consisting of letters 'S' and 'P' where each 'S' represents a seat and each 'P' represents a plant.

One room divider has already been installed to the left of index 0, and another to the right of index n - 1. Additional room dividers can be installed. For each position between indices i - 1 and i (1 <= i <= n - 1), at most one divider can be installed.

Divide the corridor into non-overlapping sections, where each section has exactly two seats with any number of plants. There may be multiple ways to perform the division. Two ways are different if there is a position with a room divider installed in the first way but not in the second way.

Return the number of ways to divide the corridor. Since the answer may be very large, return it modulo 109 + 7. If there is no way, return 0.

```
Example 1:
Input: corridor = "SSPPSPS"
Output: 3
Explanation: There are 3 different ways to divide the corridor.
The black bars in the above image indicate the two room dividers already installed.
Note that in each of the ways, each section has exactly two seats.

Example 2:
Input: corridor = "PPSPSP"
Output: 1
Explanation: There is only 1 way to divide the corridor, by not installing any additional dividers.
Installing any would create some section that does not have exactly two seats.

Example 3:
Input: corridor = "S"
Output: 0
Explanation: There is no way to divide the corridor because there will always be a section that does not have exactly two seats.
 ```
Constraints:

n == corridor.length
1 <= n <= 105
corridor[i] is either 'S' or 'P'.

## My Thoughts

This problem looks intimidating at first because it’s framed as a placement and partitioning problem, which usually suggests backtracking or dynamic programming. My initial instinct was to think in terms of “where can I put dividers,” but that quickly felt messy and combinatorial.
The breakthrough came when I stopped thinking about dividers and started thinking about seats. Every valid section must contain exactly two seats, no more and no less. That immediately forces the seats into fixed pairs: seat 1–2, 3–4, 5–6, and so on. Once that pairing is fixed, the only remaining freedom is where the divider goes between one pair and the next.
That reframing collapsed the problem. Instead of choosing divider placements, I just needed to count how many plants exist between the end of one seat-pair and the start of the next. Each plant gap gives multiple valid divider positions, and those choices multiply together.
What looked like a complex arrangement problem turned out to be a simple counting problem once the invariant (“two seats per section”) was respected.

## What I Learned

- Hard constraints often force structure.
Requiring exactly two seats per section removes most of the ambiguity and locks the seats into fixed pairs.
- Counting gaps is often easier than placing dividers.
Instead of deciding where dividers go, count how many places they could go.
- Multiplicative choices appear naturally in partition problems.
Independent choices between sections multiply together, a classic combinatorics pattern.
- Edge cases define feasibility early.
Zero seats or an odd number of seats instantly makes the problem impossible.
- Linear scans beat combinatorics.
Once reframed, the entire solution works in a single pass with constant extra space.
- Reframing is the real skill.
The solution wasn’t about clever code, it was about recognizing that seat pairing is inevitable.
