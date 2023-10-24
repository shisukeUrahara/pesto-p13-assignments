/* 
Reverse every k nodes
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Reverse every k nodes

Problem Statement:
Implement a JavaScript function to reverse every k nodes in a linked list.

Input Format:
The first line input contains spaced-separated integers representing the elements of an array.

The second line contains a positive integer k.

Output Format:
The output should be an array representing the modified linked list after reversing every k nodes.

Test Case 1:
sample Input 1 2 3 4 5 6 7 8 3

Sample Output [3, 2, 1, 6, 5, 4, 8, 7]

Test Case 2:
1 2 3 4 5 2

Sample output: [2, 1, 4, 3, 5]

Level: Medium
Hints:
Traverse the linked list in chunks of size k. Reverse each chunk of nodes.

Connect the reversed chunks to form the final modified linked list.

Approach:
Create a function to reverse a linked list. Create a function to reverse every k nodes in a linked list. Initialize a pointer to the head of the linked list. Traverse the linked list in chunks of size k: Reverse each chunk using the reverse function. Connect the reversed chunk to the previous chunk (if any). Update the pointers accordingly. Return the modified linked list.


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

  reverseKNodes(k) {
    let current = this.head;
    let prevTail = null;
    let newHead = null;

    while (current !== null) {
      let count = 0;
      let localHead = current;

      // Move current k nodes ahead
      while (count < k && current !== null) {
        current = current.next;
        count++;
      }

      // If count is k, reverse the k nodes
      if (count === k) {
        let reversedHead = this.reverse(localHead, k);

        if (prevTail) {
          prevTail.next = reversedHead;
        } else {
          newHead = reversedHead;
        }

        localHead.next = current;
        prevTail = localHead;
      }
    }

    if (newHead) {
      this.head = newHead;
    }
  }

  reverse(head, k) {
    let current = head;
    let prev = null;
    let next = null;

    while (k > 0) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      k--;
    }

    return prev;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// Test
let ll = new LinkedList();
ll.insert(8);
ll.insert(7);
ll.insert(6);
ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);
ll.printList();
console.log("-".repeat(50));

ll.reverseKNodes(3);
ll.printList();
