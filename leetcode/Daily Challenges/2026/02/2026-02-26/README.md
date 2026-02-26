# 2026-02-26

## Instructions
Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:

If the current number is even, you have to divide it by 2.

If the current number is odd, you have to add 1 to it.

It is guaranteed that you can always reach one for all test cases. 
```
Example 1:
Input: s = "1101"
Output: 6
Explanation: "1101" corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14. 
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.  
Step 5) 4 is even, divide by 2 and obtain 2. 
Step 6) 2 is even, divide by 2 and obtain 1.  

Example 2:
Input: s = "10"
Output: 1
Explanation: "10" corresponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.  

Example 3:
Input: s = "1"
Output: 0
```
Constraints:

1 <= s.length <= 500
s consists of characters '0' or '1'
s[0] == '1'

## My Thoughts

Trying to convert the whole binary string into an integer is risky here because `s` can be up to length 500.

A better approach is to simulate the operations directly on bits:

- Walk from right to left (least significant bit to just before the first bit)
- Track a `carry` (from previous `+1` operations)
- For each position:
- If `bit + carry` is even, we only do `/2` so `+1` step
- If `bit + carry` is odd, we must do `+1` and then `/2`, so `+2` steps and set `carry = 1`

At the end, if `carry` is still `1`, that means the number effectively became `10...0`, so we need one final step.

This gives:

- Time: `O(n)`
- Space: `O(1)`

## PHP Solution

```php
<?php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numSteps($s) {
        $n = strlen($s);
        $steps = 0;
        $carry = 0;

        // Process from right to left, stopping before the most significant bit.
        for ($i = $n - 1; $i > 0; $i--) {
            $bit = ($s[$i] === '1') ? 1 : 0;
            $current = $bit + $carry;

            if ($current === 1) {
                // Odd: +1 then /2 => 2 steps, carry becomes 1.
                $steps += 2;
                $carry = 1;
            } else {
                // Even: /2 => 1 step.
                $steps += 1;
            }
        }

        // If carry remains at the front, one extra step is needed.
        return $steps + $carry;
    }
}
```

## What I Learned

- Simulating on bits can avoid big-integer conversion entirely.
- A single `carry` variable is enough to model repeated `+1` effects.
- This pattern is common in binary-string math problems where values can exceed built-in integer sizes.
