# 2025-11-13
[2025-11-13 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-13)

## Instructions

Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.
A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

## My Thoughts

The breakthrough was understanding that the shift value has to be normalized so it fits inside the size of the array. Once I understood that shifts repeat every length steps, it clicked. The slicing became easy again once I had a correct k value between 0 and len - 1. So overall, the real problem wasn’t rotation, it was converting the input shift into a valid one.

## What I Learned

- Rotating an array always requires **O(n)** time because every element must be moved at least once.
- The tricky part is handling weird shift values: - **Negative shifts** (right rotation) - **Very large shifts** - **Shifts equal to the array length**
- Any shift can be “wrapped” into a valid range using modulo: - `k = n % len` - If `k` is negative, make it positive by adding `len`.
- Once `k` is normalized, rotation becomes a simple and reliable pattern: - Take everything from `k` to the end. - Then take everything from `0` to `k`.
