# 2026-04-07
[2026-04-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-07)

## Instructions
Palindrome Characters

Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

- A palindrome is a string that is the same forward and backward.
- If it's not a palindrome, return `"none"`.

## My Thoughts

This problem has two clear steps:

- check whether the string is a palindrome
- if it is, return the middle portion based on length parity

Your solution checks the palindrome condition by reversing the string and comparing it to the original.

Then:

- if the length is odd, return the single middle character
- if the length is even, return the middle two characters

If the string is not a palindrome, return `"none"` immediately.

Time complexity: `O(n)`  
Space complexity: `O(n)` because of the reversed-string construction

## What I Learned

- Palindrome problems often split naturally into “validate first, then extract.”
- Length parity is the deciding factor for whether the center is one character or two.
- String reversal is a simple and readable way to test palindromes when input sizes are small.
- Returning early for the non-palindrome case keeps the rest of the logic very clean.
