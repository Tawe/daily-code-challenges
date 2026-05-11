# 2026-05-11

## Instructions
Given an array of positive integers `nums`, return _an array_ `answer` _that consists of the digits of each integer in_ `nums` _after separating them in **the same order** they appear in_ `nums`.

To separate the digits of an integer is to get all the digits it has in the same order.

- For example, for the integer `10921`, the separation of its digits is `[1,0,9,2,1]`.

**Example 1:**
**Input:** nums = [13,25,83,77]
**Output:** [1,3,2,5,8,3,7,7]
**Explanation:** 
- The separation of 13 is [1,3].
- The separation of 25 is [2,5].
- The separation of 83 is [8,3].
- The separation of 77 is [7,7].
answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

**Example 2:**
**Input:** nums = [7,1,3,9]
**Output:** [7,1,3,9]
**Explanation:** The separation of each integer in nums is itself.
answer = [7,1,3,9].

**Constraints:**
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 105`

## Solution

Process each number independently, turn it into its digits, and collect all digits into one final array.

The Ruby solution does exactly that:

- convert each number to a string
- split the string into characters
- convert each character back into an integer digit
- flatten the nested arrays into one result

### Key idea

For any integer, its decimal digits already appear in order in its string form.

So for each `num`:

- `num.to_s` gives the decimal representation
- `.chars` gives each digit as a character
- `.map(&:to_i)` converts those characters into integer digits

That produces one digit array per number.
After doing this for every element in `nums`, `flatten` merges everything into the required output order.

### Why this works

The problem only asks us to preserve:

- the order of the numbers in `nums`
- the order of the digits inside each number

This approach preserves both naturally:

- `map` processes numbers from left to right
- `chars` keeps the digits in left-to-right order
- `flatten` concatenates the per-number digit arrays in the same sequence

### Complexity

- Time: `O(d)`, where `d` is the total number of digits across all numbers
- Space: `O(d)`

Since `nums[i] <= 10^5`, each number has at most a few digits, so this is easily within the limits.
