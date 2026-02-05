# 2026-02-05

## Instructions
You are given an integer array nums that represents a circular array. Your task is to create a new array result of the same size, following these rules:

For each index i (where 0 <= i < nums.length), perform the following independent actions:
If nums[i] > 0: Start at index i and move nums[i] steps to the right in the circular array. Set result[i] to the value of the index where you land.
If nums[i] < 0: Start at index i and move abs(nums[i]) steps to the left in the circular array. Set result[i] to the value of the index where you land.
If nums[i] == 0: Set result[i] to nums[i].
Return the new array result.

Note: Since nums is circular, moving past the last element wraps around to the beginning, and moving before the first element wraps back to the end.

```
Example 1:
Input: nums = [3,-2,1,1]
Output: [1,1,1,3]
Explanation:
For nums[0] that is equal to 3, If we move 3 steps to right, we reach nums[3]. So result[0] should be 1.
For nums[1] that is equal to -2, If we move 2 steps to left, we reach nums[3]. So result[1] should be 1.
For nums[2] that is equal to 1, If we move 1 step to right, we reach nums[3]. So result[2] should be 1.
For nums[3] that is equal to 1, If we move 1 step to right, we reach nums[0]. So result[3] should be 3.

Example 2:
Input: nums = [-1,4,-1]
Output: [-1,-1,4]
Explanation:
For nums[0] that is equal to -1, If we move 1 step to left, we reach nums[2]. So result[0] should be -1.
For nums[1] that is equal to 4, If we move 4 steps to right, we reach nums[2]. So result[1] should be -1.
For nums[2] that is equal to -1, If we move 1 step to left, we reach nums[1]. So result[2] should be 4.
```

Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100


## My Thoughts

At first, this problem looked deceptively simple. I already had the loop and the result array set up, so I assumed it would just be a small tweak. My initial mistake was treating the transformation like a math operation on the value itself (squaring it), instead of realizing that the value tells me where to move.

The biggest mental shift was understanding that each number isn’t something to compute with directly, it’s an instruction. Positive numbers mean “move right,” negative numbers mean “move left,” and zero means “stay put.” Once I reframed the problem that way, it became much clearer.

The circular part was the trickiest. I knew modulo was involved, but negative numbers made it confusing. Learning that modulo can produce negative results in PHP, and that you need to normalize it back into range, was the key insight that finally made everything click.

Once that was in place, the solution felt clean and mechanical: compute the landing index safely, then copy the value at that index.

## What I Learned
	•	The value at nums[i] is not the result, it’s a movement instruction.
	•	Circular arrays are usually solved with modulo arithmetic.
	•	In PHP (and many languages), % can return negative values, so you must normalize:
        `((index % n) + n) % n`
    •	Separating “where do I land?” from “what value do I take?” simplifies the logic.
	•	Edge cases like 0 are often best handled explicitly for clarity.
	•	Many bugs come from misunderstanding the problem, not from bad syntax.
	•	Once the mental model is right, the code becomes straightforward.
