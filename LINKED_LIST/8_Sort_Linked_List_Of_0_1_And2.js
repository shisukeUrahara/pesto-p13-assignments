/* 
Sort a linked list of 0s, 1s and 2s
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Sort a linked list of 0s, 1s and 2s

Problem Statement:
Given a linked list of 0s, 1s and 2s, The task is to sort and print it.

Input Format:
The program takes input from the user in the following format:

The user is prompted to enter elements (space-separated) to insert into the linked list. Only values of 0, 1, and 2 are allowed.

Output Format:
The program displays the sorted linked list after performing the sorting operation.

Test Case 1:
sample Input 1 0 2 1 2 0

Sample Output 0 0 1 1 2 2

Test Case 2:
Sample input: 1 2 0 2 1

Sample output: 0 1 1 2 2

Level: Easy
Hints:
Traverse the linked list and count the occurrences of 0s, 1s, and 2s, storing the counts in an array.

Traverse the linked list again, replacing the node values with 0s, 1s, and 2s based on the count array.

Approach:
Create a Node class to represent a node in the linked list. 
Each node should have a data property and a next pointer to the next node.
 Create a LinkedList class with a head pointer initially set to null.
  Implement the insert method in the LinkedList class to add elements to the linked list. 
  If the head is null, set the head to the new node; otherwise, traverse the list until the last 
  node and append the new node. Implement the sortLinkedList method in the LinkedList class to sort
   the linked list. Use the counting sort algorithm to count the occurrences of 0s, 1s, and 2s and 
   update the linked list accordingly. Implement the display method in the LinkedList class to display 
   the linked list values. Prompt the user to enter elements (0s, 1s, and 2s only) to insert into the 
   linked list. Call the sortLinkedList method to sort the linked list. Display the sorted linked list 
   using the display method.
*/

class Node {
  constructor(data) {
    this.value = data;
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
      console.log(current.value);
      current = current.next;
    }
  }
}

function traverseAndFillLinkedList(curr, count, x) {
  while (count > 0) {
    curr.value = x;
    curr = curr.next;
    count--;
  }

  return curr;
}

function sortZeroesOnesAndTwos(head) {
  if (!head) {
    return head;
  }

  // count frequency of 0 , 1 and 2
  let curr = head;
  let count = [0, 0, 0];

  while (curr) {
    count[curr.value]++;
    curr = curr.next;
  }

  // traverse the linked list again and rewrite values of 0s , 1s and 2s
  curr = head;
  curr = traverseAndFillLinkedList(curr, count[0], 0);
  curr = traverseAndFillLinkedList(curr, count[1], 1);
  traverseAndFillLinkedList(curr, count[2], 2);

  return head;
}

// test case
let list1 = new LinkedList();
list1.insert(0);
list1.insert(1);
list1.insert(2);
list1.insert(0);
list1.insert(1);
list1.display();
sortZeroesOnesAndTwos(list1.head); // Sort linked list of 0s , 1s and 2s
console.log("-".repeat(50));
list1.display();
console.log("-".repeat(50));
