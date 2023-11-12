/* 
Merge k Sorted Arrays using a Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Merge k Sorted Arrays using a Heap

Problem Statement:
You are given k sorted arrays of integers. Write a function to merge these k sorted arrays into a single sorted array using a heap.

Input Format:
The user is prompted to enter the number of sorted arrays, k. For each array, the user is prompted to enter the elements separated by commas.

Output Format:
The program prints the merged sorted array.

Test Case 1:
Sample Input:

3
1,4,7
2,5,8
3,6,9
Sample Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Test Case 2:
sample input:

2
1,3,5
2,4,6
sample output: [1, 2, 3, 4, 5, 6]

Level: Medium
Hints:
Create a min heap to track the smallest elements from each array. Build the min heap using the first element from each array. Extract the smallest element from the heap (root) and add it to the result array.
Replace the extracted element with the next element from the same array, if any. Restore the heap property by performing heapify. Repeat the above steps until the heap is empty.
Approach:
Implement the mergeKSortedArrays function that takes an array of arrays as input.
Create an empty result array and an empty heap array.
Iterate through each array and push the first element (along with its array index and element index) to the heap.
Build the min heap using the buildMinHeap function.
Perform the merging process by extracting the smallest element from the heap, adding it to the result array, and replacing it with the next element from the same array (if available).
Restore the heap property by performing heapify.
Return the merged sorted array as the result.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (index < length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallerChildIndex = leftChildIndex;

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (
        smallerChildIndex < length &&
        this.heap[smallerChildIndex] < this.heap[index]
      ) {
        [this.heap[smallerChildIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[smallerChildIndex],
        ];
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKSortedArrays(arrays) {
  const minHeap = new MinHeap();
  const result = [];

  // Insert all elements into the heap
  for (const array of arrays) {
    for (const element of array) {
      minHeap.insert(element);
    }
  }

  // Extract elements from the heap to get them in sorted order
  while (!minHeap.isEmpty()) {
    result.push(minHeap.extractMin());
  }

  return result;
}

// Test Cases
console.log(
  mergeKSortedArrays([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  mergeKSortedArrays([
    [1, 3, 5],
    [2, 4, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
