# 2026-03-02
[2026-03-02 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-02)

## Instructions
Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.

## My Thoughts

This one comes down to converting letters into their alphabet positions and skipping everything else.

The cleanest way to handle uppercase and lowercase together is to normalize the string first:

- convert every character to uppercase

After that, each letter can be mapped with ASCII math:

- `ord('A')` is the starting point
- so a letter’s value is `ord(ch) - ord('A') + 1`

That means:

- `A` becomes `1`
- `B` becomes `2`
- ...
- `Z` becomes `26`

Non-letter characters should not count at all, so the solution filters them out with `isalpha()` before adding anything to the total.

The Python implementation does all of that in one expression:

- loop through the uppercase version of the string
- keep only alphabetic characters
- convert each one to its numeric value
- sum the results

It’s short, but still easy to follow once you break it into those steps.

Time complexity is `O(n)` and space complexity is `O(1)` aside from the uppercase string created by `s.upper()`.

## What I Learned

- Normalizing input first can simplify the rest of the logic a lot.
- ASCII / Unicode code point math is a clean way to map letters to positions.
- Filtering invalid characters before transforming values keeps the solution compact and predictable.
