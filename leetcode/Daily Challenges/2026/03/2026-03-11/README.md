# 2026-03-11

## Instructions
The **complement** of an integer is the integer you get when you flip all the `0`'s to `1`'s and all the `1`'s to `0`'s in its binary representation.

- For example, The integer `5` is `"101"` in binary and its **complement** is `"010"` which is the integer `2`.

Given an integer `n`, return _its complement_.

**Example 1:**

**Input:** n = 5
**Output:** 2
**Explanation:** 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

**Example 2:**

**Input:** n = 7
**Output:** 0
**Explanation:** 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

**Example 3:**

**Input:** n = 10
**Output:** 5
**Explanation:** 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

**Constraints:**

- `0 <= n < 10^9`

## My Thoughts

The key detail is that we only flip bits inside `n`'s actual binary length.

If we flipped all 32 or 64 bits directly, we'd include leading zeros that are not part of the representation.  
So the clean approach is:

- compute the bit length of `n`
- build a mask of that length: all `1`s (for example, `1111` for 4 bits)
- XOR `n` with the mask to flip only those relevant bits

Formula:

- `complement = n ^ ((1 << bitLength) - 1)`

Special case:

- when `n == 0`, the complement should be `1`

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Bit-complement problems usually need a bounded mask, not a full machine-word inversion.
- `(1 << k) - 1` is a standard way to create a `k`-bit all-ones mask.
- XOR with an all-ones mask over the active bit range is a clean bit-flip operation.
- Edge case `n = 0` must be handled directly because its binary representation length is conceptually one bit (`"0"`).
