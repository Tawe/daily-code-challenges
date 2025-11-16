# 2025-11-16
[2025-11-16 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-16)
## Instructions
Rectangle Count
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

## My Thoughts

My first instinct was to loop through the width and height, counting how many possible segments each side could form. That worked, but it felt a bit mechanical, and I couldn’t shake the feeling that there had to be a simpler way. Once I stepped back, I realized that counting rectangles is really just counting how many ways you can choose horizontal spans and vertical spans.

The key insight was that choosing a width of a rectangle only depends on how many ways you can slide that width across the grid, and the same is true for height. These act independently, which means you can multiply the two counts instead of enumerating every rectangle. That turned the problem from a loop-based approach into a tiny math problem.

## What I Learned
- The number of possible widths in a W-wide grid is the sum W + (W-1) + ... + 1.
- The number of possible heights in an H-tall grid is the same pattern.
- That pattern is the triangular number formula:
1 + 2 + ... + n = n(n + 1) / 2
- Once you compute the horizontal choices and vertical choices,
multiply them to get the total number of rectangles.
- No loops are actually needed — the entire solution can be done in O(1) time and O(1) space.
- This is a great example of replacing iteration with a mathematical shortcut once you notice the underlying structure.
