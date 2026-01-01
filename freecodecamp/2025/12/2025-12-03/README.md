# 2025-12-03
[2025-12-03 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-03)

## Instructions



## My Thoughts

This challenge looked simple at first just convert a Markdown list item into HTML but as I worked through it, I realized how many subtle rules are baked into Markdown formatting. My initial solution passed the basic example and worked for the general case, but when I revisited the detailed requirements, I noticed several important edge cases I hadn’t accounted for. My regex matched only a number, a dot, and a space at the beginning of the string. It didn’t accommodate optional leading spaces, it allowed numbers like “0.” even though the spec says “1 or greater,” and it didn’t enforce that actual text must appear after the space. In other words—it worked, but it wasn’t fully correct for strict validation. This was a good reminder that regex problems often have hidden complexity, and solving them well means slowing down and translating every rule in the prompt into an explicit condition. “Close enough” works for real-world UX, but not for a challenge where correctness is literal.

## What I Learned

- Specs matter more than assumptions.
The instructions explicitly allow leading spaces and require numbers ≥ 1. My first attempt missed those details. Reading specs more carefully leads to better solutions.
- Regex should reflect all rules, not just the obvious ones.
When a problem says “exact format,” each bullet point usually deserves its own thought: - Leading spaces? - Number range? - Period required? - At least one space after the period? - Must contain text after that space?
Each one maps directly to part of the regex.
- Validating input often means validating the entire string.
- Using ^...$ ensures you're not just matching a prefix—you’re enforcing full structure.
- Small tasks are great opportunities to strengthen attention to detail.
This was a reminder that even simple problems can teach discipline in parsing, validation, and thinking like a compiler rather than a human reader.
- It’s okay to start with a minimal solution, then refine it.
My original function wasn’t wrong, it just wasn’t complete. Iteration is part of the process.
