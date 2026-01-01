# 2026-01-01
[2026-01-01 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-01)

## Instructions

Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.
- The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:
- You walked at least 10,000 steps.
- You had no more than 120 minutes of screen time.
- You read at least five pages.
If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.
If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.

## My Thoughts

This problem ended up being less about the core logic and more about how I was tracking position while looping. My first instinct, coming from a JavaScript background, was to loop over the values and then look up the index when I needed it. While that approach works in simple cases, it hides inefficiencies and can produce incorrect results when duplicate values are involved. Seeing the alternative solution made it clear that Python has a more direct way to express "I need both the index and the value at the same time." Using enumerate removes the need for extra lookups, makes the loop intent clearer, and avoids subtle bugs related to index() always returning the first match. This felt like one of those moments where the code itself wasn't wrong, but the pattern was. The improved version reads more cleanly and scales better without adding complexity.

## What I Learned

- Looking up an index inside a loop is usually a red flag for both performance and correctness.
- Python's enumerate solves the same problem as indexOf-based loops in JavaScript, but in a safer way.
- enumerate is conceptually similar to array.entries() in JavaScript.
- Writing code that clearly expresses intent often leads to better performance automatically.
- Understanding language-specific idioms is just as important as knowing the algorithm itself.
