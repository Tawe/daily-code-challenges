# 2026-01-25
[2026-01-25 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-25)

## Instructions
Scaled Image
Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

- The input string is in the format "WxH". For example, "800x600".
- The scale is a number to multiply the width and height by.

Return the scaled dimensions in the same "WxH" format.

## My Thoughts

This problem was mostly about parsing and basic arithmetic rather than complex logic. Once I split the input string on "x", the rest of the solution was very direct.

The key thing was remembering that the width and height come in as strings, so they need to be converted to numbers before scaling. After multiplying both values by the scale factor, formatting the result back into the original "WxH" string shape completed the task.

Overall, this felt like a good exercise in carefully handling input formats and making sure the output matches exactly what’s expected.


## What I Learned
	•	String parsing is often the first step in problems with formatted input.
	•	Converting between strings and numbers cleanly is essential for correctness.
	•	Even simple arithmetic problems can fail if input/output formatting is slightly off.
	•	Using f-strings (or template strings) helps keep output readable and precise.
	•	It’s important to follow the required output format exactly, even for simple challenges.
