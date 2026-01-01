# 2025-11-17
[2025-11-17 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-17)

## Instructions

Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:
- Each fingerprint will consist only of lowercase letters (a-z).
- Two fingerprints are considered a match if:
- They are the same length.
- The number of differing characters does not exceed 10% of the fingerprint length.

## My Thoughts

At first, I approached this problem like a loose character comparison — checking whether each character in one fingerprint existed anywhere inside the other. That made sense in my head because it felt similar to checking if two things “contain the same pieces.” But fingerprint matching isn’t about shared characters; it’s about how similar two sequences are position by position. Once I reframed it as a strict index-by-index comparison, the challenge became much simpler. The rule is really just: Count the mismatches, Make sure they don’t exceed 10% of the length, And return true or false accordingly. The solution ended up being straightforward once I focused on aligning the fingerprints instead of searching through them.

## What I Learned

- Fingerprint comparison is index-aligned, not “contains the same letters somewhere.”
- Mismatches must be counted at the same position in both strings.
- Matching requires that the number of differences is ≤ 10% of the length — not “≥ 10%.”
- It’s much safer to compare values without floating-point math.
A clean check is:
count * 10 <= length
instead of calculating percentages.
- The optimal solution is just a single O(n) loop with O(1) space — simple but precise logic.
