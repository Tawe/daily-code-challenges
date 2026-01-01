# Q2. Shuffle the Array

## Instructions

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].


### Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
### Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
### Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]


Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3


## My Thoughts

At first, the problem looked a bit tricky because I wasn’t sure how the n value fit in. Once I realized that n represents the split point in the array—where the second half starts—it became much clearer.

Originally, I thought I needed to create two separate arrays using slice() and then combine them, but that turned out to be extra work. By noticing that the second half starts exactly at index n, I could just loop once and pick from both halves directly using nums[i] and nums[i + n].

That approach eliminated the two extra slice operations and made the code both simpler and faster. It runs in O(n) time and uses O(n) space, which is ideal for this problem.


## What I Learned

- n tells you exactly where to split the array.
- You only need one loop to “zip” the two halves together.
- Using direct indexing is cleaner and avoids unnecessary copies.
- Always think about how many times you touch the data — fewer passes usually mean better performance.
