# 2026-03-15

## Instructions
Write an API that generates fancy sequences using the `append`, `addAll`, and `multAll` operations.

Implement the `Fancy` class:

- `Fancy()` Initializes the object with an empty sequence.
- `void append(val)` Appends an integer `val` to the end of the sequence.
- `void addAll(inc)` Increments all existing values in the sequence by an integer `inc`.
- `void multAll(m)` Multiplies all existing values in the sequence by an integer `m`.
- `int getIndex(idx)` Gets the current value at index `idx` (0-indexed) of the sequence **modulo** `109 + 7`. If the index is greater or equal than the length of the sequence, return `-1`.

**Example 1:**

**Input**
["Fancy", "append", "addAll", "append", "multAll", "getIndex", "addAll", "append", "multAll", "getIndex", "getIndex", "getIndex"]
[[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]
**Output**
[null, null, null, null, null, 10, null, null, null, 26, 34, 20]

**Explanation**
Fancy fancy = new Fancy();
fancy.append(2);   // fancy sequence: [2]
fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
fancy.append(7);   // fancy sequence: [5, 7]
fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
fancy.getIndex(0); // return 10
fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
fancy.append(10);  // fancy sequence: [13, 17, 10]
fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
fancy.getIndex(0); // return 26
fancy.getIndex(1); // return 34
fancy.getIndex(2); // return 20

**Constraints:**

- `1 <= val, inc, m <= 100`
- `0 <= idx <= 105`
- At most `105` calls total will be made to `append`, `addAll`, `multAll`, and `getIndex`.

## My Thoughts

Doing `addAll`/`multAll` by looping over the whole sequence would be too slow (`O(n)` per operation).

The key trick is to keep a global affine transform:

- current value = `stored * mult + add (mod MOD)`

So:

- `addAll(inc)` only updates global `add`
- `multAll(m)` updates both global `mult` and global `add`

When appending `val`, store it in normalized form so that after applying current transform it becomes `val`:

- `stored = (val - add) * inv(mult) mod MOD`

Then `getIndex(i)` is just:

- `arr[i] * mult + add mod MOD`

This gives constant-time operations, with modular inverse computed via fast exponentiation (`a^(MOD-2)`).

Time complexity:

- `addAll`, `multAll`, `getIndex`: `O(1)`
- `append`: `O(log MOD)` due to modular inverse

Space complexity: `O(n)`

## What I Learned

- Global lazy transforms are a strong pattern when many updates apply uniformly to all elements.
- Affine forms (`x -> ax + b`) compose cleanly under repeated add/multiply operations.
- Normalizing values at insertion time avoids rewriting older entries.
- Modular inverse is essential for “undoing” the current multiplier when storing new elements.
