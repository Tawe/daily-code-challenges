# 2025-11-07

## Instructions
you are given a 0-indexed integer array stations of length n, where stations[i] represents the number of power stations in the ith city.

Each power station can provide power to every city in a fixed range. In other words, if the range is denoted by r, then a power station at city i can provide power to all cities j such that |i - j| <= r and 0 <= i, j <= n - 1.

Note that |x| denotes absolute value. For example, |7 - 5| = 2 and |3 - 10| = 7.
The power of a city is the total number of power stations it is being provided power from.

The government has sanctioned building k more power stations, each of which can be built in any city, and have the same range as the pre-existing ones.

Given the two integers r and k, return the maximum possible minimum power of a city, if the additional power stations are built optimally.

Note that you can build the k power stations in multiple cities.

 

### Example 1:

Input: stations = [1,2,4,5,0], r = 1, k = 2
Output: 5
Explanation: 
One of the optimal ways is to install both the power stations at city 1. 
So stations will become [1,4,4,5,0].
- City 0 is provided by 1 + 4 = 5 power stations.
- City 1 is provided by 1 + 4 + 4 = 9 power stations.
- City 2 is provided by 4 + 4 + 5 = 13 power stations.
- City 3 is provided by 5 + 4 = 9 power stations.
- City 4 is provided by 5 + 0 = 5 power stations.
So the minimum power of a city is 5.
Since it is not possible to obtain a larger power, we return 5.
Example 2:

Input: stations = [4,4,4,4], r = 0, k = 3
Output: 4
Explanation: 
It can be proved that we cannot make the minimum power of a city greater than 4.
 

### Constraints:

n == stations.length
1 <= n <= 105
0 <= stations[i] <= 105
0 <= r <= n - 1
0 <= k <= 109

## My Thoughts
1. Understanding “power”

For each city, its total power = the sum of all stations within r of it.
I started by figuring out how to calculate that using a sliding window / prefix sum so I could quickly get every city’s base power.

2. Realizing it’s an optimization problem

Adding a new station boosts several cities at once, depending on r.
I needed to figure out where to put the new stations so that the smallest city’s power became as high as possible.

3. Binary search on the answer

Instead of trying every possible placement, I flipped the problem around:

Pick a target value X (the minimum power we want).

Ask: “Can I make every city’s power at least X using ≤ k new stations?”

If yes, try a bigger X.

If no, lower it.
Repeat until we find the largest X that works.

That pattern, guess, test, adjust. is binary search on the answer.

4. Greedy “can we reach X?” check

To test if a target X is possible:

Move left to right through the cities.

Track how much extra power is currently affecting each city (from stations I’ve already placed).

If a city is below X, drop the needed number of new stations as far right as possible, so they help this city and future ones.

Keep count of how many I’ve placed.
If I ever need more than k, that X isn’t possible.

A small difference array kept this running update fast (O(n) time).

5. Fixing my upper bound mistake

My first version stopped the binary search too early, the upper bound was too small, so it never even tested the real answer.
I learned to set a safe bound instead of a “tight guess.”
Here, minBase + k worked because each new station can raise any one city’s power by at most +1.

Final logic

Compute each city’s current power.

Binary search the target minimum power.

Use a greedy check with a difference array to see if that target is possible with k new stations.

Return the highest working value.

Complexity

Time: O(n log answer)
Space: O(n)


## What I learned

- Binary search isn’t just for sorted arrays. you can “search the answer space.”
- Greedy with a sliding window can turn a complicated placement problem into a simple left-to-right pass
- Getting the bounds right in binary search matters as much as the logic inside.
-It’s okay to build your understanding in layers: Start with “what’s power?”, then simulate a small case,
then introduce optimizations (prefix sums, diff array, binary search).