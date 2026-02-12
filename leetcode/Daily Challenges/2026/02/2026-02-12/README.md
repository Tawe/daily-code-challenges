# 2026-02-12

## Instructions
You are given a string s consisting of lowercase English letters.

A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

Return the length of the longest balanced substring of s.

```
Example 1:
Input: s = "abbac"
Output: 4
Explanation:
The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each appear exactly 2 times.

Example 2:
Input: s = "zzabccy"
Output: 4
Explanation:
The longest balanced substring is "zabc" because the distinct characters 'z', 'a', 'b', and 'c' each appear exactly 1 time.​​​​​​​

Example 3:
Input: s = "aba"
Output: 2
Explanation:
​​​​​​​One of the longest balanced substrings is "ab" because both distinct characters 'a' and 'b' each appear exactly 1 time. Another longest balanced substring is "ba".
```

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.

## My Thoughts

Since `n <= 1000`, a quadratic scan over all substrings is practical. The useful part is checking balance efficiently while expanding a window: keep frequency counts, number of distinct characters, and the current max frequency. Then a substring is balanced exactly when `length == distinct * maxFreq`, which avoids a full 26-character validation on every step.

## What I Learned

- For substring-frequency problems with small `n`, `O(n^2)` with incremental updates is often the cleanest solution.
- A strong invariant can replace repeated full checks; here `len == distinct * maxFreq` captures balance.
- Tracking just a few rolling stats (`freq`, `distinct`, `maxFreq`) can turn a brute-force idea into a practical implementation.
- Constraint size matters: with only lowercase letters and `n = 1000`, this approach stays fast and simple.
