# 2026-02-19
[2026-02-19 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-19)

## Instructions
2026 Winter Games Day 14: Ski Mountaineering
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

"Shallow"	"Moderate"	"Deep"
"Gentle"	"Safe"	"Safe"	"Safe"
"Steep"	"Safe"	"Risky"	"Risky"
"Very Steep"	"Safe"	"Risky"	"Risky"

## My Thoughts

The table collapses to a simple rule:

- If slope is `"Gentle"`, outcome is always `"Safe"`
- If snow depth is `"Shallow"`, outcome is always `"Safe"`
- Everything else is `"Risky"`

So I implemented it as one boolean expression:
`slope === "Gentle" || snowDepth === "Shallow" ? "Safe" : "Risky"`

## What I Learned

- A lookup table can often be simplified into logical conditions by spotting rows/columns with identical outcomes.
- Combining two "always safe" conditions with `||` made the code much shorter without losing clarity.
- Ternary expressions are a good fit when there are only two possible return values.
