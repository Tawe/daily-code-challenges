# 2025-12-19

## Instructions


You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.

Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.

The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.

```
Example 1:
Input: n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1
Output: [0,1,2,3,5]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 5, person 1 shares the secret with person 2.
At time 8, person 2 shares the secret with person 3.
At time 10, person 1 shares the secret with person 5.​​​​
Thus, people 0, 1, 2, 3, and 5 know the secret after all the meetings.

Example 2:
Input: n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3
Output: [0,1,3]
Explanation:
At time 0, person 0 shares the secret with person 3.
At time 2, neither person 1 nor person 2 know the secret.
At time 3, person 3 shares the secret with person 0 and person 1.
Thus, people 0, 1, and 3 know the secret after all the meetings.

Example 3:
Input: n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1
Output: [0,1,2,3,4]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 1, person 1 shares the secret with person 2, and person 2 shares the secret with person 3.
Note that person 2 can share the secret at the same time as receiving it.
At time 2, person 3 shares the secret with person 4.
Thus, people 0, 1, 2, 3, and 4 know the secret after all the meetings.
 ```

Constraints:

2 <= n <= 105
1 <= meetings.length <= 105
meetings[i].length == 3
0 <= xi, yi <= n - 1
xi != yi
1 <= timei <= 105
1 <= firstPerson <= n - 1

## My Thoughts

At first, this problem felt like a simple graph traversal: people are nodes, meetings are edges, and the secret spreads along those edges. My initial instinct was to simulate meetings one by one and pass the secret forward whenever someone already knew it.
However, the key detail that changed everything was the statement that secrets are shared instantaneously within the same time frame. That means knowledge can chain through multiple meetings that occur at the same time, but it cannot leak across different time groups unless the person already knew the secret before that time.
Once I recognized that time is a strict boundary, the problem became about processing meetings in chronological batches. Within each batch, people form temporary connected components, and only the components that already contain someone who knows the secret should spread it further.
This reframing made it clear that I needed a way to group people dynamically at each timestamp and then discard those groupings before moving on to the next time.

## What I Learned

- Time-based constraints can completely change how information flows through a graph.
- “Instantaneous sharing” implies that all events at the same time must be evaluated together, not sequentially.
- Union-Find (DSU) is a powerful tool for handling temporary connectivity.
- It’s often safer to delay committing state changes (like who knows the secret) until a full batch of events has been processed.
- Sorting by time and processing in groups is a common pattern for problems involving temporal dependencies.
- Carefully reading problem wording can reveal hidden constraints that invalidate naïve simulations.
