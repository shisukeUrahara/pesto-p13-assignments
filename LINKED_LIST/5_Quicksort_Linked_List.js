/* 
Quicksort on a linked list
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Quicksort on a linked list

Problem Statement:
Write a JavaScript function to perform quicksort on a linked list and return a single-level sorted linked list.

Input Format:
The input will be an array representing a linked list.

Output Format:
The output should be an array representing the sorted linked list.

Test Case 1:
Sample Input: [3, 1, 4, 2, 5]

Sample Output: [1,2,3,4,5]

Test Case 2:
[100,200,50,150,75]

Sample output: [1, 2, 3, 4, 5, 6]

Level: Hard
Hints:
Implement the partition function to choose a pivot element and rearrange the elements around it. Use the quicksort algorithm to recursively sort the elements before and after the pivot.

Maintain two separate lists for the elements less than the pivot and greater than the pivot.
Join the sorted sublists along with the pivot element to obtain the final sorted list.

Approach:
Create a function to perform quicksort on a linked list. Check the base case: If the linked list has fewer than two elements, return the list as it is already sorted. Choose a pivot element. It can be the first element, the last element, or a random element. Partition the list around the pivot by rearranging the elements into two sublists: less than the pivot and greater than the pivot. Recursively perform quicksort on the sublists before and after the pivot. Join the sorted sublists along with the pivot element to obtain the final sorted list. Return the sorted list.


*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

function partition(start, end) {
  let pivot = start.data;
  let pivotPrev = start;
  let current = start.next;

  while (current !== end) {
    if (current.data < pivot) {
      pivotPrev = pivotPrev.next;

      let temp = pivotPrev.data;
      pivotPrev.data = current.data;
      current.data = temp;
    }
    current = current.next;
  }

  let temp = start.data;
  start.data = pivotPrev.data;
  pivotPrev.data = temp;

  return pivotPrev;
}

function quickSort(start, end = null) {
  if (!start || start === end || (end && start === end.next)) return;

  let pivotPrev = partition(start, end);
  quickSort(start, pivotPrev);
  quickSort(pivotPrev.next, end);
}

// Test Cases
let list1 = new LinkedList();
[3, 1, 4, 2, 5].forEach((el) => list1.insert(el));
quickSort(list1.head);
console.log(list1.toArray()); // [1, 2, 3, 4, 5]

let list2 = new LinkedList();
[100, 200, 50, 150, 75].forEach((el) => list2.insert(el));
quickSort(list2.head);
console.log(list2.toArray()); // [50, 75, 100, 150, 200]
