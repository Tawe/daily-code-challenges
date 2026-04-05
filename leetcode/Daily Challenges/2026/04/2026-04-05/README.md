# 2026-04-05

## Instructions

There is a robot starting at the position `(0, 0)`, the origin, on a 2D plane. Given a sequence of its moves, judge if this robot **ends up at** `(0, 0)` after it completes its moves.

You are given a string `moves` that represents the move sequence of the robot where `moves[i]` represents its `ith` move. Valid moves are `'R'` (right), `'L'` (left), `'U'` (up), and `'D'` (down).

Return `true` _if the robot returns to the origin after it finishes all of its moves, or_ `false` _otherwise_.

**Note**: The way that the robot is "facing" is irrelevant. `'R'` will always make the robot move to the right once, `'L'` will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

**Example 1:**
**Input:** moves = "UD"
**Output:** true
**Explanation**: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

**Example 2:**
**Input:** moves = "LL"
**Output:** false
**Explanation**: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

**Constraints:**
- `1 <= moves.length <= 2 * 104`
- `moves` only contains the characters `'U'`, `'D'`, `'L'` and `'R'`.

## My Thoughts

This is a direct position-tracking problem.

The cleanest approach is to simulate the robot’s movement with coordinates:

- `x` tracks left/right movement
- `y` tracks up/down movement

For each character:

- `'U'` increases `y`
- `'D'` decreases `y`
- `'L'` decreases `x`
- `'R'` increases `x`

After processing all moves, the robot returns to the origin if and only if:

- `x == 0`
- `y == 0`

That makes the solution a simple one-pass scan.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- Movement-string problems often reduce to tracking a small fixed set of counters.
- The robot’s facing direction does not matter here, only net displacement does.
- Returning to the origin means horizontal and vertical movement must both cancel out.
- For small direction alphabets, a `match`/switch statement keeps the simulation clear and compact.
