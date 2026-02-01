# 2026-21-01
[2026-02-01 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-01)

## Instructions
Digital Detox
Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:

-You logged in no more than once within any four-hour period.
-You logged in no more than 2 times on any single day.

## My Thoughts

This challenge felt like two separate rules glued together: a time spacing rule (no more than one login in any 4-hour window) and a daily limit rule (no more than two logins per day). Once I treated them as two independent checks, the solution became much clearer.

For the 4-hour rule, converting each log to a timestamp and sorting was the key move. After sorting, I only needed to compare each login to the previous one. If two consecutive logins are less than 4 hours apart, then there’s definitely a 4-hour window containing more than one login, so the detox fails.

For the “max 2 per day” rule, I didn’t need timestamps at all just counting how many logs share the same YYYY-MM-DD prefix was enough. If any date count goes above 2, the detox fails.

Overall, this was a nice example of using the right representation for the job: timestamps for time gaps, and string grouping for daily counts.

## What I Learned
	•	Some problems are easier when you split them into separate constraints instead of trying to solve everything in one pass.
	•	Converting date strings into numeric timestamps makes time comparisons simple and reliable.
	•	Sorting turns a “check any pair within 4 hours” problem into a “check neighbors” problem.
	•	If logs are sorted, checking consecutive entries is enough to detect any violations of a spacing rule.
	•	For day-based rules, you often don’t need full date parsing grouping by the date string is enough.
	•	A clean early-return style (return false as soon as you break a rule) keeps the logic readable and efficient.