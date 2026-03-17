# 2026-03-17
[2026-03-17 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-17)

## Instructions
Anniversary Milestones

Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

|Years Married|Milestone|
|---|---|
|1|`"Paper"`|
|5|`"Wood"`|
|10|`"Tin"`|
|25|`"Silver"`|
|40|`"Ruby"`|
|50|`"Gold"`|
|60|`"Diamond"`|
|70|`"Platinum"`|

- If they haven't reached the first milestone, return `"Newlyweds"`.

## My Thoughts

This is a threshold-mapping problem: each milestone applies once the year count reaches its boundary.

The simplest approach is an ordered chain of comparisons:

- check from smallest threshold upward
- return the milestone for the highest reached range
- handle the below-minimum case (`years < 1`) as `"Newlyweds"`

Your implementation does this with `if/elif`, which is explicit and easy to verify against the chart.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Milestone tables are naturally implemented as ordered boundary checks.
- Defining clear half-open ranges (`< next_threshold`) prevents overlap bugs.
- For a small fixed set of rules, an `if/elif` chain is often the clearest solution.
- Explicitly handling the pre-milestone case keeps edge behavior unambiguous.
