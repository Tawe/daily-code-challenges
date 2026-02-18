# 2026-01-31
[2026-01-31 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-31)

## Instructions

Zodiac Finder
Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:
Date Range	Zodiac Sign
March 21 - April 19	"Aries"
April 20 - May 20	"Taurus"
May 21 - June 20	"Gemini"
June 21 - July 22	"Cancer"
July 23 - August 22	"Leo"
August 23 - September 22	"Virgo"
September 23 - October 22	"Libra"
October 23 - November 21	"Scorpio"
November 22 - December 21	"Sagittarius"
December 22 - January 19	"Capricorn"
January 20 - February 18	"Aquarius"
February 19 - March 20	"Pisces"
Zodiac signs are based only on the month and day, you can ignore the year.

## My Thoughts

This challenge was mostly about carefully handling date ranges rather than doing anything algorithmically complex. The trickiest part wasn’t parsing the input — splitting the date string into month and day was straightforward, but dealing with zodiac signs that cross over the end of the year. Capricorn stood out immediately as the odd one, since it spans December into January. Handling that case explicitly first made the rest of the logic much cleaner, because all the remaining zodiac signs live fully within a single calendar year. Using a list of ranges felt like a good balance between readability and flexibility. Instead of writing a long chain of if/elif statements, looping through structured data made the solution easier to reason about and maintain. Overall, this felt like a good example of turning a “lookup” style problem into clean, data-driven code.

## What I Learned

- When working with dates, edge cases around year boundaries are often the hardest part.
- Pulling special cases (like Capricorn crossing years) out early can simplify the rest of the logic.
- Representing rules as data (ranges in a list) is often cleaner than hard-coding many conditionals.
- Parsing input into clear primitives (month, day) makes comparisons much easier.
- A small fallback return (like defaulting to Capricorn) can act as a safety net, even if all cases are covered.
- Problems like this are less about clever tricks and more about careful, readable logic.
