# 2026-02-23
[2026-02-23 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-23)

## Instructions
Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

## My Thoughts

I split each blood type into two parts (letter and Rh), then checked compatibility in two independent steps.

- Parse donor and recipient with one regex: `^(A|B|AB|O)([+-])$`
- Check ABO letter compatibility:
  - `O` -> everyone
  - `A` -> `A` or `AB`
  - `B` -> `B` or `AB`
  - `AB` -> `AB` only
- Check Rh compatibility:
  - `-` can donate to `-` and `+`
  - `+` can donate only to `+`
- Return `letterCompatible && rhCompatible`

Keeping letter and Rh checks separate made the logic easy to verify against the problem statement.

## What I Learned

- Regex capture groups are a clean way to parse fixed-format values like blood types.
- For rule-heavy condition problems, splitting into independent booleans (`letterCompatible`, `rhCompatible`) keeps the code readable.
- Explicitly mapping each donor letter type avoids hidden edge cases and makes correctness easy to review.
