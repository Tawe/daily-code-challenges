# 2025-11-08

## Instructions

Given an integer n, you must transform it into 0 using the following operations any number of times:

- Change the rightmost (0th) bit in the binary - representation of n.
- Change the ith bit in the binary representation of n if the (i-1)th bit is set to 1 and the (i-2)th through 0th bits are set to 0.
Return the minimum number of operations to transform n into 0.

Example 1:

Input: n = 3
Output: 2
Explanation: The binary representation of 3 is "11".
"11" -> "01" with the 2nd operation since the 0th bit is 1.
"01" -> "00" with the 1st operation.
Example 2:

Input: n = 6
Output: 4
Explanation: The binary representation of 6 is "110".
"110" -> "010" with the 2nd operation since the 1st bit is 1 and 0th through 0th bits are 0.
"010" -> "011" with the 1st operation.
"011" -> "001" with the 2nd operation since the 0th bit is 1.
"001" -> "000" with the 1st operation.

Constraints:

0 <= n <= 109

## My Thoughts

This problem completely threw me off at first. The flipping rules felt strange and super restrictive. I kept trying to manually walk numbers like 1101 down to 0000, but every path I tried broke one of the rules. It honestly felt impossible to reason about the operations directly.
The key confusion was understanding when you’re allowed to flip a higher-order bit. I eventually understood that the rules force the lower bits into a very specific pattern before you’re allowed to touch the bigger bits. That’s why my “shortcut” sequences kept being illegal — you really aren’t allowed to turn off the left bits until the right bits match exactly what the rules require.
At that point it became clear that trying to actually simulate the flips was the wrong way to solve the problem. The rules are complicated enough that the number of required moves forms a pattern that’s really hard to see if you try to reason about it directly.
The breakthrough came when I learned that the flipping behavior in this problem is actually equivalent to walking backward through Gray code, which is a binary encoding where each step changes only one bit at a time. Once I saw that connection, the whole problem went from “impossible to simulate” to “just convert from Gray code to binary.” That turns out to be extremely simple to compute.
The magic is that you don’t need to understand every flip — you just need to convert the input number using a cumulative XOR pattern. It gives the minimum number of operations without ever simulating a single bit flip.

## What I Learned

This bit-flipping rule set forces numbers to move in a Gray-code-like pattern, where only one bit can change at a time.
Flipping a higher bit is only allowed when the lower bits match an exact pattern (1 0 0 … 0). This is why all my “shortcut” paths were illegal.
Trying to simulate the bit flips is a trap. The legal sequences are long, weird, and hard to reason about manually.
You can solve the entire problem using a very small XOR loop:
Start with result = 0
Repeatedly XOR result with n
Shift n right until it becomes 0
This loop performs a Gray-code → binary conversion, and that binary value is exactly the number of steps needed to reduce the number to 0.
The final solution is O(log n) and much simpler than the rules suggest when you first read them.
