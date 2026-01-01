# 2025-12-18
[2025-12-18 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-18)

## Instructions

Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.
- The characters should alternate like a checkerboard.
- The top-left cell must always be "X".
For example, given [3, 3], return:
```js
[
["X", "O", "X"],
["O", "X", "O"],
["X", "O", "X"]
]
```

## My Thoughts

At first glance, this problem looked very straightforward: just alternate "X" and "O" across rows and columns. My initial instinct was to alternate based only on the column index, since that naturally produces "X", "O", "X", "O" across a single row. However, thinking through a second row exposed the flaw in that approach. A checkerboard pattern doesn’t just alternate horizontally — it also alternates vertically. That means the starting value of each row depends on whether the row index is even or odd. Once I reframed the problem as “every cell depends on both its row and column position,” the solution became much clearer. The sum of the row and column indices naturally captures that relationship.

## What I Learned

- A checkerboard pattern depends on both dimensions, not just one.
- Using (rowIndex + columnIndex) % 2 is a clean and reliable way to alternate values across a grid.
- Even when a solution has optimal time complexity, it can still be logically incorrect if it doesn’t fully model the problem.
- Small test cases (like multiple rows) are invaluable for catching mistakes early.
- Writing the simplest correct condition often leads to clearer and more maintainable code than chaining multiple if statements.
