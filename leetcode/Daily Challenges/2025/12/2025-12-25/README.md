# 2025-12-25

## Instructions


You are given an array happiness of length n, and a positive integer k.

There are n children standing in a queue, where the ith child has happiness value happiness[i]. You want to select k children from these n children in k turns.

In each turn, when you select a child, the happiness value of all the children that have not been selected till now decreases by 1. Note that the happiness value cannot become negative and gets decremented only if it is positive.

Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.

```
Example 1:
Input: happiness = [1,2,3], k = 2
Output: 4
Explanation: We can pick 2 children in the following way:
- Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
- Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. Note that the happiness value cannot become less than 0.
The sum of the happiness values of the selected children is 3 + 1 = 4.

Example 2:
Input: happiness = [1,1,1,1], k = 2
Output: 1
Explanation: We can pick 2 children in the following way:
- Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0,0,0].
- Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0,0].
The sum of the happiness values of the selected children is 1 + 0 = 1.

Example 3:
Input: happiness = [2,3,4,5], k = 1
Output: 5
Explanation: We can pick 1 child in the following way:
- Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
The sum of the happiness values of the selected children is 5.
 ```

Constraints:

1 <= n == happiness.length <= 2 * 105
1 <= happiness[i] <= 108
1 <= k <= n

## My Thoughts

At first, the problem sounded more complicated than it actually was because of the repeated happiness decrements after each selection. It was tempting to simulate each turn and update every remaining child’s happiness, but that approach would be far too slow given the constraints.
The key insight was realizing that the order of selection is what really matters. Every time a child isn’t selected, they effectively lose one point of happiness per turn. So instead of tracking those decrements explicitly, I could account for them implicitly by subtracting the number of previous picks from the child’s original happiness.
Once I reframed the problem that way, it became obvious that I should always pick the child with the highest remaining happiness first. Sorting the array and adjusting by the pick index removed all the complexity.

## What I Learned

- When repeated operations affect all remaining elements equally, you can often model the effect mathematically instead of simulating it.
- Greedy strategies work well when earlier choices strictly dominate later ones.
- Sorting can transform a dynamic-looking problem into a simple linear pass.
- Constraints matter, simulating updates on every turn would not scale to large inputs.
- Using BigInt in JavaScript is important when sums can exceed safe integer limits.
- Many “process over time” problems reduce to value − time patterns once you spot the structure.
