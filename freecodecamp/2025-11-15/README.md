# 2025-11-15
[2025-11-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-15)
## Instructions
GCD
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

## My Thoughts
At first I went with the most straightforward way to solve this: start from the smaller number and work downward until I find the largest value that divides both inputs. It’s easy to reason about, and it matches the literal definition of GCD, “the biggest number that divides evenly into both.” The brute-force approach was actually a nice way to confirm I understood the problem, but it quickly became clear it wasn’t very efficient.

If the smaller number is large, this method may end up checking every integer all the way down to 1. It works, but it’s definitely not elegant.

The interesting part is that this challenge connects directly to the “count operations until one number becomes zero” problem I solved earlier. That one ended up being a disguised version of the Euclidean algorithm and GCD itself is exactly what the Euclidean algorithm computes. So in a way, I had already learned the optimal approach before I started this challenge.

Once I recognized the pattern, the problem changed from “check every divisor” to “just apply the Euclidean algorithm.” That version is both shorter and dramatically faster.

## What I Learned
- My first solution (checking downward from the smaller number) is correct but O(n) in the worst case.
- The optimal solution uses the Euclidean algorithm, which repeatedly does:
    - gcd(a, b) → gcd(b, a % b)
    - and stops when b becomes 0.
- This turns the runtime into O(log n) — massively better for large inputs.
- GCD, repeated subtraction, and modulo operations are all tied together. The “count operations” problem from earlier was a hidden version of this exact algorithm.
- Sometimes the brute-force approach is great for understanding the core idea, but recognizing the underlying mathematical structure is what leads to the optimal soluti