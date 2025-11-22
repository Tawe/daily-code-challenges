## Instructions
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
```yaml
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
```

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100

## My Thoughts

My first instinct was to solve the problem directly: for each number, loop through the entire array and count how many values are smaller. That approach works and is easy to reason about, but it has a clear O(n²) shape. At this problem size (n <= 500), it’s fast enough, but it still felt like there should be a more clever way, especially because the required comparisons are simple and the range of values is limited.

What nudged me toward reconsidering the solution was noticing the constraint that every number is between 0 and 100. Once I recognized that the input values live in a tiny, fixed range, it became obvious that I didn’t need nested loops at all. I just needed to count things.

## What I Learned
- A brute-force O(n²) solution is acceptable at small input sizes, but constraints often hint at better methods. Here, the key insight was the value range (0–100).
- Problems involving “how many numbers are less than X” often reduce nicely to frequency counting and prefix sums.
- A frequency array lets you know exactly how many times each value appears, and a prefix sum over that array gives you the number of elements strictly smaller than any target value.
- This turns the problem from:
    - “compare everything with everything”
into
    - “look up a precomputed count.”
- The result is a clean O(n) solution that avoids unnecessary comparisons and scales well, even if the input size increased.
- This challenge reinforced a pattern I’m seeing more clearly now:
whenever values are bounded, use counts instead of comparisons.