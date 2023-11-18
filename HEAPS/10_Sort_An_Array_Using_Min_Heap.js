/*
Sort an Array using a Min Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Sort an Array using a Min Heap

Problem Statement:
Write a program to sort an array of integers using a min heap. The array can contain both positive and negative integers. The program should use a min heap data structure to efficiently sort the array in ascending order.

Input Format:
The user is prompted to enter the elements of the array, separated by spaces.

Output Format:
The program prints the sorted array, with elements separated by spaces.

Test Case 1:
Sample Input: 5 2 9 1 7

Sample Output: 1 2 5 7 9

Test Case 2:
sample input: 10 6 3 8 1 4

sample output: 1 3 4 6 8 10

Level: Easy
Hints:
Build a min heap using the elements of the array. Extract the minimum element from the heap and place it in the sorted portion of the array
Repeat the extraction process until the array is sorted.
Approach:
Take input from the user as elements of the array, separated by spaces.
Implement the sortArray function that takes the array as input.
Build a min heap using the buildMinHeap function.
Extract the minimum element from the heap and place it in the sorted portion of the array.
Repeat the extraction process until the array is sorted.
Return the sorted array as the output.
Print the sorted array.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
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
}

function sortArray(arr) {
  const minHeap = new MinHeap();
  arr.forEach((num) => minHeap.insert(num));

  for (let i = 0; i < arr.length; i++) {
    arr[i] = minHeap.extractMin();
  }

  return arr;
}

// Test Cases
console.log(sortArray([5, 2, 9, 1, 7])); // [1, 2, 5, 7, 9]
console.log(sortArray([10, 6, 3, 8, 1, 4])); // [1, 3, 4, 6, 8, 10]
