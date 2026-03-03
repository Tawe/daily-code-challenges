# 2026-03-03

## Instructions
Given two positive integers n and k, the binary string Sn is formed as follows:

S1 = "0"
Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).

For example, the first four strings in the above sequence are:

S1 = "0"
S2 = "011"
S3 = "0111001"
S4 = "011100110110001"
Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

```
Example 1:
Input: n = 3, k = 1
Output: "0"
Explanation: S3 is "0111001".
The 1st bit is "0".

Example 2:
Input: n = 4, k = 11
Output: "1"
Explanation: S4 is "011100110110001".
The 11th bit is "1".
```

Constraints:

1 <= n <= 20
1 <= k <= 2^n - 1

## My Thoughts

The full string grows exponentially, so building `Sn` directly would be wasteful. The better approach is to use the structure of the definition.

Each string is built like this:

- left half: `S(n - 1)`
- middle bit: `"1"`
- right half: `reverse(invert(S(n - 1)))`

That means every position in `Sn` falls into one of three cases:

- If `k` is exactly the middle position, the answer is always `"1"`
- If `k` is in the left half, it is the same as the `k`th bit of `S(n - 1)`
- If `k` is in the right half, it mirrors some position in the left half, but with the bit inverted

So instead of generating the string, we keep shrinking the problem:

- compute the total length of `Sn`
- find the middle index
- recurse into the left side directly, or recurse into the mirrored index and flip the result

The mirrored position is:

- `length + 1 - k`

That is exactly what the Go solution does.

Because each recursive call reduces `n` by `1`, the time complexity is `O(n)` and the recursion depth is also `O(n)`.

## What I Learned

- Recursive string constructions often hide a much smaller positional recursion.
- The right half of this sequence is not arbitrary; it is a mirrored and inverted copy of the left half.
- When a problem asks for one character, it is usually worth avoiding construction of the entire string.
