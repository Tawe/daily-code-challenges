# 2026-02-07
[2026-02-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-07)

## Instructions
2026 Winter Games Day 2: Snowboarding
Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

- A snowboarder's stance is either "Regular" or "Goofy".
- Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
- The landing stance flips every 180 degrees of rotation.

For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

## My Thoughts

At first glance this problem looks like it’s about tracking rotation direction and exact degrees, but once I stepped back, it became clear that none of that actually matters. The only thing that affects the landing stance is whether the rider rotates in multiples of 180 degrees.

A 90° or 270° rotation doesn’t flip stance at all. Every 180° does. That realization let me ignore direction entirely and focus on how many full 180° rotations occurred.

By converting the rotation into a count of 180-degree flips and checking whether that count was even or odd, I could determine whether the stance stayed the same or flipped. That made the logic much simpler and easier to reason about.

## What I Learned
	•	Not all parts of the input are equally important, identifying the invariant simplifies the problem.
	•	Direction can sometimes be eliminated entirely by using absolute values.
	•	Parity (even vs odd) is often the real decision point in rotation or toggle-based problems.
	•	Reducing a problem to its mathematical essence is usually better than simulating every step.
	•	Looking for the smallest unit of change (here, 180°) leads to cleaner and more reliable solutions.

