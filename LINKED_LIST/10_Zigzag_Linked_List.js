/*
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Zig-Zag Fashion

Problem Statement:
You are given a linked list. Your task is to rearrange its elements in a zig-zag fashion. The zig-zag fashion means rearranging the elements such that every other element is greater than its previous and next elements. The order of the elements should be maintained.

Write a JavaScript program that takes input for the elements of the linked list and rearranges them in a zig-zag fashion.

Input Format:
The program prompts the user to enter elements for the linked list. The elements should be separated by spaces.

Output Format:
The program displays the rearranged linked list in a zig-zag fashion.

Test Case 1:
sample Input 4 3 7 8 6 2 1

Sample Output 3 7 4 8 2 6 1

Test Case 2:
Sample input: 1 2 3 4 5

Sample output: 1 3 2 5 4

Level: Medium
Hints:
Traverse the linked list and compare each node with its next node.If the current node is greater than its next node and it is at an even index (0-based), swap the values of the two nodes.

Traverse the linked list and compare each node with its next node.If the current node is greater than its next node and it is at an even index (0-based), swap the values of the two nodes.

Approach:
Create a Node class to represent a node in the linked list.
 Each node should have a data property and a next pointer to the next node.
  Create a LinkedList class with a head pointer initially set to null.
   Implement the insert method in the LinkedList class to add elements to the linked list. 
   If the head is null, set the head to the new node; otherwise, traverse the list until the last
    node and append the new node. Implement the rearrangeZigZag method in the LinkedList class to 
    rearrange the elements of the linked list in a zig-zag fashion. 
    Follow the hints and approach mentioned above to perform the rearrangement. 
    Implement the toString method in the LinkedList class to convert the linked list into a string representation. Implement the rearrangeLinkedList function as the main program. Prompt the user to enter the elements of the linked list, create an instance of the LinkedList class, insert the elements into the linked list, call the rearrangeZigZag method, and display the rearranged linked list.
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

  rearrangeZigZag() {
    let current = this.head;
    let index = 0; // To keep track of even or odd position

    while (current && current.next) {
      if (index % 2 === 0 && current.value > current.next.value) {
        // Swap values for even position
        [current.value, current.next.value] = [
          current.next.value,
          current.value,
        ];
      } else if (index % 2 !== 0 && current.value < current.next.value) {
        // Swap values for odd position
        [current.value, current.next.value] = [
          current.next.value,
          current.value,
        ];
      }

      current = current.next;
      index++;
    }
  }

  toString() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" ");
  }
}

// Test cases
function runTestCase(input, expectedOutput) {
  let list = new LinkedList();
  input.forEach((e) => list.insert(e));
  list.rearrangeZigZag();
  console.log(
    `Input: ${input.join(
      " "
    )}\nOutput: ${list.toString()}\nExpected: ${expectedOutput}\n`
  );
}

runTestCase([4, 3, 7, 8, 6, 2, 1], "3 7 4 8 2 6 1");
runTestCase([1, 2, 3, 4, 5], "1 3 2 5 4");
