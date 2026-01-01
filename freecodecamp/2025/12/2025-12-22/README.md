# 2025-12-22
[2025-12-22 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-22)

## Instructions

Traveling Shopper
Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.
- The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
- Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:
Currency	1 Unit Equals
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
- If you can afford all the items in the list, return "Buy them all!".
- Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

## My Thoughts

This problem looked simple at first, but the moment currencies were involved, it became clear that normalization was the real challenge. Once I stopped thinking in terms of different currencies and instead converted everything into a single base currency, the logic became straightforward. Processing the items in order also mattered more than I initially expected. This wasn’t about finding the cheapest combination, it was about simulating a real shopping experience where you buy items sequentially until you run out of money. That clarified why a simple loop was the right approach instead of anything more complex. I also had to be mindful of floating-point precision. Small rounding errors can cause incorrect comparisons when working with money, so even a tiny epsilon check can make the solution more reliable.

## What I Learned

- Converting all values to a single unit of measure early simplifies the rest of the logic.
- Reading problem constraints carefully prevents overengineering (this wasn’t a knapsack problem).
- Sequential simulations often beat optimization-based thinking when order matters.
- Floating-point math can introduce subtle bugs when dealing with currency.
- Clear helper functions (like toUSD) improve readability and reduce mistakes.
- Many problems become trivial once the “domain translation” step is done correctly.
