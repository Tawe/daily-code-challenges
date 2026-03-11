# 2026-03-10
[2026-03-10 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-10)

## Instructions
Array Insertion

Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

## My Thoughts

This is a clean fit for Python list slicing.

To insert at position `index`, split the array into:

- everything before `index`
- the new value as a single-item list
- everything from `index` onward

Then concatenate those parts:

- `arr[:index] + [value] + arr[index:]`

This naturally returns a new array and keeps the original unchanged.

Time complexity: `O(n)`  
Space complexity: `O(n)` for the returned array.

## What I Learned

- Slicing makes positional insert operations concise and readable.
- Wrapping the inserted value as `[value]` allows direct list concatenation.
- For “return a new array” requirements, slice + concat is often clearer than mutating in place.
