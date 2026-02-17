# 2026-02-17

## Instructions
A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".


Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".
 
```
Example 1:
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Example 2:
Input: turnedOn = 9
Output: []
```

Constraints:

0 <= turnedOn <= 10

## My Thoughts

This solution brute-forces every valid watch time and filters by how many LEDs are on.

- Loop through all possible hours (`0..11`) and minutes (`0..59`)
- Convert each to binary and combine them
- Count `'1'` bits with `substr_count(...)`
- If the count matches `turnedOn`, format and store the time with `sprintf("%d:%02d", $h, $m)`

I like this approach because the search space is tiny (`12 * 60 = 720`), so readability is more important than micro-optimizing.

## What I Learned

- For small bounded spaces, full enumeration is often the cleanest and safest approach.
- `substr_count(decbin($h) . decbin($m), '1')` is a quick way to get total set bits without manual bit loops.
- `sprintf("%d:%02d", $h, $m)` is the easiest way to enforce minute zero-padding while keeping hours unpadded.
