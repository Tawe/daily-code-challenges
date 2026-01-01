# 2025-12-12
[2025-12-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-12)

## Instructions



## My Thoughts

This problem looks like a simple data-update task, but there are a couple of quiet constraints hiding in the wording. The biggest one is order: the original inventory order must be preserved, and any new items must be appended in the exact order they appear in the shipment. That immediately rules out approaches that sort or rebuild the inventory from scratch. My first instinct was to use nested loops, for each shipment item, scan the inventory to see if it exists. That works functionally, but it doesn’t scale well and it obscures the real intent of the problem. The inventory isn’t changing structurally very often; it’s just being updated. The turning point was realizing that this is really a lookup problem, not a transformation problem. If I can quickly answer “where does this item live in the inventory?”, then the update logic becomes trivial. A map from item name to inventory index gives exactly that, while still letting the inventory array remain the source of truth for ordering. Once that structure was in place, the rest of the solution became almost declarative: update quantities if present, otherwise append. No extra passes, no reordering, and no unnecessary complexity. This challenge was a good reminder that many problems aren’t about clever algorithms, they’re about choosing the right data structure to express intent clearly.

## What I Learned

- Order constraints shape the solution.
Preserving original order while appending new items rules out rebuilding or sorting approaches.
- When identity matters, indexing matters.
Mapping item names to indices turns repeated searches into constant-time operations.
- Nested loops are often a signal, not a solution.
If you find yourself repeatedly scanning the same structure, it’s usually time to introduce a lookup table.
- Keep one source of truth.
The inventory array holds the data and order; the map exists only to accelerate access.
- Simple problems still reward clean structure.
Even when constraints are small, choosing clarity and efficiency builds better habits for larger systems.
- This mirrors real-world state updates.
Many production systems work exactly like this: index existing state, apply updates, append new records without disturbing history.
