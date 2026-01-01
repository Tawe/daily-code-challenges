# 2025-12-12

## Instructions

You are given an integer numberOfUsers representing the total number of users and an array events of size n x 3.

Each events[i] can be either of the following two types:

Message Event: ["MESSAGE", "timestampi", "mentions_stringi"]
This event indicates that a set of users was mentioned in a message at timestampi.
The mentions_stringi string can contain one of the following tokens:
id<number>: where <number> is an integer in range [0,numberOfUsers - 1]. There can be multiple ids separated by a single whitespace and may contain duplicates. This can mention even the offline users.
ALL: mentions all users.
HERE: mentions all online users.
Offline Event: ["OFFLINE", "timestampi", "idi"]
This event indicates that the user idi had become offline at timestampi for 60 time units. The user will automatically be online again at time timestampi + 60.
Return an array mentions where mentions[i] represents the number of mentions the user with id i has across all MESSAGE events.

All users are initially online, and if a user goes offline or comes back online, their status change is processed before handling any message event that occurs at the same timestamp.

Note that a user can be mentioned multiple times in a single message event, and each mention should be counted separately.

```
Example 1:

Input: numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]
Output: [2,2]
Explanation:
Initially, all users are online.

At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]

At timestamp 11, id0 goes offline.

At timestamp 71, id0 comes back online and "HERE" is mentioned. mentions = [2,2]

Example 2:

Input: numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]
Output: [2,2]
Explanation:
Initially, all users are online.

At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]

At timestamp 11, id0 goes offline.

At timestamp 12, "ALL" is mentioned. This includes offline users, so both id0 and id1 are mentioned. mentions = [2,2]

Example 3:

Input: numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]
Output: [0,1]
Explanation:
Initially, all users are online.

At timestamp 10, id0 goes offline.

At timestamp 12, "HERE" is mentioned. Because id0 is still offline, they will not be mentioned. mentions = [0,1]
```
Constraints:

1 <= numberOfUsers <= 100
1 <= events.length <= 100
events[i].length == 3
events[i][0] will be one of MESSAGE or OFFLINE.
1 <= int(events[i][1]) <= 105
The number of id<number> mentions in any "MESSAGE" event is between 1 and 100.
0 <= <number> <= numberOfUsers - 1
It is guaranteed that the user id referenced in the OFFLINE event is online at the time the event occurs.

## My Thoughts

This problem looked like a straightforward simulation at first: track who’s online, process events in timestamp order, and count mentions based on the message type. With small constraints, it felt safe to lean into a direct, readable approach instead of optimizing prematurely.
My initial solution almost worked, which is always the most dangerous place to be. The logic handled OFFLINE events, MESSAGE ordering, and even same-timestamp precedence correctly. But a subtle assumption slipped in: I only brought users back online when their return time exactly matched a timestamp where an event existed.
That assumption was wrong.
Users can return online at times where nothing happens. Their status still changes, and future HERE messages must reflect that. The failing test case made this painfully clear: a user returned at time 74, but the next event wasn’t until time 83, so they were incorrectly treated as offline.
The fix wasn’t complicated, but the lesson was important. Instead of checking for equality, I needed to treat time as continuous, if a user’s return time is less than or equal to the current event time, they must already be back online.
This was a classic simulation bug: the model was correct, but the timeline was discretized incorrectly.

## What I Learned

- State changes can happen between events.
Just because nothing is logged at a timestamp doesn’t mean nothing changes. Time-based simulations must account for implicit transitions.
- Equality checks are often a smell in time simulations.
Using === currentTime felt natural but was wrong. In ordered processing, <= currentTime is usually the correct condition.
- “Almost correct” solutions hide the best lessons.
The bug only showed up in a carefully constructed edge case, which forced me to examine my assumptions about how time advances.
- Ordering rules don’t stop at explicit events.
The problem statement says status changes are processed before messages at the same timestamp, but that also implies they persist after that timestamp until changed again.
- Simulation problems reward pessimism.
If something can happen without being explicitly listed (like a user coming back online), your model needs to handle it.
- Failing tests are often better teachers than successful ones.
The fix was small, but it sharpened my understanding of temporal state management, a pattern that shows up everywhere in real systems.
