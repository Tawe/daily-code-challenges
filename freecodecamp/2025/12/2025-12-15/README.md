# 2025-12-15
[2025-12-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-15)

## Instructions

Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.
- 1 mile equals 1.60934 kilometers.
- If you are travelling less than or equal to the speed limit, return "Not Speeding".
- If you are travelling 5 KPH or less over the speed limit, return "Warning".
- If you are travelling more than 5 KPH over the speed limit, return "Ticket".

## My Thoughts

This problem is very direct, which makes it a good test of clarity rather than cleverness. There’s no hidden trick here, the main thing is making sure units are handled correctly and the conditional logic matches the rules exactly. Once the MPH-to-KPH conversion is done, everything else is just a set of ordered comparisons. The only real decision is the order of those checks. Handling the “Ticket” case first avoids accidentally classifying someone who’s well over the limit as just a warning. This kind of challenge reinforces that not every problem needs abstraction or optimization. Sometimes the cleanest solution is just translating the requirements into code as literally as possible.

## What I Learned

- Unit conversion should happen once and early.
Converting MPH to KPH up front keeps the rest of the logic simple and readable.
- Condition order matters.
Checking the most restrictive condition first prevents misclassification later.
- Optimal doesn’t always mean complex.
An O(1) solution with a few comparisons is both optimal and clear.
- Clean code is about intent, not brevity.
Explicit conditions make it obvious why each return value is chosen.
- Simple challenges still build good habits.
Precision, ordering, and readability matter just as much here as in harder problems.
