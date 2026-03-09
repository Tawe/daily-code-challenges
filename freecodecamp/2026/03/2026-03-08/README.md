# 2026-03-08
[2026-03-08 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-08)

## Instructions
HSL Color String Validator

Given a string, return `true` if it is a valid HSL color in this format:

- `hsl(h, s%, l%)`

Validation rules:

- `h` (hue) must be an integer from `0` to `360`
- `s` (saturation) must be an integer from `0` to `100`
- `l` (lightness) must be an integer from `0` to `100`
- optional spaces are allowed around values and separators
- an optional trailing semicolon `;` is allowed

Return `false` for anything outside this format or range.

## My Thoughts

This challenge is a good fit for two-phase validation:

- first, validate the overall string shape
- then, validate numeric ranges

I used a regex with three capture groups to enforce the exact `hsl(...)` structure while allowing flexible spacing and an optional trailing semicolon.

After matching:

- parse the three captured numbers as integers
- check hue in `[0, 360]`
- check saturation and lightness in `[0, 100]`

If either step fails, return `False`; otherwise return `True`.

This keeps format validation and value validation separate, which makes the solution easier to reason about and debug.

## What I Learned

- Regex is useful for strict shape validation when input has a fixed syntax.
- It is cleaner to parse and range-check values after a successful pattern match.
- Allowing optional whitespace and optional trailing punctuation can be handled without making the logic messy.
