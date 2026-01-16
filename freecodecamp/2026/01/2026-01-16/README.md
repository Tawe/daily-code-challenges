# 2026-01-16
[2026-01-16 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-16)

## Instructions
Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

## My Thoughts

This problem is a nice mix of math fundamentals and practical implementation details. The core idea is straightforward: apply the Pythagorean theorem and check whether the resulting hypotenuse length is a whole number.

My solution works by computing the square root of a^2 + b^2 and then checking whether it has a fractional part. Conceptually, that’s clear and readable, and for small inputs it behaves exactly as expected.

That said, I did pause to think about floating-point precision. Since math.sqrt returns a floating-point number, relying on % 1 == 0 can sometimes be risky for very large numbers due to precision errors, even if the math result should be an integer.

## What I Learned
	•	The Pythagorean theorem is easy to translate directly into code.
	•	Floating-point math can introduce subtle edge cases when checking for “integer-ness.”
	•	A safer pattern is often to avoid square roots altogether and instead check if a² + b² is a perfect square.
	•	Readability matters, but numerical robustness matters too when dealing with floats.
	•	Problems like this are good reminders that correct math and correct computation aren’t always the same thing.