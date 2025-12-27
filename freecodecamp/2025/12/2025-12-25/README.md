# 2025-12-25
[2025-12-25 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-25)

## Instructions
Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.
For example, given "* \n *\n* ", which logs to the console as:

* 
 *
* 
Return "*  *\n ** \n*  *", which logs to the console as:

*  *
 ** 
*  *
Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.

## My Thoughts

This challenge looked simple at first, but the emphasis on whitespace made it more delicate than it appeared. The biggest risk wasn’t the logic itself, but accidentally altering spaces or line breaks while transforming the string.

I had to be very intentional about how I split and reassembled the input. Using split("\n") and join("\n") allowed me to work line by line without trimming or normalizing whitespace. Mirroring each line was straightforward once I focused on reversing characters exactly as they appeared.

The examples made it clear that visual inspection can be misleading, especially when spaces are involved, so correctness depends on treating the string as raw data rather than formatted text.

## What I Learned
	•	Whitespace is data — it must be preserved exactly when a problem says so.
	•	String manipulation bugs often come from unintended trimming or normalization.
	•	Working line-by-line simplifies multi-line string transformations.
	•	Reversing a string is a common operation that becomes powerful when combined with mapping.
	•	When output formatting is strict, clarity and simplicity in transformations matter more than clever tricks.