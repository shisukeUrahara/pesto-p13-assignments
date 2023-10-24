/* 
Delete without head node
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Delete without head node

Problem Statement:
Delete a node without the head node in a linked list

Input Format:
The program takes input from the user in the following format:

First, the user is prompted to enter elements (space-separated) to insert into the linked list. Then, the user is prompted to enter the value of the element to be deleted without the head node.

Output Format:
The program displays the resulting linked list after the deletion operation.

Test Case 1:
sample Input 10 20 30 40 50 30

Sample Output 10 20 40 50

Test Case 2:
Sample input: 5 10 15 20 5

Sample output: 10 15 20

Level: Easy
Hints:
Check if the given node is null or the next node is null.If so, return since deletion is not possible. Copy the data of the next node to the given node.

Set the next pointer of the given node to the next node's next.Set the next pointer of the next node to null.

Approach:
Create a Node class to represent a node in the linked list. 
Each node should have a data property and a next pointer to the next node. 
Create a LinkedList class with a head pointer initially set to null. 
Implement the insert method in the LinkedList class to add elements to the linked list.
 If the head is null, set the head to the new node; otherwise,
traverse the list until the last node and append the new node. 
Implement the `deleteWithoutHead
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

  // Method to delete a node without the head
  deleteWithoutHead(nodeToDelete) {
    if (!nodeToDelete || !nodeToDelete.next) {
      console.log("Deletion not possible");
      return;
    }
    nodeToDelete.data = nodeToDelete.next.data;
    nodeToDelete.next = nodeToDelete.next.next;
  }

  // Method to display the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Test Case 1
let list1 = new LinkedList();
list1.insert(10);
list1.insert(20);
list1.insert(30);
list1.insert(40);
list1.insert(50);
list1.deleteWithoutHead(list1.head.next.next); // Delete node with value 30
list1.display(); // Expected Output: 10 20 40 50
console.log("-".repeat(50));

// Test Case 2
let list2 = new LinkedList();
list2.insert(5);
list2.insert(10);
list2.insert(15);
list2.insert(20);
list2.deleteWithoutHead(list2.head); // Delete node with value 5
list2.display(); // Expected Output: 10 15 20
