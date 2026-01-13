# 2026-01-13

## Instructions
You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the minimum y-coordinate value of a horizontal line such that the total area of the squares above the line equals the total area of the squares below the line.

Answers within 10-5 of the actual answer will be accepted.

Note: Squares may overlap. Overlapping areas should be counted multiple times.

```
Example 1:
Input: squares = [[0,0,1],[2,2,1]]
Output: 1.00000
Explanation:
Any horizontal line between y = 1 and y = 2 will have 1 square unit above it and 1 square unit below it. The lowest option is 1.

Example 2:
Input: squares = [[0,0,2],[1,1,1]]
Output: 1.16667
Explanation:
The areas are:

Below the line: 7/6 * 2 (Red) + 1/6 (Blue) = 15/6 = 2.5.
Above the line: 5/6 * 2 (Red) + 5/6 (Blue) = 15/6 = 2.5.
Since the areas above and below the line are equal, the output is 7/6 = 1.16667.
```

Constraints:

1 <= squares.length <= 5 * 104
squares[i] = [xi, yi, li]
squares[i].length == 3
0 <= xi, yi <= 109
1 <= li <= 109
The total area of all the squares will not exceed 1012.

## My Thoughts

My first approach leaned on a clean observation: the “area below a horizontal line at height y” changes smoothly as you move the line up, and it only ever increases. That monotonic behavior made binary search the obvious tool—if I can compute “area below” for a given y, I can keep nudging y up or down until the below-area hits half of the total area.

The trickiest part wasn’t the search itself, it was correctly computing the contribution of each square relative to the mid-line:
	•	If the square is entirely below the line, it contributes its full area l*l.
	•	If it intersects the line, only a rectangle contributes: height (mid - yi) times width l.
	•	If it’s entirely above the line, it contributes nothing to “below”.

Because overlaps are counted multiple times, I didn’t need any geometry union logic—each square can be treated independently, which kept the math simple.

One thing I felt good about is that I tracked the lowest y that reaches the target by biasing the search toward the left side (when areaBelow >= target, move right down). That matches the prompt’s requirement to return the minimum y that balances the areas.

## What I Learned
	•	When a function is monotonic (here: areaBelow(y) only increases), binary search works even if the function is continuous and you’re searching over real numbers.
	•	Problems that look “geometric” can sometimes collapse into simple arithmetic when overlaps don’t matter (counted multiple times).
	•	Splitting into three cases (fully below / partial / fully above) is often the key to avoiding messy logic.
	•	Floating-point answers usually mean you need a tolerance or fixed iterations; you’re not aiming for an exact equality, just “close enough.”
	•	If you want the minimum valid y, you bias binary search to keep the “true” side on the right (right = mid when you’ve reached the target).