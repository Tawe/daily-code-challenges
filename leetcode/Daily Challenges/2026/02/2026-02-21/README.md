# 2026-02-21

## Instructions
Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1's present when written in binary.

For example, 21 written in binary is 10101, which has 3 set bits.
 
```
Example 1:
Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.

Example 2:
Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.
```

Constraints:

1 <= left <= right <= 106
0 <= right - left <= 104

## My Thoughts

I solved this by checking each number in the range independently:

- Convert `i` to binary (`decbin($i)`)
- Count set bits with `substr_count(..., '1')`
- Check whether that count is prime
- If prime, add to the answer

Even though this is a brute-force pass over `[left, right]`, it is efficient enough because:

- The range length is at most `10^4`
- The set-bit count for values up to `10^6` is very small (at most about 20), so primality testing is cheap

So a straightforward loop gives a clean and reliable solution.

## What I Learned

- Sometimes the expensive-looking part of a problem is actually tiny after transformation (here: prime-checking set-bit counts, not the full numbers).
- `substr_count(decbin($i), '1')` is a simple PHP pattern for counting set bits.
- A direct implementation can be the best choice when constraints are modest and code clarity is high.
