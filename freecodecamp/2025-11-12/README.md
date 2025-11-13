# 2025-11-12
[2025-11-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-12)
## Instructions
Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".

## My Thoughts
At first I thought we could solve this with a simple regex but after really thinking about it, I think a regex would be over kill. 

Instead we can look at the first letter of the name and did an if on that and then add it all back together again in the return.


## What I Learned
Not to overthink it.