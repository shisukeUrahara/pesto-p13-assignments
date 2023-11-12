/* 
Minimum Element in Min Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Minimum Element in Min Heap

Problem Statement:
Given a min heap, find the minimum element.

Input Format:
The input will be an array representing the min heap.

Output Format:
Output the minimum element.

Test Case 1:
Sample Input: 3,8,10,15,20

Sample Output: 3

Test Case 2:
sample input: 1,2,3,4,5

sample output: 1

Level: Easy
Hints:
Remember that in a min heap, the minimum element is always at the root.
The root of the min heap can be accessed directly using array indexing.
Approach:
To find the minimum element in a min heap, we simply return the value at the root of the heap (i.e., the first element of the array representation of the heap).
*/

const getMinElementInMinHeap = function (arr) {
  return arr[0];
};

const heap1 = [1, 2, 3, 4, 5, 6, 7];
console.log("**@ min element of heap1 is ,  ", getMinElementInMinHeap(heap1));

const heap2 = [3, 8, 10, 15, 20];
console.log("**@ min element of heap2 is ,  ", getMinElementInMinHeap(heap2));
