/* 
Checking if Array Represents a Min Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Checking if Array Represents a Min Heap

Problem Statement:
Given an array of integers, write a function to determine whether the array represents a min heap or not. A min heap is a complete binary tree where the value of each node is less than or equal to the values of its children.

Input Format:
The input is an array of integers representing the elements of the heap.

Output Format:
The output is a boolean value

Test Case 1:
Sample Input: 5,10,15,20,25

Sample Output: true

Test Case 2:
sample input: 20,10,25,5,15

sample output: false

Level: Easy
Hints:
Start checking from the first non-leaf node towards the root of the heap. For each node, compare it with its children to ensure the heap property is satisfied.
If any violation is found, return false. If the loop completes without finding any violation, return true.
Approach:
Take input from the user as an array of elements.
Implement the isMinHeap function to check the heap property.
Start from the first non-leaf node (index Math.floor(arr.length / 2) - 1) and iterate towards the root.
Compare each node with its children (arr[2 * i + 1] and arr[2 * i + 2]) and return false if the heap property is violated.
If the loop completes without finding any violation, return true to indicate that the array represents a min heap.
*/

const isMinHeap = function (arr) {
  let n = arr.length;

  // Start from the first non-leaf node and go up to the last parent node
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    // Check if left child exists and violates the min heap property
    if (2 * i + 1 < n && arr[i] > arr[2 * i + 1]) {
      return false;
    }

    // Check if right child exists and violates the min heap property
    if (2 * i + 2 < n && arr[i] > arr[2 * i + 2]) {
      return false;
    }
  }

  return true;
};
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [9, 15, 10, 7, 12, 11];

console.log("**@ is arr1 min heap ? ", isMinHeap(arr1));
console.log("**@ is arr2 min heap ? ", isMinHeap(arr2));
