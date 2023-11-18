/* 
Smallest range heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Smallest range heap

Problem Statement:
Find the Smallest Range that includes at least one element from each of the given k sorted lists

Input Format:
The user is prompted to enter the number of lists (k). For each list, the user is prompted to enter the elements separated by spaces.

Output Format:
The program prints the smallest range that includes at least one element from each of the given k sorted lists.

Test Case 1:
Sample Input: 3 4 10 15 24 0 9 12 20 5 18 22 30

Sample Output: 9 - 12

Test Case 2:
sample input: 4 2 6 9 17 8 12 20 23 4 5 10 18 0 13 16 24

sample output: 5 - 8

Level: Medium
Hints:
Use multiple pointers to track the current position in each list. Move the pointers in a way that the range is minimized while ensuring at least one element from each list is included.
Keep track of the maximum value found so far and the list containing it. Calculate the range whenever all lists have been covered, and update the minimum range if necessary.
Approach:
Take input from the user for the number of lists (k).
Create an empty array lists to store the lists.
Iterate k times and prompt the user to enter the elements of each list separated by spaces.
Implement the smallestRange function that takes the lists as input.
Initialize variables k (number of lists), pointers (an array to track the current position in each list), minRange (minimum range), result (resulting range), maxVal (maximum value found so far), listWithMaxVal (list containing the maximum value), elementsCovered (number of elements covered from each list), and allListsCovered (whether all lists have been covered).
Iterate until all lists have beencovered:
a. Find the list with the maximum value among the current pointers.
b. Move the pointer of the list with the maximum value.
c. Update the elements covered count.
d. Check if all lists have been covered.
e. If all lists have been covered, find the minimum and maximum values among the current pointers.
f. Calculate the current range.
g. Update the minimum range if necessary.
h. Move the pointers back to the previous position for all lists.
i. Reset the elements covered count.
j. Check if any list is exhausted.
Return the result, which represents the smallest range.
Print the smallest range.
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)][0] > this.heap[index][0]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)][0] <
          this.heap[smallerChildIndex][0]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }
}

function smallestRange(lists) {
  let range = [-Infinity, Infinity];
  let maxVal = -Infinity;
  const heap = new MinHeap();

  // Initial population of the heap
  for (let i = 0; i < lists.length; i++) {
    heap.insert([lists[i][0], i, 0]);
    maxVal = Math.max(maxVal, lists[i][0]);
  }

  while (heap.size() === lists.length) {
    const [minVal, listIndex, elementIndex] = heap.extractMin();

    // Update the range if the current range is smaller
    if (maxVal - minVal < range[1] - range[0]) {
      range = [minVal, maxVal];
    }

    if (elementIndex + 1 < lists[listIndex].length) {
      const nextVal = lists[listIndex][elementIndex + 1];
      heap.insert([nextVal, listIndex, elementIndex + 1]);
      maxVal = Math.max(maxVal, nextVal);
    } else {
      // Break the loop if any of the lists gets exhausted
      break;
    }
  }

  return range;
}

// Example usage
const lists = [
  [4, 7, 9, 12, 15],
  [0, 8, 10, 14, 20],
  [6, 12, 16, 30, 50],
];
console.log(smallestRange(lists)); //[6,8]

const list2 = [
  [4, 7],
  [1, 2],
  [20, 40],
];
console.log(smallestRange(list2)); // [2,20]
