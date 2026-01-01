# 2025-12-16
[2025-12-16 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-16)

## Instructions

Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.
Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.

## My Thoughts

This problem looks simple on the surface, but the wording hides an important detail: we’re only counting consonants, not just “non-vowels.” That means digits, punctuation, spaces, and symbols all need to be ignored entirely. Once that clicked, the problem became more about filtering correctly than counting cleverly. My initial approach leaned on a regex transformation: remove everything that isn’t a consonant, then check the length of what’s left. It’s a clean expression of intent, “strip away what doesn’t matter and count what remains.” Given the constraints, that’s perfectly reasonable and easy to reason about. That said, thinking about optimality made me realize there’s a tradeoff between expressiveness and memory usage. Rebuilding a string just to count its length works, but it’s doing more allocation than strictly necessary. A single-pass count avoids that, even though it’s more verbose. This was a good reminder that “optimal” isn’t just about big-O, it’s about understanding what the code is actually doing under the hood.

## What I Learned

- Problem wording matters more than it first appears.
“Ignore non-letters” is a stronger constraint than just “exclude vowels.”
- Regex can express intent very clearly.
A well-chosen regex makes the logic almost self-documenting.
- Time-optimal doesn’t always mean space-optimal.
Creating intermediate strings is fine in small problems, but it’s still a tradeoff.
- Single-pass solutions offer tighter control.
Counting directly allows early exits and avoids unnecessary allocations.
- There’s value in knowing multiple approaches.
The regex version is concise and readable; the loop version is leaner and more explicit.
- Optimization decisions should be conscious, not automatic.
Choosing clarity over micro-optimization is often the right call, as long as you understand the cost.
