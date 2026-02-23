# 2026-02-23

## Instructions
Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

```
Example 1:
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.

Example 2:
Input: s = "0110", k = 1
Output: true
Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 

Example 3:
Input: s = "0110", k = 2
Output: false
Explanation: The binary code "00" is of length 2 and does not exist in the array.
``` 

Constraints:

1 <= s.length <= 5 * 105
s[i] is either '0' or '1'.
1 <= k <= 20

## My Thoughts

I approached this with a sliding window of length `k` and tracked each code as an integer bitmask.

- If `k > strlen($s)`, return `false` immediately
- There are `2^k` possible codes total
- As I scan characters:
  - Shift the window left by 1 bit
  - Add the current bit (`0` or `1`)
  - Mask with `(1 << k) - 1` to keep only the last `k` bits
- Once the index reaches `k - 1`, the window represents one full code
- Add unseen codes to a set and count how many unique codes we have
- Return `true` as soon as the count reaches `2^k`

This avoids building substrings repeatedly and keeps the scan linear.

Time complexity is `O(n)`, where `n = strlen(s)`.  
Space complexity is `O(2^k)` for the set of seen codes.

## What I Learned

- For fixed-length binary substrings, a rolling bitmask is cleaner and faster than slicing strings each step.
- An early impossibility check (`k > n`) and early success check (seen count reaches `2^k`) simplify logic and improve performance.
- Converting each window to an integer gives a compact, hash-friendly representation for uniqueness checks.
