# 2026-05-12

## Instructions
You are given an array `tasks` where `tasks[i] = [actuali, minimumi]`:

- `actuali` is the actual amount of energy you **spend to finish** the `ith` task.
- `minimumi` is the minimum amount of energy you **require to begin** the `ith` task.

For example, if the task is `[10, 12]` and your current energy is `11`, you cannot start this task. However, if your current energy is `13`, you can complete this task, and your energy will be `3` after finishing it.

You can finish the tasks in **any order** you like.

Return _the **minimum** initial amount of energy you will need_ _to finish all the tasks_.

**Example 1:**

**Input:** tasks = [[1,2],[2,4],[4,8]]
**Output:** 8
**Explanation:**
Starting with 8 energy, we finish the tasks in the following order:
    - 3rd task. Now energy = 8 - 4 = 4.
    - 2nd task. Now energy = 4 - 2 = 2.
    - 1st task. Now energy = 2 - 1 = 1.
Notice that even though we have leftover energy, starting with 7 energy does not work because we cannot do the 3rd task.

**Example 2:**

**Input:** tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]
**Output:** 32
**Explanation:**
Starting with 32 energy, we finish the tasks in the following order:
    - 1st task. Now energy = 32 - 1 = 31.
    - 2nd task. Now energy = 31 - 2 = 29.
    - 3rd task. Now energy = 29 - 10 = 19.
    - 4th task. Now energy = 19 - 10 = 9.
    - 5th task. Now energy = 9 - 8 = 1.

**Example 3:**

**Input:** tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]
**Output:** 27
**Explanation:**
Starting with 27 energy, we finish the tasks in the following order:
    - 5th task. Now energy = 27 - 5 = 22.
    - 2nd task. Now energy = 22 - 2 = 20.
    - 3rd task. Now energy = 20 - 3 = 17.
    - 1st task. Now energy = 17 - 1 = 16.
    - 4th task. Now energy = 16 - 4 = 12.
    - 6th task. Now energy = 12 - 6 = 6.

**Constraints:**

- `1 <= tasks.length <= 105`
- `1 <= actual​i <= minimumi <= 104`

## Solution

This problem is best handled with a greedy ordering.

Each task is `[actual, minimum]`:

- you need at least `minimum` energy to start it
- after finishing it, you lose `actual` energy

The key question is: which tasks should be done earlier so they force the smallest possible initial energy?

### Key idea

Sort tasks by descending:

- `minimum - actual`

This value measures how "demanding" a task is before you get to pay its actual cost.
Tasks with a larger gap should be done earlier, because they require more buffer energy up front.

After sorting, scan from left to right:

- `prefix_actual` = total actual energy spent on all earlier tasks
- for the current task, we need starting energy large enough so that after spending `prefix_actual`, we still have at least `minimum`

So the starting energy must satisfy:

- `start >= minimum + prefix_actual`

Take the maximum of that expression over all tasks in the sorted order.

### Why this works

If two tasks are out of order, putting the one with the larger `minimum - actual` first never makes things worse and can make the required initial energy smaller.

That exchange argument leads to the greedy ordering:

- larger `(minimum - actual)` first

Once the order is fixed, the rest is straightforward:

- keep track of how much energy earlier tasks have already consumed
- ensure the initial energy is large enough for every task when it is reached

The largest such requirement is the minimum valid answer.

### Complexity

- Time: `O(n log n)` for sorting
- Space: `O(n)` if counting the sorted copy

This fits comfortably within the constraints.
