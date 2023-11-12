/* 
kth Largest Element in an Unsorted Array using a Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
kth Largest Element in an Unsorted Array using a Heap

Problem Statement:
Given an unsorted array of integers, write a function to find the kth largest element in the array using a heap.

Input Format:
The user is prompted to enter the elements of the array, separated by commas. The user is prompted to enter the value of k.

Output Format:
The program prints the kth largest element in the array.

Test Case 1:
Sample Input:

5, 2, 9, 1, 7
2
Sample Output: 7

Test Case 2:
sample input:

10,6,3,8,1,4
4
sample output: 4

Level: Medium
Hints:
Build a min heap of the first k elements in the array. Iterate over the remaining elements in the array.
If the current element is larger than the root of the min heap, replace the root with the current element and heapify down. The kth largest element will be the root of the min heap.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  peek() {
    return this.heap[0];
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

function findKthLargest(nums, k) {
  const minHeap = new MinHeap();
  for (let i = 0; i < k; i++) {
    minHeap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.extractMin();
      minHeap.insert(nums[i]);
    }
  }

  return minHeap.peek();
}

// Test cases
console.log(findKthLargest([5, 2, 9, 1, 7], 2)); // 7
console.log(findKthLargest([10, 6, 3, 8, 1, 4], 4)); // 4
