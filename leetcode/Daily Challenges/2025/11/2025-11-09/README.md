# 2025-11-09

## Instructions

You are given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
Return the number of operations required to make either num1 = 0 or num2 = 0.

Example 1:

Input: num1 = 2, num2 = 3
Output: 3
Explanation:
- Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
- Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
- Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
So the total number of operations required is 3.
Example 2:

Input: num1 = 10, num2 = 10
Output: 1
Explanation:
- Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
So the total number of operations required is 1.

Constraints:

0 <= num1, num2 <= 105

## My Thoughts

This problem looked dead simple at first: just keep subtracting the smaller number from the bigger one until one of them hits zero. My first instinct was to literally simulate the process using a loop and one subtraction per iteration. That worked and matched the examples, but it felt a little brute-force.
The interesting part came when I realized this process behaves exactly like the Euclidean algorithm for computing the GCD, except instead of dividing, we’re counting every subtraction. When one number is much larger than the other, subtracting one-by-one is extremely inefficient. The loop can end up doing thousands of operations when really the answer is just “how many times does the smaller fit into the larger?”
Once I saw that, the problem changed from “simulate the process” to “compress the process.” Instead of subtracting repeatedly, I could jump ahead by subtracting the smaller number k times at once, where k is Math.floor(bigger / smaller). Then I just use % to get the remainder and continue. It still follows the exact rules of the problem, it just counts all the subtractions in one shot.
This made the solution go from a linear (and sometimes slow) loop to something that finishes in just a handful of steps regardless of input size.

## What I Learned

- This operation is basically the Euclidean algorithm in disguise, except we’re counting the number of subtractions.
- A naïve loop that subtracts once per iteration is correct, but can be O(n) in the size of the numbers.
-The optimized approach jumps ahead using:
    - times = Math.floor(bigger / smaller)
    - remainder = bigger % smaller
- That optimization turns the problem into O(log n), which is much more efficient.
- Sometimes the best solution isn’t “simulate exactly what the problem says,” but “understand the structure behind what the problem is doing.”
- Recognizing hidden patterns (like GCD-style behavior) can turn a brute-force solution into a clean, elegant one.
