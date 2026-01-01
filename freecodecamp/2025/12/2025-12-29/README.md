# 2025-12-29
[2025-12-29 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-29)

## Instructions

Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.
- 1 gallon equals 3.78541 liters.
- If the airplane already has enough fuel, return 0.
- You can only add whole gallons.
- Do not include decimals in the return number.

## My Thoughts

This problem was mostly about careful unit conversion rather than algorithmic complexity. Once I identified gallons as the starting point and liters as the target, the rest of the logic followed naturally. The main thing I had to be careful about was rounding. Since only whole gallons can be added, using Math.ceil was essential to avoid underestimating the required fuel. Handling the case where the current fuel is already sufficient also helped keep the logic clean and predictable. Overall, this felt like a good example of a problem where clarity and correctness matter more than cleverness.

## What I Learned

- Unit conversion problems are often about precision and rounding, not algorithms.
- It’s important to explicitly handle “already enough” edge cases.
- Math.ceil is the right choice when partial units aren’t allowed.
- Simple arithmetic problems can still have subtle pitfalls if rounding is ignored.
- Writing readable, straightforward code is often the optimal solution.
