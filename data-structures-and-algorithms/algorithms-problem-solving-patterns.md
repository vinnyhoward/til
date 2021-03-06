# Algorithms and Problem Solving Patterns

## Problem Solving Strategies

Understand the problem before you try to solve it. Explore concrete examples and research its topics/theories/concepts to give a more in depth look into the problem. After understanding and researching the problem, break it down into smaller parts, solve and then look back and try to refactor where you can to make it more readable and or efficient.

## Steps to help understand a problem

1. Can I restate the problem in my own words?

2. What are the inputs that go into the problem?

3. What are the outputs that should come from the solution to the problem?

4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. Thats okay; it's still worth considering the question at this early stage.)

5. How should I label the important pieces of data that are a part of the problem?

## Explore Concrete Examples

Coming up with examples can help you understand the problem better. Examples also provide sanity checks that your eventual solutions works how it should. 

- Start with simple examples (write it down, what are the inputs? What about the outputs?)

- Progress to more complex examples

- Explore examples with empty inputs

- Explore examples with invalid inputs

## Break down the problem

Write out the step that you will take to solve the problem, it can be pseudo code, it can be just guidelines written with comments, or whatever helps you best to visualize and breaking it down to smaller digestible parts. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about the details.

Example of pseudo code process:

```
const charCount = (str) => {
    // object = {}
    // for loop over str
    // if string doesn't exist in object
    // create key value pair in object
    // if it does exist
    // increment key value pair in object
}
```

## Solve Simplify

Find the core difficulty in what you're trying to do, temporarily ignore that difficulty and write a simplified solution, then incorporate that difficulty back in.

## Look back and refactor

Just because the first solution you found, does not mean its the best answer. Its important to look at your solution critically, see if you can find different solutions or augmentations to help your solution run faster and or use less memory. Another important aspect of this step is making the code readable. Chances are, you aren't going to be the only one that is going to be looking at this code. You have to make it easier for the next person to be able to understand it fairly quickly.

### Refactoring Questions

- Can you check the result

- Can you derive the result differently?

- Can you understand it at a glance?

- Can you use the result or method for some other problem?

- Can you improve the performance (space, time) of your solution?

- Can you think of other ways to refactor?

- How have other people solved this problem?