# 2026-03-22
[2026-03-22 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-22)

## Instructions
Coffee Roast Detector

Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

- The given string will contain the following characters, each representing a type of bean:
    
    - An apostrophe (`'`) is a light roast bean worth 1 point each.
    - A dash (`-`) is a medium roast bean worth 2 points each.
    - A period (`.`) is a dark roast bean worth 3 points each.
- The roast level is determined by the average of all the beans.

Return:

- `"Light"` if the average is less than 1.75.
- `"Medium"` if the average is 1.75 to 2.5.
- `"Dark"` if the average is greater than 2.5.

## My Thoughts

This is a weighted-average problem.

Each bean type maps to a point value:

- `'` -> `1`
- `-` -> `2`
- `.` -> `3`

So the solution is:

- map each character to its numeric roast value
- sum all bean values
- divide by the number of beans to get the average
- classify the result using the given thresholds

Using a lookup dictionary keeps the scoring step simple and easy to extend.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- Problems that assign symbolic weights often reduce cleanly to lookup-table + aggregation.
- Converting characters to numeric scores first makes threshold classification straightforward.
- Average-based classification problems are usually easiest when split into “score” then “label” phases.
- Small fixed mappings are a good fit for dictionaries because they keep branching minimal.
