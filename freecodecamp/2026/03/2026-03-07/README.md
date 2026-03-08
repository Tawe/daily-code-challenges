# 2026-03-07
[2026-03-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-07)

## Instructions
Element Size
Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

- The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.
- "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.
- "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.

## My Thoughts

This challenge is a direct unit-conversion problem from viewport percentages to pixel values.

The solution breaks it into three steps:

- parse the window string to get numeric width and height
- extract the numeric percentages from the `vw` and `vh` strings
- compute pixel sizes with `percent / 100 * window_dimension`

Since the result should be whole pixels, using `math.floor` makes the behavior explicit when the calculation is not an integer.

After computing both values, the function formats the output back into the required `"width x height"` string.

Time complexity is `O(1)` and space complexity is `O(1)`.

## What I Learned

- Problems with CSS-like units are often simple percent math once input parsing is handled.
- Converting formatted strings to numbers is the main part of this challenge.
- Being explicit about rounding (`floor`) avoids ambiguity in pixel conversion.
