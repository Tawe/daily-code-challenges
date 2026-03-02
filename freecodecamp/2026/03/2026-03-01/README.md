# 2026-03-01
[2026-03-01 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-01)

## Instructions
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.

## My Thoughts

This one is simple once the definition of "flat" is clear.

A flat array means:

- none of its top-level elements are themselves arrays

So the solution only needs to loop through the input once and check each item.

If any item is a list, the array is not flat, so we can return `False` immediately.
If the loop finishes without finding one, then every element is a non-list value and the array is flat.

That makes the Python solution very direct:

- iterate through `arr`
- use `isinstance(item, list)` to detect nested arrays
- return early when a nested list is found

The nice part here is the early return. As soon as we know the array is not flat, there is no reason to keep checking the rest of the elements.

Time complexity is `O(n)` and space complexity is `O(1)`.

## What I Learned

- Problems with a short prompt often come down to translating the definition carefully.
- A flat-array check only needs to inspect the top level, not recurse through deeper nesting.
- Early returns keep simple validation code both efficient and easy to read.
