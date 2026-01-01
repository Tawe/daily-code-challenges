# 2025-12-13

## Instructions

You are given three arrays of length n that describe the properties of n coupons: code, businessLine, and isActive. The ith coupon has:

code[i]: a string representing the coupon identifier.
businessLine[i]: a string denoting the business category of the coupon.
isActive[i]: a boolean indicating whether the coupon is currently active.
A coupon is considered valid if all of the following conditions hold:

- code[i] is non-empty and consists only of alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).
- businessLine[i] is one of the following four categories: "electronics", "grocery", "pharmacy", "restaurant".
- isActive[i] is true.
Return an array of the codes of all valid coupons, sorted first by their businessLine in the order: "electronics", "grocery", "pharmacy", "restaurant", and then by code in lexicographical (ascending) order within each category.

```
Example 1:

Input: code = ["SAVE20","","PHARMA5","SAVE@20"], businessLine = ["restaurant","grocery","pharmacy","restaurant"], isActive = [true,true,true,true]
Output: ["PHARMA5","SAVE20"]
Explanation:
First coupon is valid.
Second coupon has empty code (invalid).
Third coupon is valid.
Fourth coupon has special character @ (invalid).

Example 2:

Input: code = ["GROCERY15","ELECTRONICS_50","DISCOUNT10"], businessLine = ["grocery","electronics","invalid"], isActive = [false,true,true]
Output: ["ELECTRONICS_50"]
Explanation:
First coupon is inactive (invalid).
Second coupon is valid.
Third coupon has invalid business line (invalid).
 ```

Constraints:

n == code.length == businessLine.length == isActive.length
1 <= n <= 100
0 <= code[i].length, businessLine[i].length <= 100
code[i] and businessLine[i] consist of printable ASCII characters.
isActive[i] is either true or false.

## My Thoughts

This problem felt straightforward at first: filter invalid coupons, then sort the remaining ones by business line and code. The validation rules were explicit, and with small constraints, a direct approach made sense.
Where things got interesting was the sorting. My initial solution used localeCompare, which is usually the “right” tool when comparing strings in JavaScript. The logic passed most test cases, which made the failure especially frustrating, everything looked correct.
The failing test case exposed an assumption I didn’t realize I was making: that “lexicographical order” in the problem statement meant locale-aware string ordering. It doesn’t. The problem expects strict ASCII / code-unit ordering, where uppercase letters always come before lowercase ones.
Once I replaced localeCompare with direct < and > comparisons, the issue disappeared. The algorithm itself was fine, the bug was purely about how JavaScript defines “string comparison” by default.
This was a great reminder that correctness isn’t just about logic and data structures. Language details matter, especially when problems expect a very precise definition of ordering.

## What I Learned

- Lexicographical order ≠ locale-aware order.
When a problem says “lexicographical,” it usually means raw character code comparison, not natural-language collation.
- localeCompare can betray expectations in coding challenges.
It’s great for UI and user-facing sorting, but risky in competitive programming or strict-spec problems.
- Most bugs live at boundaries, not in core logic.
The filtering logic was correct; the entire failure came down to one comparator choice.
- Passing most test cases doesn’t mean the solution is right.
Edge cases exist specifically to challenge hidden assumptions.
- JavaScript abstractions can hide important details.
Operators like < and > sometimes give more predictable results than higher-level helpers.
- Sorting is part of correctness, not just presentation.
A logically correct dataset can still be “wrong” if ordering rules are misinterpreted.
