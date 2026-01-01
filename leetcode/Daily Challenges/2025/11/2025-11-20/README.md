# 2025-11-20

## Instructions

You are given a 2D integer array intervals where intervals[i] = [starti, endi] represents all the integers from starti to endi inclusively.

A containing set is an array nums where each interval from intervals has at least two integers in nums.

For example, if intervals = [[1,3], [3,7], [8,9]], then [1,2,4,7,8,9] and [2,3,4,8,9] are containing sets.
Return the minimum possible size of a containing set.

```
Example 1:

Input: intervals = [[1,3],[3,7],[8,9]]
Output: 5
Explanation: let nums = [2, 3, 4, 8, 9].
It can be shown that there cannot be any containing array of size 4.
Example 2:

Input: intervals = [[1,3],[1,4],[2,5],[3,5]]
Output: 3
Explanation: let nums = [2, 3, 4].
It can be shown that there cannot be any containing array of size 2.
Example 3:

Input: intervals = [[1,2],[2,3],[2,4],[4,5]]
Output: 5
Explanation: let nums = [1, 2, 3, 4, 5].
It can be shown that there cannot be any containing array of size 4.
```

## My Thoughts

This problem looked completely confusing at first because my instinct was to think I needed to include every number inside each interval. Once I abandoned that idea, things actually started to make sense. The real goal isn’t to fill the intervals, it’s to make sure each interval has at least two points from the shared set I’m building.
The challenge is that intervals can overlap, and if they do, they can “share” points. If they don’t overlap, they need their own separate points. That part took a while to click. The greedy solution finally made things clearer: process intervals from left to right (sorted by their end), reuse points whenever possible, and when you can’t, add new points as far to the right as possible so future intervals can reuse them.
Once I saw the code stepping through actual intervals, it suddenly stopped feeling abstract. It really is just maintaining the two rightmost points and making sure every interval gets at least two.

## What I Learned

- The key insight is that overlapping intervals can share points, while non-overlapping intervals cannot, so every new disconnected "cluster" of intervals forces you to add more points.
- The greedy approach makes sense once you see it:
always pick points as far right as possible, because those points have the highest chance of satisfying future intervals.
- Sorting by end ascending (and by start descending for ties) is essential, it's what allows the greedy strategy to work.
- The problem is a variation of the “hit every interval” idea, but with a twist, you must hit every interval twice, which dramatically changes the strategy.
- Even though the explanation felt very abstract at first, walking through concrete intervals and the code step-by-step makes it much more intuitive.
