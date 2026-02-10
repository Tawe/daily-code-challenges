# 2026-02-10
[2026-02-10 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-10)

## Instructions
2026 Winter Games Day 5: Cross-Country Skiing
Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

Given times are strings in "H:MM:SS" format.
Given times will be in order from fastest to slowest.
The winners time (fastest time) should correspond to "0".
Each other time should show the time behind the winner, in the format "+M:SS".
For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].

## My Thoughts

This one was all about careful parsing and formatting. Converting `"H:MM:SS"` into total seconds made the math simple, then formatting the difference back into `"+M:SS"` kept the output readable. I also liked pulling the parsing into a helper to avoid repeating the split/convert logic.

## What I Learned
• Turning formatted time strings into total seconds is a reliable way to compare and subtract times.
• Even small output details matter: the winner should be `"0"` and seconds should always be zero-padded.
• A tiny helper function (`toSeconds`) keeps the main loop focused on the actual problem.
