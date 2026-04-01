# 2026-04-01

## Instructions
There are `n` **1-indexed** robots, each having a position on a line, health, and movement direction.

You are given **0-indexed** integer arrays `positions`, `healths`, and a string `directions` (`directions[i]` is either **'L'** for **left** or **'R'** for **right**). All integers in `positions` are **unique**.

All robots start moving on the line **simultaneously** at the **same speed** in their given directions. If two robots ever share the same position while moving, they will **collide**.

If two robots collide, the robot with **lower health** is **removed** from the line, and the health of the other robot **decreases** **by one**. The surviving robot continues in the **same** direction it was going. If both robots have the **same** health, they are both removed from the line.

Your task is to determine the **health** of the robots that survive the collisions, in the same **order** that the robots were given, i.e. final health of robot 1 (if survived), final health of robot 2 (if survived), and so on. If there are no survivors, return an empty array.

Return _an array containing the health of the remaining robots (in the order they were given in the input), after no further collisions can occur._

**Note:** The positions may be unsorted.

**Example 1:**
![](https://assets.leetcode.com/uploads/2023/05/15/image-20230516011718-12.png)
**Input:** positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"
**Output:** [2,17,9,15,10]
**Explanation:** No collision occurs in this example, since all robots are moving in the same direction. So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].

**Example 2:**
![](https://assets.leetcode.com/uploads/2023/05/15/image-20230516004433-7.png)
**Input:** positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"
**Output:** [14]
**Explanation:** There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4's health is smaller, it gets removed, and robot 3's health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].

**Example 3:**
![](https://assets.leetcode.com/uploads/2023/05/15/image-20230516005114-9.png)
**Input:** positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL"
**Output:** []
**Explanation:** Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].

**Constraints:**

- `1 <= positions.length == healths.length == directions.length == n <= 105`
- `1 <= positions[i], healths[i] <= 109`
- `directions[i] == 'L'` or `directions[i] == 'R'`
- All values in `positions` are distinct

## My Thoughts

The clean way to handle collisions is to process robots in position order, not input order.

Why:

- collisions only matter between robots that become neighbors on the line
- after sorting by position, the only dangerous case is a right-moving robot meeting a later left-moving robot

That leads to a stack approach:

- sort robot indices by `positions[i]`
- push right-moving robots onto a stack
- when a left-moving robot appears, resolve collisions against the stack top

Collision rules:

- if right robot has more health, it survives and loses `1`
- if left robot has more health, right robot is removed and left loses `1`
- if equal, both are removed

The left-moving robot may need to fight multiple stacked right-movers, so the collision step runs in a loop until it dies or no right-movers remain.

At the end, filter surviving healths in original input order.

Time complexity: `O(n log n)` because of sorting  
Space complexity: `O(n)`

## What I Learned

- For line-collision problems, sorting by position often turns continuous motion into a discrete stack process.
- Only `R ... L` pairs can collide, which makes a stack of right-movers a natural structure.
- Simulating health reductions in place avoids building extra robot state objects.
- Even when processed in sorted order, the final answer can still be recovered in original order by updating the original health array.
