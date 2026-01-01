# 2025-12-01

## Instructions

You have n computers. You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. You are interested in running all n computers simultaneously using the given batteries.

Initially, you can insert at most one battery into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.

Note that the batteries cannot be recharged.

Return the maximum number of minutes you can run all the n computers simultaneously.

```
Example 1:
Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation:
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4.

Example 2:
Input: n = 2, batteries = [1,1,1,1]
Output: 2
Explanation:
Initially, insert battery 0 into the first computer and battery 2 into the second computer.
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer.
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2.
 ```

Constraints:

1 <= n <= batteries.length <= 105
1 <= batteries[i] <= 109

## My Thoughts

This problem looked deceptively simple at first. My initial instinct was to add up all the battery minutes and divide by the number of computers, assuming the average would represent the maximum possible run time. It felt intuitive, after all, if the total pool of minutes is fixed, shouldn’t the average define the limit?
But the examples made it obvious that this logic breaks down. The real issue is that batteries can’t be sliced. Even though I can swap them instantly at any time, each computer still draws power from one battery at a time, and small batteries act as bottlenecks. A single huge battery doesn’t guarantee long runtime for all machines, every computer needs a steady supply of power, and small batteries can’t be stretched beyond their capacity.
That forced me to rethink the problem not as a simple math division, but as a feasibility question: Given a target time, can all computers stay powered for that long? That shift in perspective is what made the solution click. It stopped being about “calculate the answer” and became “test the answer.” Once I saw that, binary search and the min(battery, t) trick made perfect sense.

## What I Learned

- The average battery minutes (sum / n) only gives a theoretical upper bound not the actual answer.
- The constraint of one battery per computer at any moment introduces a non-linear limitation.
- Binary search is a powerful tool when:
    - The answer lies in a numeric range.
    - Feasibility can be checked efficiently.
- The feasibility condition
```js
sum(min(battery[i], t)) >= n * t
``
is the heart of the solution: it ensures that each computer can be “fed” enough minutes from the battery pool without violating constraints.
- Problems that allow unlimited swapping often turn into resource-pooling or load-distribution problems rather than scheduling problems.
- Sometimes the cleanest way to solve a problem is to invert it:
    - Instead of “what’s the maximum time?”, ask “Can we run for T minutes?” and search for the boundary.
