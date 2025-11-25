# 2025-11-25

## Instructions
Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

Return the length of n. If there is no such n, return -1.

Note: n may not fit in a 64-bit signed integer.

 
```yaml
Example 1:

Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.
Example 2:

Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.

Example 3:

Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.
 ```

Constraints:

1 <= k <= 105

## My Thoughts

This problem looked strange at first because it asks for a number made only of the digit 1, and that feels like something you’d need to actually build. My first instinct was to imagine generating numbers like 1, 11, 111, etc., and checking divisibility, but that obviously doesn’t work once the numbers explode in size. The turning point was realizing that the core of the problem isn’t the number itself, but whether such a number could even exist for a given k. Once I understood that some values of k make the problem impossible from the start, everything started to make a lot more sense.

## What I Learned

I learned a key number-theory fact:
A number composed entirely of digit 1 can never be divisible by 2 or 5, because it always ends with 1. That alone gives a huge shortcut, if k has a factor of 2 or 5, the answer must immediately be -1.

I also learned why modulo arithmetic is so important: instead of building massive “all-ones” numbers, I can track only the remainder as I append new 1s. Using the update rule:

```ini
remainder = (remainder * 10 + 1) % k
```

lets me simulate adding digits without ever creating the actual number.
This keeps everything efficient and avoids overflow entirely.

Overall, this challenge reinforced that sometimes the real work is spotting constraints that make certain answers impossible, and once you see that, the problem becomes much simpler.