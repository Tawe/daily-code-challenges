# 2025-12-09
[2025-12-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-09)

## Instructions.
Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.

## My Thoughts

This challenge looked simple on the surface—just find the most frequent element—but it still reinforces some useful patterns about how to work with frequency problems efficiently. My first instinct was to iterate over the array and count occurrences in an object, which is the typical approach. The second part is choosing how to extract the element with the highest count.

My original solution used Object.entries(...).reduce(...). It worked fine, but it made me realize how often I overuse functional tools when a simpler incremental approach would be clearer. I also noticed that I was doing two passes: one to build the frequency map and one to find the max frequency. That’s still O(n), but it’s also unnecessary tracking the max as I build the map is just as efficient and eliminates an entire pass over the data structure.

Problems like this are also a nice reminder that objects (or maps) are incredibly powerful in JavaScript for solving frequency related tasks, and that the shape of your solution often comes down to readability and intention rather than raw performance.

Even simple exercises like this help sharpen instincts: reduce where needed, simplify where possible, and think about whether extra passes or abstractions actually buy you anything.

## What I Learned

- Frequency maps are the go-to pattern for counting occurrences in O(n) time.
- You can track the maximum while counting instead of doing a second pass with reduce.
- Simple loops are often clearer than extra functional layers—especially for interview-style challenges.
- JavaScript object keys become strings, so converting back to numbers (if needed) is something to be aware of.
- hasOwnProperty isn’t always ideal—Object.prototype.hasOwnProperty.call(...) is the safer version if prototype pollution is possible.
- Even small challenges are a good opportunity to practice writing code that’s both efficient and clean.