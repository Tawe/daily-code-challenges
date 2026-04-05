# 2026-04-02
[2026-04-02 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-02)

## Instructions

Capitalized Fibonacci

Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are `0`, `1`, `1`, `2`, `3`, `5`, `8`, `13`, `21`, `34`.

- The first character is at index `0`.
- If the index of non-letter characters is a Fibonacci number, leave it unchanged.

## My Thoughts

This problem has two parts:

- figure out which indices are Fibonacci numbers
- apply the correct casing based on whether an index is in that set

The solution generates Fibonacci indices up to the string length and stores them in a `Set` for fast lookup.

Then it scans the string once:

- if the current index is a Fibonacci number, convert that character with `toUpperCase()`
- otherwise convert it with `toLowerCase()`

Using a `Set` keeps the second pass simple and efficient.

Time complexity: `O(n)`  
Space complexity: `O(n)` in the worst case for the character array and Fibonacci index set

## What I Learned

- Precomputing special indices is often cleaner than recomputing a property during every character check.
- A `Set` is a good fit when the main operation is repeated membership lookup.
- String transformation problems often become simple once the index rule is separated from the character update.
- Applying `toUpperCase()` and `toLowerCase()` consistently also handles non-letter characters safely without extra branching.
