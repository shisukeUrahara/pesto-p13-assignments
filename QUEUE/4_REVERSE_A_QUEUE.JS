/* 
Problem Name:
Reverse a Queue

Problem Statement:
You are given a queue of integers. Your task is to reverse the order of elements in the queue using a stack.

Write a function reverseQueue() that reads a series of space-separated integers representing the elements of the queue from the user and prints the reversed queue.

Input Format:
Input: The input consists of a single line containing a series of space-separated integers representing the elements of the queue.

Output Format:
Output: Print the reversed queue as a space-separated list of integers.

Note: The input queue can contain duplicate elements. You can assume that the input queue is not empty.

Test Case 1:
sample Input 1 2 3 4 5
*/

function reverseQueue(queue) {
  let stack = [];

  // Dequeue all elements from the queue and push them onto the stack
  while (queue.length > 0) {
    stack.push(queue.shift());
  }

  // Pop all elements from the stack and enqueue them back into the queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Print the reversed queue
  console.log(queue.join(" "));
}

// Test case
reverseQueue([1, 2, 3, 4, 5, 6, 7]); // Output: 7 6 5 4 3 2 1
