# 2026-02-27
[2026-02-27 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-27)

## Instructions
Matrix Shift
Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

- A positive shift moves values to the right.
- A negative shift moves values to the left.

Values should wrap:

- Treat the matrix as one continuous sequence of values.
- When a value moves past the end of a row, it continues at the beginning of the next row.
- When a value moves past the last position in the matrix, it wraps to the first position.
- The same applies in reverse when shifting left.

For example, given:
```
[
  [1, 2, 3],
  [4, 5, 6]
]
```
with a shift of 1, move all the numbers to the right one:
```
[
  [6, 1, 2],
  [3, 4, 5]
]
```

## My Thoughts

The cleanest way to solve this is to treat the matrix like a single flattened array of length `rows * cols`.

For each value at `(r, c)`:

- Convert it to a flat index: `idx = r * cols + c`
- Shift that index by `k`
- Wrap with modulo so it stays in range
- Convert back to `(newRow, newCol)`

I also normalize the shift first:

- `k = shift % total`
- If `k` is negative, add `total` so it becomes an equivalent right shift

That handles both positive and negative shifts in one consistent path.

Time complexity is `O(rows * cols)` because each element is moved once.  
Space complexity is `O(rows * cols)` for the output matrix.

## What I Learned

- Converting 2D coordinates to a 1D index is a powerful trick for rotation/shift problems.
- Normalizing negative shifts with modulo avoids separate left/right logic.
- Rebuilding coordinates from a shifted flat index keeps the implementation simple and reliable.
