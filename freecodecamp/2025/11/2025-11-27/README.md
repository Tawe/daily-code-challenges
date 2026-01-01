

## Instructions

What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.
Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.

## My Thoughts

For this challenge, I went in expecting something trickier. Age calculations usually come with weird edge cases, timezone quirks, or off-by-one errors. But after breaking down the problem, I realized it’s really about one thing: determining whether someone has already had their birthday this year relative to a fixed date. My first instinct was to reach for JavaScript’s Date object, because it naturally handles differences in years, months, and days. But even with that, I had to be careful. When I tested my initial code, I noticed that I accidentally set the target date to November 25th instead of November 27th, a tiny mistake that would throw off anyone with a late-November birthday by one or two years. It reinforced how fragile date logic can feel, even when the solution is simple. After that correction, the structure made sense: - Compute the raw difference in years,
- Then subtract one if the birthday hasn’t happened yet in 2025. It’s a pattern I’ve used before, but it always feels good to see it hold up cleanly. What surprised me a little is that you don’t actually need Date objects at all, parsing the year, month, and day into numbers works just as well and avoids any potential timezone oddities. But for most coding challenges, sticking with new Date() is extremely readable and totally fine. This one ended up being more about precision than difficulty: making sure the reference date was correct, structuring the comparison properly, and avoiding off-by-one traps.

## What I Learned

- Age calculation is basically:
currentYear, birthYear,
adjusted by whether the birthday has occurred yet this year. - The key condition is comparing months and days: ```js
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) { age--;
}
``` This captures all “birthday hasn’t happened yet” cases. - Small mistakes in hard-coded dates can create off-by-one errors, especially for birthdays late in the year — a good reminder to always double-check fixed date inputs.
- Using JavaScript Date objects is fine for this problem, but manually parsing YYYY-MM-DD can avoid timezone complications entirely.
- This challenge reinforced that not every date problem needs overthinking, often the cleanest solution is the one that directly mirrors real-world logic:
have they had their birthday yet or not?
