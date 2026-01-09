# 2026-01-09
[2026-01-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-09)

## Instructions
Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

##My Thoughts

This problem felt like a good mix of number theory and string manipulation. Once I reframed the task as “generate all digit rotations and check each one for primality,” the solution became much clearer.

The core challenge wasn’t rotating the number, converting to a string made that straightforward — but making sure the prime check was correct and efficient enough. I also liked that the problem naturally encourages early exits: as soon as one rotation isn’t prime, you can stop.

What stood out is that the problem looks simple, but there are hidden optimizations you can apply if you think about digit properties. It made me realize how much performance you can gain by rejecting impossible cases early instead of blindly checking everything.

Overall, this was a satisfying problem because the solution is readable, logical, and easy to reason about step by step.

What I Learned
	•	Circular primes are best approached by rotating digits, not by numeric math alone.
	•	Converting numbers to strings can greatly simplify digit-based operations.
	•	Prime checking with a loop up to √n is usually sufficient for coding challenges.
	•	Early filtering (like excluding numbers containing even digits or 5) can dramatically reduce unnecessary work.
	•	Writing code that can short-circuit early (returning as soon as a condition fails) improves both clarity and performance.
	•	Even simple problems can hide opportunities for optimization once correctness is achieved.
