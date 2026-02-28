# 2026-02-28

## Instructions
Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.

```
Example 1:
Input: n = 1
Output: 1
Explanation: "1" in binary corresponds to the decimal value 1. 

Example 2:
Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27.

Example 3:
Input: n = 12
Output: 505379714
Explanation: The concatenation results in "1101110010111011110001001101010111100".
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.
``` 

Constraints:

1 <= n <= 105

## My Thoughts

The key observation is that appending the binary representation of `i` to the current result is the same as:

- Shift the existing value left by the number of bits in `i`
- Add `i`

So for each number:

- `bits = length of binary(i)`
- `result = (result * 2^bits + i) mod 1_000_000_007`

In PHP, I computed `bits` with `strlen(decbin($i))`, then used `1 << $bits` to represent `2^bits`.

That gives a straightforward loop from `1` to `n`:

- Find how many bits the current number needs
- Make room for those bits in the running result
- Append the number
- Apply modulo each step to keep values bounded

Time complexity is `O(n log n)` here because `decbin($i)` and `strlen(...)` depend on the bit length of each number.  
Space complexity is `O(1)` aside from temporary string conversion.

## What I Learned

- Concatenating binary values can be modeled numerically with `shift left + add`, not by building strings.
- The number of shift positions depends only on the bit length of the current integer.
- Applying modulo during each update keeps the running value safe and efficient.
