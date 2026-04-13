# 2026-04-12

## Instructions
  
![](https://assets.leetcode.com/uploads/2020/01/02/leetcode_keyboard.png)

You have a keyboard layout as shown above in the **X-Y** plane, where each English uppercase letter is located at some coordinate.

- For example, the letter `'A'` is located at coordinate `(0, 0)`, the letter `'B'` is located at coordinate `(0, 1)`, the letter `'P'` is located at coordinate `(2, 3)` and the letter `'Z'` is located at coordinate `(4, 1)`.

Given the string `word`, return _the minimum total **distance** to type such string using only two fingers_.

The **distance** between coordinates `(x1, y1)` and `(x2, y2)` is `|x1 - x2| + |y1 - y2|`.

**Note** that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

**Example 1:**
**Input:** word = "CAKE"
**Output:** 3
**Explanation:** Using two fingers, one optimal way to type "CAKE" is: 
Finger 1 on letter 'C' -> cost = 0 
Finger 1 on letter 'A' -> cost = Distance from letter 'C' to letter 'A' = 2 
Finger 2 on letter 'K' -> cost = 0 
Finger 2 on letter 'E' -> cost = Distance from letter 'K' to letter 'E' = 1 
Total distance = 3

**Example 2:**
**Input:** word = "HAPPY"
**Output:** 6
**Explanation:** Using two fingers, one optimal way to type "HAPPY" is:
Finger 1 on letter 'H' -> cost = 0
Finger 1 on letter 'A' -> cost = Distance from letter 'H' to letter 'A' = 2
Finger 2 on letter 'P' -> cost = 0
Finger 2 on letter 'P' -> cost = Distance from letter 'P' to letter 'P' = 0
Finger 1 on letter 'Y' -> cost = Distance from letter 'A' to letter 'Y' = 4
Total distance = 6

**Constraints:**
- `2 <= word.length <= 300`
- `word` consists of uppercase English letters.

## My Thoughts

This challenge branches at every character, so it naturally turns into dynamic programming. For each position in the word, I can either move the first finger to the next letter or move the second finger, and I want the cheaper of those two choices over the full word.

The Rust solution handles that with DFS plus memoization. The state stores the current index and the positions of both fingers. If a finger has not been used yet, moving it to its first letter costs `0`, which matches the problem statement and keeps the transitions simple.

One detail I liked here was normalizing the two finger positions before caching. Since the fingers are interchangeable in terms of total cost, that cuts down duplicate states and makes the memoization table more efficient.

### Complexity

- Time: `O(n * 26 * 26)`
- Space: `O(n * 26 * 26)`

## What I Learned

This problem reinforced how useful memoization is when a decision tree keeps revisiting the same situations. The important state was not just the current index, but also where both fingers are resting.

It was also a good reminder that symmetric state can often be normalized. When two values play the same role, canonicalizing them can reduce repeated work without changing the answer.
