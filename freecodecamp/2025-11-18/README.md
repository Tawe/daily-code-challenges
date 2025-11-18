# 2025-11-18
[2025-11-18 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-18)
## Instructions
100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

## My Thoughts

This one seemed simple on the surface, but I caught myself overthinking the “looping” part. My first instinct was to run a while-loop and decrement a counter, but that didn’t actually help me build the final string. I kept trying to find a clever way to append characters one at a time, but that approach was both messy and inefficient.

The real breakthrough was realizing that the challenge isn’t about characters at all, it’s about repeating a pattern until you hit a specific length. Once I reframed the problem that way, repeating the entire string became the obvious strategy. I didn’t need to handle individual characters or track some loop counter. I just needed to generate a long enough string and slice it to exactly 100 characters.

## What I Learned

- Optimal code often comes from changing the mental model, not writing more loops.
- When I need to reach a fixed length, I should think in terms of pattern repetition instead of character-by-character building.
- JavaScript’s .repeat() paired with Math.ceil() turns this into a clean O(1) solution instead of a multi-step loop.
- Even without .repeat(), using a simple while (result.length < 100) loop is still way better than trying to manage counters manually.
- Trim last if the string runs past 100 characters, .slice(0, 100) cleans everything up perfectly.