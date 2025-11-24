# 2025-11-24

## Instructions
You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

 
```yaml
Example 1:

Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.

Example 2:
Input: nums = [1,1,1]
Output: [false,false,false]
 ```

Constraints:
```yaml
1 <= nums.length <= 105
nums[i] is either 0 or 1.
```

## My Thoughts

This problem initially felt confusing because the numbers are formed from binary prefixes rather than standard arithmetic. My first instinct was to build the binary number as a string and convert it each time, which technically works but felt inefficient and clumsy. Understanding how binary numbers growm, and especially how the shifting works, took a moment to click. I also got briefly tangled in treating binary strings like decimal values, which helped me realize that type handling really matters here.

Once I shifted my mindset from “build a string and convert it” to “incrementally update a number,” the problem suddenly made way more sense.

## What I Learned

I learned how to build binary numbers efficiently using the rule:

```value = value * 2 + bit```

This captures how appending bits works in base-2, and it avoids ever working with binary strings directly. I also learned a powerful trick: if I only care about whether a number is divisible by 5, I can reduce the running value modulo 5 at every step. This keeps the number tiny, avoids overflow, and gives an O(n) solution.

Overall, this challenge reinforced how thinking in terms of number systems and modulo math leads to cleaner and more efficient solutions.