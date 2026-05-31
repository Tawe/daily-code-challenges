# 2026-05-31

## Instructions
You are given an integer `mass`, which represents the original mass of a planet. You are further given an integer array `asteroids`, where `asteroids[i]` is the mass of the `i`th asteroid.

You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.

Return `true` if **all** asteroids can be destroyed. Otherwise, return `false`.

**Example 1:**
**Input:** mass = 10, asteroids = [3,9,19,5,21]
**Output:** true
**Explanation:**
One way to order the asteroids is `[3, 5, 9, 19, 21]`:
- 10 >= 3, so the planet absorbs it and becomes 13
- 13 >= 5, so the planet absorbs it and becomes 18
- 18 >= 9, so the planet absorbs it and becomes 27
- 27 >= 19, so the planet absorbs it and becomes 46
- 46 >= 21, so the planet absorbs it and becomes 67
All asteroids are destroyed.

**Example 2:**
**Input:** mass = 5, asteroids = [4,9,23,4]
**Output:** false
**Explanation:**
Even if we sort them as `[4, 4, 9, 23]`:
- 5 >= 4, so the planet becomes 9
- 9 >= 4, so the planet becomes 13
- 13 >= 9, so the planet becomes 22
- 22 < 23, so the planet is destroyed

**Constraints:**
- `1 <= mass <= 10^5`
- `1 <= asteroids.length <= 10^5`
- `1 <= asteroids[i] <= 10^5`

## Solution

Use a greedy strategy: destroy the smallest asteroids first.

### Key idea

If the planet can destroy some set of asteroids, it is always best to absorb the lighter ones first.

Why:

- smaller asteroids are easier to destroy
- every destroyed asteroid increases the planet’s mass
- gaining mass earlier can only help with larger asteroids later

So the algorithm is:

1. Sort `asteroids` in ascending order
2. Scan from smallest to largest
3. For each asteroid:
   - if `mass < asteroid`, return `false`
   - otherwise, add the asteroid’s mass to `mass`
4. If the scan finishes, return `true`

### Why this works

Suppose there are two asteroids `a <= b`.
If the planet can destroy `b`, then destroying `a` first is never worse:

- `a` is at least as easy to destroy as `b`
- after absorbing `a`, the planet is even larger

So any successful order can be rearranged into non-decreasing order without hurting feasibility.
That means checking the sorted order is enough.

### Complexity

- Time: `O(n log n)` because of sorting
- Space: `O(1)` extra, ignoring the sort implementation details

This is efficient enough for the given constraints.
