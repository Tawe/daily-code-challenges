# 2025-11-07
[2025-11-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-07)
## Instructions

**Counting Cards** 
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.

For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.


## My Thoughts
At first, I thought of it like “how many ways can I split 52 by some number,” but really it’s about how many groups of that size you can form from the deck.

So if you pick 2 cards, you’re asking:

how many unique pairs exist in a set of 52?

To build intuition, I tried smaller examples.
With 3 cards (A, B, C), the unique pairs are AB, AC, and BC, so 3 total.
Listing them out showed that (A,B) and (B,A) are the same, meaning order doesn’t matter.

That led me to realize this is a combinations problem, not a permutation one.
You count all possible ordered picks first, then divide out all the duplicate orders (since every hand can be rearranged in multiple ways).

At one point I wrote a loop multiplying (cards - i) and realized that was wrong, I was counting down from the wrong side. It needed to count down from 52 instead.

Then I simplified it using a clean one-loop formula that multiplies and divides at each step, so it never blows up into huge numbers.

### What I Learned
- It’s easy to mix up arrangements with combinations.
- Dividing by just k isn’t enough, you have to divide by all the ways to reorder those cards (k!).
- The multiply/divide pattern is both faster and easier to read than computing big factorials.


