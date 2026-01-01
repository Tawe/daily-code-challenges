# 2025-11-21
[2025-11-21 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-21)

## Instructions



## My Thoughts

At first, I approached the LCM problem by literally generating multiples and comparing them. Conceptually it made sense, keep listing multiples of each number until they match, but the implementation quickly felt clunky. I was pushing values into arrays, checking membership with .includes(), and it became obvious that the solution was doing way more work than necessary. The underlying idea was right (find the first common multiple), but the approach wasn’t efficient or elegant. That made me realize I was solving the surface of the problem but not understanding the structure underneath it.

## What I Learned

- LCM isn’t just about matching multiples it has a deep mathematical relationship with GCD.
The formula - lcm(a, b) = |a × b| / gcd(a, b) - instantly transforms the problem from a looping brute-force approach into a logarithmic-time solution.
- The Euclidean algorithm for gcd is extremely efficient and easy to implement. Once I had this, computing the LCM became a single line.
- My first approach grew arrays and checked membership repeatedly, which is unnecessary overhead. This problem is a great reminder that sometimes math gives you the optimal solution for free.
- Going from “simulate the process” to “use the underlying properties” is often the key difference between an OK solution and an optimal one.
