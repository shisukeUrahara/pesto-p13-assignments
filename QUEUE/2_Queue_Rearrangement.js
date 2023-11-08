/* 
Queue Rearrangement
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Queue Rearrangement

Problem Statement:
You are given a queue containing a series of integers. Rearrange the queue in such a way that all even numbers are moved to the front, while odd numbers remain in their original order. Maintain the relative order of the even numbers and the odd numbers.

Input Format:
The user will be asked to enter the elements of the queue separated by spaces.

Output Format:
The function should return an array representing the rearranged queue.

Test Case 1:
sample Input 5 2 8 3 9 4

Sample Output [2, 8, 5, 3, 9, 4]

Test Case 2:
Sample input: 2 4 6 8 10

Sample output: [2, 4, 6, 8, 10]

Level: Easy
Hints:
Create two separate queues to hold the even and odd numbers.

Iterate through the original queue and enqueue each element into the appropriate queue based on its parity. Finally, concatenate the even queue with the odd queue to get the rearranged queue.

Approach:
Initialize two empty arrays: evenQueue and oddQueue. Split the user input string by spaces and convert it into an array of integers representing the initial queue. Iterate through the initial queue and enqueue each element into either the evenQueue or oddQueue based on its parity. Concatenate the evenQueue with the oddQueue to get the rearranged queue. Return the rearranged queue.
*/

function rearrangeQueue(input) {
  const evenQueue = [];
  const oddQueue = [];

  // Split the input into an array of numbers
  const numbers = input.split(" ").map(Number);

  // Separate numbers into even and odd queues
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      evenQueue.push(num);
    } else {
      oddQueue.push(num);
    }
  });

  // Concatenate even and odd queues
  return evenQueue.concat(oddQueue);
}

// Test cases
console.log(rearrangeQueue("5 2 8 3 9 4")); // Output: [2, 8, 4, 5, 3, 9]
console.log(rearrangeQueue("2 4 6 8 10")); // Output: [2, 4, 6, 8, 10]
