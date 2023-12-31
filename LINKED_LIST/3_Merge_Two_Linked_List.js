/* 
Merge two sorted linked lists
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
merge two sorted linked lists

Problem Statement:
Write a JavaScript function to merge two sorted linked lists into a single sorted linked list.

Input Format:
The first line input contains spaced-separated integers representing the elements of an array.

The second line contains also contains spaced-separated integers representing the elements of an array.

Output Format:
The output should be an array representing the merged sorted linked list.

Test Case 1:
sample Input 1 3 5 2 4 6

Sample Output [1, 2, 3, 4, 5, 6]

Test Case 2:
1 2 4 3 5 6

Sample output: [1, 2, 3, 4, 5, 6]

Level: Medium
Hints:
Create a new linked list to store the merged result. Traverse both linked lists simultaneously, comparing the values of nodes. Append the smaller value to the merged linked list.

Move the pointer of the corresponding linked list to the next node. Continue this process until one of the linked lists reaches its end. Append the remaining nodes of the non-empty linked list to the merged linked list.

Approach:
Create a function to represent a node in the linked list. Create a function to merge two sorted linked lists. Create a new head and current pointer for the merged linked list. Traverse both linked lists simultaneously: Compare the values of the current nodes in the linked lists. Append the smaller value to the merged linked list. Move the pointer of the corresponding linked list to the next node. If any linked list reaches its end, append the remaining nodes of the non-empty linked list to the merged linked list. Return the merged linked list.


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

  // Method to merge two sorted linked lists
  static mergeSortedLists(list1, list2) {
    let dummy = new Node(-1); // dummy node
    let current = dummy;

    while (list1 !== null && list2 !== null) {
      if (list1.data < list2.data) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }

    // If list1 is not exhausted, append its remaining nodes
    if (list1 !== null) {
      current.next = list1;
    }

    // If list2 is not exhausted, append its remaining nodes
    if (list2 !== null) {
      current.next = list2;
    }

    return dummy.next; // return the next of dummy node, which is the head of our merged list
  }
}

// Test
let list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(5);
list1.display();
console.log("-".repeat(50));

let list2 = new LinkedList();
list2.insert(2);
list2.insert(4);
list2.insert(6);
list2.display();
console.log("-".repeat(50));

let mergedListHead = LinkedList.mergeSortedLists(list1.head, list2.head);
let mergedList = new LinkedList();
mergedList.head = mergedListHead;
mergedList.display();
