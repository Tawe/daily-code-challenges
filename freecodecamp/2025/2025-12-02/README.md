# 2025-12-02
[2025-12-02 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-02)

## Instructions.
Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

- The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
- Every uppercase letter in the camel case string starts a new word.
- Convert all letters to lowercase.
- Separate words with an underscore (_).

## My Thoughts
This exercise was deceptively simple: convert a camelCase string into snake_case. At first glance, regex feels like overkill, but it actually ends up being the cleanest and most expressive solution. My initial approach worked, but it also made me step back and consider why regex is often the idiomatic tool for these kinds of string transformations.

Exploring alternate solutions showed that, while I can write a non-regex version or build something that handles edge cases like acronyms, it doesn’t necessarily make the code more optimal in meaningful ways. In fact, the original one-liner using replace(/([A-Z])/g, "_$1") is already performant, expressive, and readable for typical use cases.

This reminded me that “optimizing” often isn’t about making code shorter or faster, sometimes it’s about choosing the solution that balances clarity, correctness, and maintainability. And in this case, the simplest version really is the best unless I have special formatting rules or edge cases to consider.

## What I Learned
- My original solution was already optimal.
Regex with a capture group is the standard and efficient way to convert camelCase → snake_case.
- Regex is great for structural string manipulation.
Especially when the pattern is predictable, like uppercase transitions in camelCase.
- Optimization depends on context.
A non-regex solution might be “faster” in a micro-benchmark, but for real-world usage, clarity matters more.
- Edge cases change the solution.
Handling acronyms like HTMLParser requires a smarter regex. Identifying these cases is part of writing robust utilities.
- There’s value in exploring alternatives.
Even when the original code is fine, comparing approaches deepens understanding of how JavaScript handles strings and how regex engines work.