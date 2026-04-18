# 2026-04-18

## Instructions
You are given an integer `n`.

Define its **mirror distance** as: `abs(n - reverse(n))`​​​​​​​ where `reverse(n)` is the integer formed by reversing the digits of `n`.

Return an integer denoting the mirror distance of `n`​​​​​​​.

`abs(x)` denotes the absolute value of `x`.

**Example 1:**
**Input:** n = 25
**Output:** 27
**Explanation:**
- `reverse(25) = 52`.
- Thus, the answer is `abs(25 - 52) = 27`.

**Example 2:**
**Input:** n = 10
**Output:** 9
**Explanation:**
- `reverse(10) = 01` which is 1.
- Thus, the answer is `abs(10 - 1) = 9`.

**Example 3:**
**Input:** n = 7
**Output:** 0
**Explanation:**
- `reverse(7) = 7`.
- Thus, the answer is `abs(7 - 7) = 0`.

**Constraints:**
- `1 <= n <= 109`

## My Thoughts

This one is very direct. The whole problem is just: reverse the digits of `n`, convert that reversed value back into an integer, and return the absolute difference.

The Rust solution uses a string-based approach:

- convert `n` into a string
- reverse the characters
- parse the reversed string back into an integer
- return `(n - reverse_num).abs()`

Since leading zeros are naturally dropped when the reversed string is parsed as an integer, cases like `10 -> 01 -> 1` work without any extra handling.

### Complexity

- Time: `O(d)`, where `d` is the number of digits in `n`
- Space: `O(d)`

## What I Learned

This challenge was a good reminder that the simplest implementation is often enough when the input is tiny and the transformation is small. Reversing digits with strings is perfectly reasonable here.

It also reinforced how useful parsing can be for handling leading zeros automatically. Once the reversed characters become an integer again, the mirror-distance calculation is just one absolute-value operation.
