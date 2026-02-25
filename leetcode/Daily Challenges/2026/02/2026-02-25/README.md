# 2026-02-25

## Instructions
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

```
Example 1:
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
``` 

Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 10^4

## My Thoughts

This is a custom sort with two keys:

- Primary key: number of `1` bits in each number (`popcount`)
- Secondary key: the numeric value itself (ascending)

In PHP, `usort` is a clean fit for this:

- Compute `countBits($a)` and `countBits($b)`
- If bit counts are equal, compare values with `$a <=> $b`
- Otherwise compare bit counts with `$bitsA <=> $bitsB`

For counting bits, I used:

- `decbin($num)` to convert to binary string
- `substr_count(..., '1')` to count set bits

Time complexity is `O(n log n * k)`, where `k` is the bit-count cost (small here, up to ~14 bits).  
Space complexity is `O(log n)` from sorting recursion (implementation-dependent).

## What I Learned

- Problems that say “sort by X, tie-break by Y” map directly to comparator-based sorting.
- A tuple-like comparison (`bits`, then `value`) avoids extra post-processing.
- Even a string-based popcount approach is fine under small constraints and keeps code readable.
