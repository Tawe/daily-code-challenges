# 2025-12-11
[2025-12-11 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-11)

## Instructions



## My Thoughts

Even though Roman numerals are familiar, converting integers into them is surprisingly structured. My first instinct was to treat it like a digit-by-digit translation problem, break the number into thousands, hundreds, tens, and ones, then map each to its Roman form. That would work, but it felt clunky and full of branching logic. The moment that simplified everything was recognizing that Roman numerals are essentially a greedy system. You always choose the largest Roman value that fits into the remaining number. Once I shifted to thinking in terms of “consume the biggest chunk possible,” the whole problem became a straightforward loop. The only real complication is the subtractive cases (4, 9, 40, 90, etc.), but even those become trivial once you treat them as just more entries in the value/symbol list. There’s no need to write special conditions for them, the greediness handles everything automatically. What initially seemed like a formatting problem ended up being an elegant example of how powerful a well-ordered lookup table can be. Once the values are sorted from largest to smallest, the algorithm practically writes itself.

## What I Learned

- Roman numerals are inherently greedy.
You always pick the largest possible symbol at each step, which turns the entire conversion into a simple subtraction loop.
- Subtractive pairs don’t need special logic.
Treat IV, IX, XL, XC, CD, and CM as standard symbols in the mapping and the system naturally avoids illegal repeats.
- Good ordering simplifies the entire problem.
The descending value list (1000 → 1) eliminates branching and makes the algorithm linear and predictable.
- Formatting systems often map nicely to data-driven solutions.
By structuring the symbol/value pairs in arrays, the control flow becomes almost trivial.
- Many classical “pattern recognition” problems reduce to greedy strategies.
- If a representation uses fixed symbols and fixed rules, greediness often matches the underlying mathematical structure.
