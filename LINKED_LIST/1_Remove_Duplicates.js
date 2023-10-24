/* 
Remove Duplicates
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Remove Duplicates

Problem Statement:
Write a JavaScript function to remove duplicates from a singly linked list.

Input Format:
The input contains spaced-separated integers representing the elements of an array.

Output Format:
The output should be an array representing the linked list after removing duplicates.

Test Case 1:
sample Input 1 2 3 2 4 1

Sample Output [1, 2, 3, 4]

Test Case 2:
Sample input: 1 1 1 1

Sample output: [1]

Level: Easy
Hints:
You can use a hash set to keep track of unique values.Traverse the linked list and check if each value is already present in the hash set.

If a value is already in the hash set, skip that node by modifying the "next" pointer of the previous node.If a value is not in the hash set, add it to the hash set and move to the next node.

Approach:
Initialize a hash set to store unique values. Create a head pointer and initialize it with the first node of the linked list. Traverse the linked list using a loop until the current node is not null. Inside the loop: Check if the value of the current node is already present in the hash set. If it is, skip that node by modifying the "next" pointer of the previous node. If it is not, add the value to the hash set and move the previous pointer to the current node. Finally, return the modified linked list.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 *
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

  // Method to insert a new node at the end of the linked list
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

  // Method to display the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Method to remove duplicates from the linked list
  deleteDuplicates() {
    if (!this.head || !this.head.next) {
      return this.head;
    }
    let prev = this.head;
    let curr = this.head.next;
    let map = new Map();
    map.set(prev.data, true);

    while (curr) {
      if (!map.has(curr.data)) {
        map.set(curr.data, true);
        prev = curr;
        curr = curr.next;
      } else {
        prev.next = curr.next;
        curr = curr.next;
      }
    }
  }
}

// Test
let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(4);

console.log("Before removing duplicates:");
list.display();

list.deleteDuplicates();

console.log("After removing duplicates:");
list.display();
