# 2025-12-07
[2025-12-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-07)

## Instructions



## My Thoughts

This challenge initially looked like a straightforward string manipulation problem, but it actually forces you to think in terms of patterns rather than raw text. The moment I recognized that consecutive duplicate words behave just like run-length encoding (RLE), the entire task became much cleaner. At first, it’s tempting to try something clever with regex or grouping, but those approaches quickly fall apart because the compression rule depends entirely on order. It’s not “count how many times a word appears,” it’s “count how many times it appears in a row,” which is a very different mindset. Once I reframed it that way, the algorithm became almost mechanical: walk the sentence, track the current word and its streak, and emit either the word or word(count) whenever the streak breaks. What I like about this problem is how it reinforces the importance of reading constraints carefully. The sentence uses single spaces, words aren’t separated by punctuation, and only consecutive duplicates matter, these details guide the entire logic. Rather than over-engineering, the simplest iteration strategy ends up being the most correct, readable, and maintainable.

## What I Learned

- Run-length encoding applies to more than characters.
Applying RLE to words instead of letters makes the logic clearer and reduces complexity.
- Consecutive context matters.
You can’t compress based on frequency; you have to compress based on order. This distinction influences the entire structure of the algorithm.
- Stateful iteration is powerful.
Tracking a currentWord and count is enough to handle the entire problem with a single pass.
- Simple loops often outperform “clever” solutions.
Regex might look elegant, but iterative logic is more explicit, debuggable, and aligned with the problem’s rules.
- Breaking problems into mechanical patterns reduces cognitive load.
Once I recognized that every time a word changes, a segment ends, the problem became trivial.
