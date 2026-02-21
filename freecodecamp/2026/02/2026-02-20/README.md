# 2026-02-20
[2026-02-20 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-20)

## Instructions

2026 Winter Games Day 15: Snowboarding
Given a trick name string in the format `"FirstWord SecondWord"`, determine whether it is valid.
A trick is valid only if:
- the first word is one of: `"Misty"`, `"Ghost"`, `"Thunder"`, `"Solar"`, `"Sky"`, `"Phantom"`, `"Frozen"`, `"Polar"`
- the second word is one of: `"Twister"`, `"Icequake"`, `"Avalanche"`, `"Vortex"`, `"Snowstorm"`, `"Frostbite"`, `"Blizzard"`, `"Shadow"`
Return `true` for valid trick names and `false` otherwise.

## My Thoughts

I treated this as a two-part membership check: - split the input into words
- ensure there are exactly 2 words
- check first word in the valid-first list
- check second word in the valid-second list I used `includes` for each list and returned the combined boolean directly.

## What I Learned

- When a problem gives explicit allowed values, array membership checks are usually the cleanest solution.
- Validating shape first (exactly two words) prevents false positives from malformed inputs.
- `trim().split(/\s+/)` is safer than splitting only on a single space.
