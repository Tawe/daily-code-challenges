# 2026-02-02
[2026-02-02 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-02)

## Instructions
Groundhog Day
Today is Groundhog Day, in which a groundhog predicts the weather based on whether or not it sees its shadow.

Given a value representing the groundhog's appearance, return the correct prediction:

- If the given value is the boolean true (the groundhog saw its shadow), return "Looks like we'll have six more weeks of winter.".
- If the value is the boolean false (the groundhog did not see its shadow), return "It's going to be an early spring.".
- If the value is anything else (the groundhog did not show up), return "No prediction this year.".

## 
This problem looked very simple at first, but it had a small twist that made it worth slowing down for. It wasn’t just checking true or false, it also explicitly asked what to do if the input was anything else. That forced me to think about type checking, not just value checking.

My first instinct was to write a couple of if statements, but once I realized there were exactly three outcomes, I saw that this could be expressed very cleanly as a conditional expression. Using typeof appearance !== "boolean" as the first check made the intent really clear: anything that isn’t a boolean immediately falls into the “no prediction” case.

I also liked that this problem reinforced that true and false should be treated explicitly, instead of relying on truthy / falsy behavior, which could easily lead to bugs in a real application.


## What I Learned
	•	Always read the problem carefully for explicit type requirements, not just value checks.
	•	Checking typeof x === "boolean" is safer than relying on truthy or falsy values.
	•	Ternary operators work well when:
	•	There are a small number of clear outcomes
	•	Each condition is simple and readable
	•	Writing concise code doesn’t mean skipping clarity, ordering the conditions properly keeps it understandable.
	•	Even very small challenges can reinforce good defensive programming habits.
