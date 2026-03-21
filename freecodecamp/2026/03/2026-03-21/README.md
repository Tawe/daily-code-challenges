# 2026-03-21
[2026-03-21 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-21)

## Instructions
QR Decoder

Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.

- The QR code may be given in any rotation of 90 degree increments.
- A correctly oriented code has a 2x2 group of `1`'s (orientation markers) in the bottom-left, top-left, and top-right corners.
- The three 2x2 orientation markers are not part of the binary data.
- The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
- A code will always have exactly one valid orientation.

For example, given:

```js
[
  "110011",
  "110011",
  "000000",
  "000000",
  "110000",
  "110001"
]
```

or given the same code with a different orientation:

```js
[
  "110011",
  "110011",
  "000000",
  "000000",
  "000011",
  "100011"
]
```

Return `"000000000000000000000001"`, all the binary data excluding the three 2x2 orientation markers.

## My Thoughts

This problem breaks naturally into two parts:

- orient the QR code correctly
- extract the payload bits while skipping marker cells

I handled orientation by trying up to 4 rotations:

- check whether the current grid has `2x2` all-`1` markers in:
  - top-left
  - top-right
  - bottom-left
- if not, rotate 90 degrees clockwise and try again

Once the orientation is valid, the remaining work is just a left-to-right, top-to-bottom scan while ignoring the three `2x2` marker blocks.

Using a set of marker coordinates keeps the extraction step straightforward and avoids special-case branching during the scan.

Time complexity: `O(1)` in practice for fixed `6x6` input  
Space complexity: `O(1)`

## What I Learned

- When input may be rotated, it is often cleaner to normalize orientation first and then solve the main problem.
- Small fixed marker patterns are easy to validate with helper functions.
- Excluding known structural cells with coordinate membership checks keeps the readout logic simple.
- Breaking matrix problems into “transform, validate, extract” stages makes them easier to reason about.
