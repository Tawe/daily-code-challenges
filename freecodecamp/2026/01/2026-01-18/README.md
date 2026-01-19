# 2026-01-18
[2026-01-18 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-18)

## Instructions
Free Shipping
Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:

Item	Price
"shirt"	34.25
"jeans"	48.50
"shoes"	75.00
"hat"	19.95
"socks"	15.00
"jacket"	109.95

## My Thoughts

This challenge was straightforward and mostly about clean data modeling. Once I represented the item prices in a dictionary, the rest of the logic became trivial: iterate through the cart, sum the prices, and compare against the minimum required for free shipping.

Using item.lower() was a nice defensive touch to make the function more robust to input casing. There weren’t any tricky edge cases here, just careful arithmetic and lookup.

## What I Learned
	•	Dictionaries are ideal for fixed lookup tables like product pricing.
	•	Most “business logic” problems are about clarity rather than algorithms.
	•	Summation + comparison patterns come up constantly in real-world code.
	•	Writing readable code is often more valuable than trying to be clever.
	•	Defensive input handling (like normalizing case) improves reliability.