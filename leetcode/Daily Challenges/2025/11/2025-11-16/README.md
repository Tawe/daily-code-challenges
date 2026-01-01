# 2025-11-16

## Instructions

Given a binary string s, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: s = "0110111"
Output: 9
Explanation: There are 9 substring in total with only 1's characters.
"1" -> 5 times.
"11" -> 3 times.
"111" -> 1 time.
Example 2:

Input: s = "101"
Output: 2
Explanation: Substring "1" is shown 2 times in s.
Example 3:

Input: s = "111111"
Output: 21
Explanation: Each substring contains only 1's characters.

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.

## My Thoughts

At first this problem looked like it required some heavy substring work, but once I stepped back and thought about what actually creates an all-1 substring, the whole thing became much simpler. Every time you extend a run of consecutive 1s, you automatically create a predictable number of new substrings — no slicing, no nested loops, no brute force.
The key was realizing I didn’t have to track actual substrings at all. I just needed to know how long the current streak of 1s was. Adding the streak value every time I saw a '1' gives the total count for that position. This turns the whole problem into a single clean pass over the string.

## What I Learned

- Counting 1-only substrings is really counting runs of consecutive 1s.
- A run of length L creates L × (L + 1) / 2 all-1 substrings.
- Instead of computing that formula for each run later, I can build the answer incrementally by:
    - increasing a streak counter when I see a 1
    - resetting it on 0
    - adding streak to the result at each step
- This produces an O(n) solution with O(1) space — optimal.
- These kinds of problems often hide a simple pattern once you stop thinking about substrings literally.
- The large modulus (1_000_000_007) is required because the total number of substrings can explode for long runs of 1s.
