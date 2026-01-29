# 2026-01-29

## Instructions
You are given two 0-indexed strings source and target, both of length n and consisting of lowercase English letters. You are also given two 0-indexed character arrays original and changed, and an integer array cost, where cost[i] represents the cost of changing the character original[i] to the character changed[i].

You start with the string source. In one operation, you can pick a character x from the string and change it to the character y at a cost of z if there exists any index j such that cost[j] == z, original[j] == x, and changed[j] == y.

Return the minimum cost to convert the string source to the string target using any number of operations. If it is impossible to convert source to target, return -1.

Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i].
```
Example 1:
Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string "abcd" to string "acbe":
- Change value at index 1 from 'b' to 'c' at a cost of 5.
- Change value at index 2 from 'c' to 'e' at a cost of 1.
- Change value at index 2 from 'e' to 'b' at a cost of 2.
- Change value at index 3 from 'd' to 'e' at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.

Example 2:
Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
Output: 12
Explanation: To change the character 'a' to 'b' change the character 'a' to 'c' at a cost of 1, followed by changing the character 'c' to 'b' at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of 'a' to 'b', a total cost of 3 * 4 = 12 is incurred.

Example 3:
Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
Output: -1
Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from 'd' to 'e'.
```

Constraints:

1 <= source.length == target.length <= 105
source, target consist of lowercase English letters.
1 <= cost.length == original.length == changed.length <= 2000
original[i], changed[i] are lowercase English letters.
1 <= cost[i] <= 106
original[i] != changed[i]

## My Thoughts

This problem looks like a “string conversion” task at first, but it’s really a shortest-path problem on characters.

Each rule like a -> b with a cost is basically a directed edge in a graph where the nodes are the 26 lowercase letters. Since I can apply operations multiple times, converting one letter to another might be cheaper through intermediate letters (like a -> c -> b). That’s the key insight: I’m not just choosing direct swaps — I’m choosing the cheapest route between letters.

Once I saw it as “find the cheapest cost to convert every letter into every other letter,” Floyd–Warshall made perfect sense because the graph is tiny (26 nodes). After that preprocessing, the rest is straightforward: walk through source and target position by position and add the precomputed cheapest conversion cost.

If any character conversion is impossible (distance stays INF), I can immediately return -1.

Overall, this felt like a great example of using a heavy-hitting algorithm (all-pairs shortest path) because the input alphabet is small — and it makes the main loop over a 100k string super fast.


## What I Learned
	•	Some string problems are secretly graph problems, especially when “transformations” can chain.
	•	With only 26 letters, Floyd–Warshall is totally practical: 26³ is tiny.
	•	You need to take the minimum cost for duplicate edges (a -> b might appear multiple times).
	•	Precomputing all letter-to-letter costs turns a potentially complex problem into a simple linear pass over the string.
	•	Checking dist[a][b] === INF is the clean way to detect “conversion impossible.”
	•	This approach scales well because the expensive part is fixed-size (26 letters), not dependent on source.length.