/* 
Is Link List Pallindrome
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Is Link List Pallindrome

Problem Statement:
Implement a JavaScript function to check if a given linked list is a palindrome.

Input Format:
The input contains spaced-separated integers representing the elements of an array.

Output Format:
The output should be a boolean value indicating whether the linked list is a palindrome or not.

Test Case 1:
sample Input 1 2 3 2 1

Sample Output true

Test Case 2:
Sample input: 1 2 3 3 1

Sample output: false

Level: Easy
Hints:
Use a two-pointer approach to find the middle of the linked list.

Reverse the second half of the linked list. Compare the reversed second half with the first half to check for palindromicity.

Approach:
Create a function to reverse a linked list. Create a function to find the middle node of a linked list using the two-pointer technique. Split the linked list into two halves using the middle node. Reverse the second half of the linked list. Compare the reversed second half with the first half by traversing both simultaneously. If all the values match, return true (indicating a palindrome). Otherwise, return false.


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
 * @return {boolean}
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

  // Method to check if the linked list is a palindrome
  isPalindrome() {
    if (!this.head) {
      return true;
    }

    let slow = this.head;
    let fast = this.head;

    // Find the center of the linked list
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null;
    let current = slow;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    // Traverse both halves of the linked list and check if it's a palindrome
    let p1 = this.head;
    let p2 = prev;

    while (p2) {
      if (p1.data !== p2.data) {
        return false;
      }
      p1 = p1.next;
      p2 = p2.next;
    }

    return true;
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

// Test
let list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(2);
list1.insert(1);
list1.display();
console.log(list1.isPalindrome()); // true
console.log("-".repeat(50));

let list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);
list1.display();
console.log(list2.isPalindrome()); // false
console.log("-".repeat(50));
