# 2025-12-10

## Instructions

You are given an array complexity of length n.

There are n locked computers in a room with labels from 0 to n - 1, each with its own unique password. The password of the computer i has a complexity complexity[i].

The password for the computer labeled 0 is already decrypted and serves as the root. All other computers must be unlocked using it or another previously unlocked computer, following this information:

You can decrypt the password for the computer i using the password for computer j, where j is any integer less than i with a lower complexity. (i.e. j < i and complexity[j] < complexity[i])
To decrypt the password for computer i, you must have already unlocked a computer j such that j < i and complexity[j] < complexity[i].
Find the number of permutations of [0, 1, 2, ..., (n - 1)] that represent a valid order in which the computers can be unlocked, starting from computer 0 as the only initially unlocked one.

Since the answer may be large, return it modulo 109 + 7.

Note that the password for the computer with label 0 is decrypted, and not the computer with the first position in the permutation.

```
Example 1:
Input: complexity = [1,2,3]
Output: 2
Explanation:
The valid permutations are:
[0, 1, 2]
Unlock computer 0 first with root password.
Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].
Unlock computer 2 with password of computer 1 since complexity[1] < complexity[2].
[0, 2, 1]
Unlock computer 0 first with root password.
Unlock computer 2 with password of computer 0 since complexity[0] < complexity[2].
Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].

Example 2:
Input: complexity = [3,3,3,4,4,4]
Output: 0
Explanation:
There are no possible permutations which can unlock all computers.
```

Constraints:

2 <= complexity.length <= 105
1 <= complexity[i] <= 109

## My Thoughts

This problem completely scrambled my brain at first because I kept overthinking what “unlocking” meant. I treated it like a chain where each computer had to unlock the next one, but that’s not how the rule works. The real unlock condition is much simpler:
A computer can be unlocked if any earlier computer with strictly smaller complexity has already been unlocked.
Once that clicked, the whole puzzle collapsed into something much cleaner.
The key insight is that computer 0 is always unlocked first, and it acts like the universal starter key. If any computer has a complexity less than or equal to computer 0, there’s no way to unlock it, because nothing earlier can satisfy the “smaller complexity” rule. That creates an immediate dead end and the answer is 0.
But if all other computers have strictly larger complexity, then computer 0 can unlock all of them — no matter what order they appear in. That means the problem isn’t about complicated dependency chains at all; it’s simply:
Check if any machine is impossible to unlock.
If not, count all permutations of the remaining computers.
In other words, once the validity condition is satisfied, the answer is just (n − 1)!, which is surprisingly elegant.
This was a good reminder that sometimes a problem looks like a heavy graph or DP scenario, but the real solution is a single critical observation about constraints.

## What I Learned

- The unlock rule depends only on complexity, not ordering. A computer doesn't need “its parent”, it needs any earlier unlocked computer with smaller complexity.
- Computer 0 completely determines feasibility.
If complexity[i] <= complexity[0] for any i > 0, that machine can never unlock → instantly 0 permutations.
- Once feasibility is guaranteed, all permutations are valid.
This collapses the problem into counting permutations of 1..n−1, which is just (n − 1)!.
- Don’t overengineer, look for the structural bottleneck.
It’s easy to imagine graphs, DP, or dependency trees here, but the true blocker is only the smallest-complexity node.
- Modulo factorials appear in problems where order doesn’t matter once constraints are met.
This pattern shows up often in combinatorial unlocking/activation problems.
- Re-reading constraints often saves you from building unnecessary complexity.
The rule “any j < i with smaller complexity” is deceptively powerful.
