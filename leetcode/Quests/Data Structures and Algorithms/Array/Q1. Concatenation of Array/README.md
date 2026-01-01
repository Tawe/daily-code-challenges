# Q1. Concatenation of Array

## Instructions

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

```
### Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
### Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
```

Constraints:

n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000


## My Thoughts


This problem was intentionally simple, but it’s a good reminder that not every coding challenge needs a clever trick. My first instinct was the straightforward one, loop through the array and push each element twice. But in JavaScript, the spread operator gives you a much cleaner and more expressive way to do this.

The question almost feels like a warm-up: take an array, duplicate it, return the result. No hidden edge cases, no pitfalls, and the constraints are tiny. It’s more about recognizing that sometimes the obvious solution really is the correct one.


## What I Learned


- JavaScript’s spread operator (...) makes array concatenation incredibly simple and readable.
- Problems like this reinforce the value of leaning on the language’s built-in features instead of overthinking the implementation.
- Even very easy problems are useful: they help you practice translating a requirement into a minimal, idiomatic expression.
- The optimal solution runs in O(n) time and O(n) extra space, which is perfect for the constraints.
