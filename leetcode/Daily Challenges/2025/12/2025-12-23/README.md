 2025-12-23

## Instructions
You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

Return this maximum sum.

Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.

 
```yaml
Example 1:
Input: events = [[1,3,2],[4,5,2],[2,4,3]]
Output: 4
Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.

Example 2:
Input: events = [[1,3,2],[4,5,2],[1,5,5]]
Output: 5
Explanation: Choose event 2 for a sum of 5.

Example 3:
Input: events = [[1,5,3],[1,5,1],[6,6,5]]
Output: 8
Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.
 ```

Constraints:

2 <= events.length <= 105
events[i].length == 3
1 <= startTimei <= endTimei <= 109
1 <= valuei <= 106

## My Thoughts

At first, this problem felt like a classic interval scheduling or knapsack-style problem, which made it tempting to think in terms of dynamic programming over time or brute-force combinations of events. But since you can attend at most two events, the problem is actually much more constrained than it first appears.

The key realization was that once you pick one event, the only thing that matters for the second event is whether it ends before the first one starts and what its value is. That makes the problem about efficiently pairing events, not planning long schedules.

Sorting the events by end time reframed the problem nicely. Instead of constantly checking overlaps, I could ask a simpler question: “What’s the best event that finishes before this one starts?” Once that clicked, binary search became the obvious tool.

What I Learned
	•	Constraints like “at most two” can radically simplify a problem.
	•	Sorting by end time is often the right choice for interval problems.
	•	Precomputing prefix maximums (bestUpTo) avoids repeated work.
	•	Binary search is a powerful companion to sorting when you need fast lookups.
	•	Inclusive time boundaries (end < start, not ≤) matter and can easily cause subtle bugs.
	•	Many scheduling problems aren’t about choosing many things, they’re about choosing the right pair.