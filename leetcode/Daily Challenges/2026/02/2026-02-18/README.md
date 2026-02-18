# 2026-02-18

## Instructions
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
```
Example 1:
Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101

Example 2:
Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.

Example 3:
Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.
``` 

Constraints:

1 <= n <= 231 - 1

## My Thoughts

I used a direct string-based approach:

- convert the number to binary with `decbin($n)`
- scan left to right through adjacent characters
- if any two neighbors are the same, return `false` immediately
- if the loop finishes, return `true`

This felt like the clearest way to express the rule "every adjacent bit must be different."  
Time is linear in the number of bits, and space is the binary string.

## What I Learned

- Converting to binary can make bit-pattern problems easier to reason about than raw bitwise operations.
- Early return on first violation keeps the loop efficient and simple.
- In PHP, binary digits as string chars can be compared directly (`$binary[$i] === $binary[$i + 1]`) for clean adjacency checks.
