# 2025-11-18

## Instructions

1-bit and 2-bit Characters

We have two special characters:
The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

Example 1:

Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.
Example 2:

Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.

Constraints:

1 <= bits.length <= 1000
bits[i] is either 0 or 1.

## My Thoughts

This problem looks ridiculously simple at first glance — it’s literally just zeros and ones. My first instinct was to check the second-last bit:
- if it’s 1, the last 0 must be part of a 10;
- if it’s 0, the last 0 must stand alone.
But that approach falls apart the moment you test real inputs. The decoding isn’t determined by just the last two bits; it’s determined by how the entire sequence groups together according to the “1-bit vs 2-bit” rules. That makes this problem a lot more subtle than it looks.
The key realization is that you can’t shortcut decoding: a 1 always pulls the next bit with it, and those groupings can shift depending on what came before. Once you see that, the final bit depends on whether the decoding process naturally “lands” on it or skips over it. That insight makes the problem more predictable, and far more interesting, than I expected.

## What I Learned

You can’t determine the answer just by looking at the last two bits, the decoding depends on the entire sequence.
- A 1 always consumes the next bit, which means earlier 1s affect how far along the pointer moves.
- The cleanest mental model is to “walk” through the array the same way the decoder would:
    - 0 → move 1
    - 1 → move 2
- The final answer is simply whether the walk ends on the last bit or past it.
- This problem reinforces a useful lesson:
Sometimes the correct solution is simulating the process, not trying to hack around it with a shortcut.
