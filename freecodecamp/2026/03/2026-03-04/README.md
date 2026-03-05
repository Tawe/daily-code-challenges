# 2026-03-04
[2026-03-04 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-04)

## Instructions
Playing Card Values
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:
- An Ace (`"A"`) has a value of `1`.
- Numbered cards (`"2"` - `"10"`) have their face value.
- Face cards: Jack (`"J"`), Queen (`"Q"`), and King (`"K"`) are each worth `10`.

Suits:
- Each card has a suit: Spades (`"S"`), Clubs (`"C"`), Diamonds (`"D"`), or Hearts (`"H"`).

Card Format:
- Each card is represented as a string in `"valueSuit"` format.
  Examples: `"AS"`, `"10H"`, `"QC"`.

## My Thoughts

This challenge is mostly about parsing the card string cleanly and then mapping rank symbols to numbers.

The solution handles it in two steps for each card:

- remove the suit character (`S`, `H`, `D`, or `C`) to isolate the rank
- convert the rank into a numeric value using simple rules

Rank mapping logic:

- `A` maps to `1`
- `J`, `Q`, and `K` map to `10`
- everything else is already a number string (`2` to `10`), so `int(value)` works directly

Because we process each card once and append to a result list, the approach is straightforward and efficient.

Time complexity is `O(n)` for `n` cards, and extra space is `O(n)` for the returned array.

## What I Learned

- Separating parsing from mapping makes string-format problems easier to reason about.
- A small explicit mapping for special cases (`A`, `J`, `Q`, `K`) keeps the logic readable.
- For well-structured inputs, a simple one-pass transform is usually the cleanest solution.
