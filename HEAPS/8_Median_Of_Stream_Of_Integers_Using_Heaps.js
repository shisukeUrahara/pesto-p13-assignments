/* 
Find the Median of a Stream of Integers using Two Heaps
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Find the Median of a Stream of Integers using Two Heaps

Problem Statement:
Write a program to find the median of a stream of integers using two heaps. The program should maintain two heaps, a max heap and a min heap, to efficiently calculate the median as new integers are added to the stream. The median is the middle value of a set of numbers, which divides the set into two equal halves.

Input Format:
The user is prompted to enter a stream of integers, separated by spaces.

Output Format:
The program prints the median of the stream of integers.

Test Case 1:
Sample Input: 5 10 2 8 15

Sample Output: 8

Test Case 2:
sample input: 10 20 30 40 50

sample output: 30

Level: Medium
Hints:
Use two heaps: a max heap to store the smaller half of the stream and a min heap to store the larger half. Maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
Insert the incoming integer into the appropriate heap and balance the heaps if necessary. Update the current median based on the sizeof the heaps.
Approach:
Take input from the user as a stream of integers, separated by spaces.
Implement two heap data structures: MaxHeap and MinHeap.
Implement the findMedian function that takes the stream as input.
Initialize the maxHeap and minHeap.
Initialize the median variable as null.
Iterate through each integer in the stream:
a. If the maxHeap is empty or the number is less than the current median, insert it into the maxHeap.
b. Otherwise, insert it into the minHeap.
c. Balance the heaps to maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
d. Update the current median based on the size of the heaps: If the sizes are equal, calculate the average of the maximum value in maxHeap and the minimum value in minHeap. If the size of maxHeap is greater, the median is the maximum value in maxHeap.
e. Return the median.
Print the median.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent <= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent >= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return max;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function findMedian(stream) {
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();
  let median = null;

  stream.forEach((num) => {
    if (maxHeap.size() === 0 || num < median) {
      maxHeap.insert(num);
    } else {
      minHeap.insert(num);
    }

    // Balance the heaps
    if (maxHeap.size() > minHeap.size() + 1) {
      minHeap.insert(maxHeap.extractMax());
    } else if (minHeap.size() > maxHeap.size()) {
      maxHeap.insert(minHeap.extractMin());
    }

    // Update median
    if (maxHeap.size() === minHeap.size()) {
      median = (maxHeap.peek() + minHeap.peek()) / 2;
    } else {
      median = maxHeap.peek();
    }
  });

  return median;
}

// Test Cases
console.log(findMedian([5, 10, 2, 8, 15])); // 8
console.log(findMedian([10, 20, 30, 40, 50])); // 30
