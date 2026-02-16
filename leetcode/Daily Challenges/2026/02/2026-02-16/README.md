# 2026-02-16

## Instructions
Reverse bits of a given 32 bits signed integer.
```
Example 1:
Input: n = 43261596
Output: 964176192
Explanation:
Integer	Binary
43261596	00000010100101000001111010011100
964176192	00111001011110000010100101000000

Example 2:
Input: n = 2147483644
Output: 1073741822
Explanation:
Integer	Binary
2147483644	01111111111111111111111111111100
1073741822	00111111111111111111111111111110
 ```

Constraints:

0 <= n <= 231 - 2
n is even.

## My Thoughts

This one is a direct bit-manipulation loop over all 32 positions. I build the reversed value one bit at a time:

- shift `result` left to make room
- copy the current least-significant bit from `n` using `($n & 1)`
- shift `n` right to process the next bit

Running the loop exactly 32 times guarantees leading zero bits are also reversed correctly, which is important for this problem.

## What I Learned

- Building a bit-reversed number incrementally with `result = (result << 1) | (n & 1)` is clean and easy to reason about.
- Fixed-width bit problems should use a fixed loop count (`32` here) instead of stopping early.
- Using masks like `& 1` is a reliable way to isolate one bit without converting to strings.
