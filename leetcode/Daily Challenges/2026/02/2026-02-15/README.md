# 2026-02-15

## Instructions
Given two binary strings a and b, return their sum as a binary string.

```
Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
```

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

## My Thoughts

This is just binary addition from right to left with carry, like manual addition. Reversing both strings makes index handling straightforward, then each step adds:

- current bit from `a` (or `0` if out of range)
- current bit from `b` (or `0` if out of range)
- current `carry`

I append `sum % 2` to the result and update carry with `sum > 1`. After the loop, prepend a final `1` if carry remains, then reverse once to restore normal bit order.

## What I Learned

- Converting a "right-to-left" string problem by reversing first can simplify boundary logic a lot.
- For binary math, `% 2` for the bit and `> 1` for carry makes the transition very clean.
- Padding with virtual zeroes (instead of physically padding strings) keeps the solution simple and efficient.
