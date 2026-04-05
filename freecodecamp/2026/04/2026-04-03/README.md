# 2026-04-03
[2026-04-03 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-03)

## Instructions
Browser History

Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.

Valid commands are:

- `"URL"` - Where URL is a web address (`"freecodecamp.org"` for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
- `"Back"` - moves to the previous page in history, or stays on the current page if there isn't one.
- `"Forward"` - moves to the next page in history, or stays on the current page if there isn't one.

For example, given `["freecodecamp.org", "freecodecamp.org/learn", "Back"]`, return `[["freecodecamp.org", "freecodecamp.org/learn"], 0]`.

## My Thoughts

This is a straightforward state-simulation problem.

The two pieces of state are:

- `history`: the visited pages
- `currentIndex`: which page the browser is currently on

Then each command follows normal browser rules:

- `"Back"` moves the index left, but not below `0`
- `"Forward"` moves the index right, but not past the end of history
- a new URL:
  - deletes any forward history
  - appends the new page
  - moves the current index to that new page

Using `splice(currentIndex + 1)` is a clean way to drop the forward history before adding a new URL.

Time complexity: `O(n)` overall for processing commands, with array updates as needed  
Space complexity: `O(n)`

## What I Learned

- Browser-history problems are mostly about maintaining a small amount of mutable state correctly.
- Forward history should be discarded whenever a brand-new page is visited.
- Bounding the index with `Math.max` and `Math.min` keeps navigation logic simple.
- State-machine style problems become much easier when the rules are translated directly into updates on a few variables.
