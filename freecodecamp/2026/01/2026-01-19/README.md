# 2026-01-19
[2026-01-19 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-19)

## Instructions
Energy Consumption
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:

- 1 Calorie equals 4184 joules.
- 1 watt-hour equals 3600 joules.

Return:

- "Workout" if the workout used more energy.
- "Devices" if the device used more energy.
- "Equal" if both used the same amount of energy

## My Thoughts

This problem was primarily about unit conversion and comparison, not algorithmic complexity. Once both values were converted into the same unit (joules), the rest of the logic became a straightforward comparison.

I liked that the problem forced me to be explicit about constants instead of hard-coding numbers inline. Converting calories and watt-hours separately made the intent of the code very clear and reduced the risk of mixing up units.

Using a chained conditional expression kept the function concise while still readable, since there are only three possible outcomes.

Overall, this felt like a good example of translating a real-world concept into clean, deterministic logic.


## What I Learned
	•	Always convert values to the same unit before comparing them.
	•	Naming conversion constants improves readability and avoids magic numbers.
	•	Chained conditional expressions can be clean when the logic is simple and mutually exclusive.
	•	Problems that seem “math-heavy” are often just careful bookkeeping.
	•	Clarity matters more than cleverness for comparison problems.