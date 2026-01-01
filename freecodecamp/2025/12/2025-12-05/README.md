# 2025-12-05
[2025-12-05 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-05)

## Instructions



## My Thoughts

At first glance, the symmetric difference problem seemed almost too straightforward, take the items that appear in one list but not the other. But once I started implementing it, I realized there were a few subtle constraints that mattered more than the actual set logic. The biggest mental shift was recognizing that this isn’t a pure mathematical symmetric difference. In set theory, order doesn’t matter. But here, the result must preserve the order in which the values first appear across the input arrays. That single detail immediately ruled out simply converting everything into sets and calling it a day. I also caught myself overcomplicating the solution at first. I kept thinking I should compare counts or produce a combined map of frequencies. But the problem becomes much clearer when you focus on the truth of the condition: A value appears in the result if it is in exactly one of the two inputs. Once that clicked, the implementation became almost mechanical: - Build a set for fast lookup in each array.
- Iterate through a and add values not in b.
- Iterate through b and add values not in a.
- Prevent duplicates since order matters and input arrays might contain repeats. The result wasn’t a clever algorithm, it was a clean one. And sometimes the simplest solution is the right one, as long as it meets every requirement, including the subtle ones.

## What I Learned

- Symmetric difference in programming is not always the same as the mathematical definition.
Here, preserving input order transforms the problem from a pure set operation into a controlled iteration problem.
- Sets are perfect for the “is this element in the other list?” check.
- O(1) lookups make the logic clean and efficient without extra complexity.
- Order requirements change the entire shape of the solution.
- Even if sets give you the unique values instantly, you still have to determine when they first appeared.
- Iterating both arrays separately is not duplication, it enforces the correct ordering.
- Duplicate filtering needs to be intentional.
Without checking whether a value has already been added, you can violate the “first appearance only” rule.
- Simple problems often become clearer when you stop trying to optimize too early.
It’s easy to reach for frequency maps, but in this case, direct membership checks were all that was needed.
