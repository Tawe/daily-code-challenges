# 2026-02-11
[2026-02-11 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-11)

## Instructions
Given an array of judge scores, drop the highest and lowest score, then sum the remaining values. Subtract any penalty values provided and return the final score.

## My Thoughts

Sorting the scores and slicing off the first and last makes the “drop highest/lowest” rule very clean. Using rest parameters for penalties keeps the function signature flexible, and `reduce` lets you express both sums compactly.

## What I Learned

• Sorting then slicing is a simple, readable way to remove extremes when the array is small.  
• Rest parameters are great for optional, variable-length inputs like penalties.  
• `reduce` can keep scoring logic concise, but it’s worth remembering `sort` mutates the original array.
