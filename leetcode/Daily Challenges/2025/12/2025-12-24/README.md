# 2025-12-24

## Instructions


You are given an array apple of size n and an array capacity of size m.

There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

Note that, apples from the same pack can be distributed into different boxes.

```
Example 1:
Input: apple = [1,3,2], capacity = [4,3,1,5,2]
Output: 2
Explanation: We will use boxes with capacities 4 and 5.
It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.

Example 2:
Input: apple = [5,5,5], capacity = [2,4,2,7]
Output: 4
Explanation: We will need to use all the boxes.
 ```

Constraints:

1 <= n == apple.length <= 50
1 <= m == capacity.length <= 50
1 <= apple[i], capacity[i] <= 50
The input is generated such that it's possible to redistribute packs of apples into boxes.

## My Thoughts

This problem initially felt like it might require some kind of dynamic programming or careful distribution logic, especially because apples from the same pack can be split across boxes. But once I focused on what actually matters, it became much simpler.
Since apples are completely divisible across boxes, the only thing that matters is total capacity, not which apple pack goes where. That realization immediately ruled out a lot of unnecessary complexity. From there, it was clear that to minimize the number of boxes, I should always pick the largest boxes first.
I went with a greedy approach, summing the total number of apples and then subtracting capacities starting from the largest box until all apples were accounted for. The logic itself was straightforward once the problem was framed correctly.

## What I Learned

- When items are freely splittable, allocation problems often reduce to simple capacity comparisons.
- Greedy strategies work well when the goal is to minimize count and there are no penalties for splitting.
- Sorting in descending order is often the simplest way to implement a greedy “take the largest first” approach.
- It’s easy to accidentally add inefficiencies (like repeatedly calling shift()), even when the overall idea is correct.
- Focusing on what constraints don’t exist can be just as helpful as focusing on the ones that do.
