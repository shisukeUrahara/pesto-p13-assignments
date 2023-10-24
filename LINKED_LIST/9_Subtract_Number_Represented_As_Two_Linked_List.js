/* 
Subtract Two Numbers represented as Linked Lists
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Subtract Two Numbers represented as Linked Lists

Problem Statement:
You are given two linked lists that represent two non-negative integers. The digits are stored in reverse order, and each node of the linked list contains a single digit. Your task is to subtract the second linked list from the first linked list and return the result as a new linked list.

Write a JavaScript program that takes input for the two linked lists and performs the subtraction operation.

Input Format:
The program should prompt the user to enter the elements of the first linked list and the second linked list. The elements should be separated by spaces.

Output Format:
The program should display the result of the subtraction operation as a linked list.

Test Case 1:
sample Input 3 2 1 1 2

Sample Output 2 9

Test Case 2:
Sample input: 5 0 5

Sample output: 0 5

Level: Hard
Hints:
Traverse both linked lists simultaneously. At each step, subtract the corresponding digits from the linked lists, taking into account any borrow from the previous step. If the result of subtraction is negative, add 10 to the result and set the borrow flag to 1.

Create a new linked list to store the result digits. Repeat steps 2-4 until both linked lists are exhausted. Return the resulting linked list.

Approach:
Create a Node class to represent a node in the linked list. Each node should have a data property and a next pointer to the next node. Create a LinkedList class with a head pointer initially set to null. Implement the insert method in the LinkedList class to add elements to the linked list. If the head is null, set the head to the new node; otherwise, traverse the list until the last node and append the new node. Implement the subtract method in the LinkedList class to subtract the second linked list from the first linked list. Follow the hints and approach mentioned above to perform the subtraction operation. Implement the toString method in the LinkedList class to convert the linked list into a string representation. Implement the subtractLinkedLists function as the main program. Prompt the user to enter the elements of the first and second linked lists, create instances of the LinkedList class, insert the elements into the linked lists, perform the subtraction operation, and display the result.


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

  subtract(list2) {
    let curr1 = this.head;
    let curr2 = list2.head;
    let result = new LinkedList();
    let borrow = 0;

    while (curr1 || curr2) {
      let val1 = curr1 ? curr1.data : 0;
      let val2 = curr2 ? curr2.data : 0;

      let diff = val1 - val2 - borrow;

      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      result.insert(diff);

      if (curr1) curr1 = curr1.next;
      if (curr2) curr2 = curr2.next;
    }

    // If there's still a borrow at the end, prepend a negative sign
    if (borrow) {
      result.insert(-1);
    }

    return result;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    return str.trim();
  }
}

function subtractLinkedLists() {
  let list1 = new LinkedList();
  let list2 = new LinkedList();

  let elements1 = prompt(
    "Enter elements for the first linked list (space-separated):"
  )
    .split(" ")
    .map(Number);
  let elements2 = prompt(
    "Enter elements for the second linked list (space-separated):"
  )
    .split(" ")
    .map(Number);

  elements1.forEach((e) => list1.insert(e));
  elements2.forEach((e) => list2.insert(e));

  let result = list1.subtract(list2);
  console.log("Result of subtraction:", result.toString());
}

// Test the function
// subtractLinkedLists();

// ... [Your existing code for Node, LinkedList, etc.]

function runTestCase(list1Elements, list2Elements, expectedOutput) {
  let list1 = new LinkedList();
  let list2 = new LinkedList();

  list1Elements.forEach((e) => list1.insert(e));
  list2Elements.forEach((e) => list2.insert(e));

  let result = list1.subtract(list2);
  let output = result.toString();

  console.log(
    `List1: ${list1Elements.join(" ")}\nList2: ${list2Elements.join(
      " "
    )}\nOutput: ${output}\nExpected: ${expectedOutput}\n`
  );
}

// Test cases
runTestCase([7, 2, 4], [5, 1], "2 1 4");
runTestCase([9, 8, 7], [8, 9], "1 9 6");
runTestCase([0, 0, 5], [2, 5], "8 4 4");
runTestCase([0, 0, 1], [1], "9 9");
runTestCase([9, 9, 9], [1], "8 9 9");
