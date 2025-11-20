# 2025-11-19
[2025-11-19 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-19)

## Instruction 
Markdown Heading Converter
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:
- Start with zero or more spaces, followed by
- 1 to 6 hash characters (#) in a row, then
- At least one space. And finally,
- The heading text.

The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This problem looked simple at first just convert a Markdown heading into an HTML heading. But once I started coding, I realized the trick isn’t in the string manipulation itself; it’s in validating the exact format the prompt describes. Splitting on spaces works for obvious inputs, but it immediately breaks when you introduce leading spaces, missing text, or too many # characters.

The part that really stood out is how easy it is to accidentally “over-accept” or “under-accept” inputs. A heading like " # Title" should be valid, while something like "####### Nope" should not, and my first version couldn’t reliably enforce all those rules. It became really clear that trying to handle validation manually with just .split() ends up being messy. The problem is much cleaner when you express the rules directly.

## What I Learned

- Markdown headings have stricter rules than they look:
leading spaces are allowed, hash count must be 1–6, and a space + text must follow.
- My original approach (splitting on spaces) fails on edge cases I wasn’t initially thinking about—especially inputs with multiple initial spaces or no heading text.
- This was a good reminder that regex is often the best tool when the format is highly structured. A single well-written expression can encode all the validation rules cleanly.
- I also caught a bug in my own output: closing HTML tags must include the tag name (</h1>), not just the number.
- The biggest takeaway: when a problem is more about format validation than string manipulation, clarity and correctness matter more than cleverness. A simple, expressive regex ended up making the whole solution more readable and reliable.