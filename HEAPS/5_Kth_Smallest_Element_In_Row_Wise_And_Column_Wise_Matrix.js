/* 
kth Smallest Element in a Row-wise and Column-wise
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
kth Smallest Element in a Row-wise and Column-wise

Problem Statement:
Find the kth Smallest Element in a Row-wise and Column-wise Sorted Matrix using a Min Heap

Input Format:
The user is prompted to enter the number of rows and columns of the matrix. For each row, the user is prompted to enter the elements separated by commas. The user is prompted to enter the value of k.

Output Format:
The program prints the kth smallest element in the matrix.

Test Case 1:
Sample Input:

3
3
1,3,5
2,4,7
6,8,9
3
Sample Output: 3

Test Case 2:
sample input:

2
4
2,4,7,9
3,5,8,10
6
sample output: 7

Level: Hard
Hints:
Create a min heap to track the smallest elements from each row. Insert the first element from each row into the heap along with their respective row and column indices. Build the min heap using the buildMinHeap function.
Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next element in the same row (if available) or removing it from the heap. The kth smallest element will be the result.
Approach:
Take input from the user for the number of rows, number of columns, matrix elements, and the value of k.
Implement the findKthSmallest function that takes the matrix and k as input.
Create an empty min heap.
Iterate over each row of the matrix and insert the first element from each row into the heap along with their respective row and - - column indices.
Build the min heap using the buildMinHeap function.
Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next - - - element in the same row (if available) or removing it from the heap.
Return the kth smallest element as the result.
Print the kth smallest element.
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

function findKthSmallest(matrix, k) {
  const heap = new MinHeap();
  const n = matrix.length;

  // Insert the first element of each row
  for (let i = 0; i < n; i++) {
    heap.insert({ value: matrix[i][0], row: i, col: 0 });
  }

  // Extract min k-1 times
  for (let i = 0; i < k - 1; i++) {
    const { value, row, col } = heap.extractMin();
    if (col < matrix[row].length - 1) {
      heap.insert({ value: matrix[row][col + 1], row, col: col + 1 });
    }
  }

  return heap.extractMin().value;
}

// Example usage
const matrix = [
  [1, 3, 5],
  [2, 4, 7],
  [6, 8, 9],
];
const k = 3;
console.log(findKthSmallest(matrix, k)); // Output: 3
