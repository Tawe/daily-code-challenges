# 2026-02-14
[2026-02-14 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-14)

## Instructions
2026 Winter Games Day 9: Skeleton
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

- The given string will only consist of the letters:
    - "L" for a left turn
    - "R" for a right turn
    - "S" for a straight segment
- Each direction change adds 15 points (an "L" followed by an "R" or vice versa).
- All other curves add 5 points each (all other "L" or "R" characters).
- Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

- "Easy" if the total is 0 - 100
- "Medium" if the total is 101-200
- "Hard" if the total is over 200

## My Thoughts

This is a direct linear scan problem. Each character contributes a fixed amount based on itself and, for turns, the next character. I loop once through the track, add `15` only when a turn flips direction (`L->R` or `R->L`), add `5` for all other `L`/`R`, and ignore `S`.

After summing the score, I map it to the requested label range (`Easy`, `Medium`, `Hard`). This keeps the solution simple and runs in `O(n)` time with `O(1)` extra space.

## What I Learned

- When scoring depends on adjacent characters, a one-pass look-ahead (`i + 1`) is usually enough.
- Consolidating similar branches (`L` and `R`) reduces duplication without changing behavior.
- Breaking the problem into two stages helps clarity: compute score first, then classify difficulty.
- For fixed-rule string scans, linear time and constant space is the natural optimal approach.
