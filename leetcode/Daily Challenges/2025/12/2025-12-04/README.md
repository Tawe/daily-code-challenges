# 2025-12-04

## Instructions

There are n cars on an infinitely long road. The cars are numbered from 0 to n - 1 from left to right and each car is present at a unique point.

You are given a 0-indexed string directions of length n. directions[i] can be either 'L', 'R', or 'S' denoting whether the ith car is moving towards the left, towards the right, or staying at its current point respectively. Each moving car has the same speed.

The number of collisions can be calculated as follows:

When two cars moving in opposite directions collide with each other, the number of collisions increases by 2.
When a moving car collides with a stationary car, the number of collisions increases by 1.
After a collision, the cars involved can no longer move and will stay at the point where they collided. Other than that, cars cannot change their state or direction of motion.

Return the total number of collisions that will happen on the road.

```
Example 1:
Input: directions = "RLRSLL"
Output: 5
Explanation:
The collisions that will happen on the road are:
- Cars 0 and 1 will collide with each other. Since they are moving in opposite directions, the number of collisions becomes 0 + 2 = 2.
- Cars 2 and 3 will collide with each other. Since car 3 is stationary, the number of collisions becomes 2 + 1 = 3.
- Cars 3 and 4 will collide with each other. Since car 3 is stationary, the number of collisions becomes 3 + 1 = 4.
- Cars 4 and 5 will collide with each other. After car 4 collides with car 3, it will stay at the point of collision and get hit by car 5. The number of collisions becomes 4 + 1 = 5.
Thus, the total number of collisions that will happen on the road is 5.

Example 2:
Input: directions = "LLRR"
Output: 0
Explanation:
No cars will collide with each other. Thus, the total number of collisions that will happen on the road is 0.
 ```

Constraints:

1 <= directions.length <= 105
directions[i] is either 'L', 'R', or 'S'.

## My Thoughts

At first, this problem completely felt like a simulation task. My instinct was to move the cars step-by-step, check for collisions, update their states, and then repeat the process until no more collisions could happen. That mental model made the problem seem way more complicated than it actually is.
I kept getting stuck thinking, “Don’t I have to run this multiple times? Cars will collide, stop, and then other cars should crash into them later — how do I track all of that?” It felt like I needed to examine multiple permutations or future versions of the string as time progressed.
The breakthrough was realizing that I don’t need to simulate anything. The initial configuration already tells the whole story. Every car’s direction and position determines whether it will collide eventually, without ever needing to move them forward in time.
That shifted the challenge from a physics simulation to a reasoning problem:
Which cars are guaranteed to collide, and which ones can escape?
Once I focused on that question, the problem became much simpler, and all the confusion about “how many rounds of collisions” disappeared.

## What I Learned

- Not every movement problem requires simulation. Sometimes the initial configuration contains enough information to deduce the final outcome.
- Cars that move outward from the ends can escape without colliding, and identifying those “safe” cars is the real key.
- Every other moving car is effectively “doomed” to collide exactly once, even if the collision happens indirectly or through a chain reaction.
- Understanding the rules about stopping after collisions was important: cars never bounce, never keep traveling, and never collide twice.
- Once I stopped thinking in terms of repeated time steps and started thinking in terms of event inevitability, the whole problem became much clearer.
