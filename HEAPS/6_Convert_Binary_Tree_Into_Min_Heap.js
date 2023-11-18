/* 
Convert Binary Tree into a Min Heap
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Convert Binary Tree into a Min Heap

Problem Statement:
Write a program to convert a given binary tree into a min heap. The binary tree is represented by its in-order traversal, where -1 represents null nodes. The program should perform an in-order traversal of the binary tree, store the node values in an array, sort the array in ascending order, and reconstruct a new binary tree that represents a min heap.

Input Format:
The user is prompted to enter the elements of the binary tree in in-order traversal, separated by spaces. Use -1 to represent null nodes.

Output Format:
The program prints the in-order traversal of the converted min heap.

Test Case 1:
Sample Input: 1 2 3 4 5 6 7

Sample Output: 1 2 3 4 5 6 7

Test Case 2:
sample input: 5 3 8 1 4

sample output: 1 3 4 5 8

Level: Medium
Hints:
Perform an in-order traversal of the binary tree and store the node values in an array. Sort the array in ascending order.
Construct a new min heap from the sorted array.
Approach:
Take input from the user as the elements of the binary tree in in-order traversal, separated by spaces.
Implement the convertToMinHeap function that takes the root of the binary tree as input.
Perform an in-order traversal of the binary tree and store the node values in an array.
Sort the array in ascending order.
Construct a new min heap from the sorted array using the constructMinHeap function.
Implement the buildBinaryTree function to build the binary tree from the in-order traversal array.
Implement the printInorder function to print the in-order traversal of a binary tree.
Print the in-order traversal of the converted min heap.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(root, arr) {
  if (root !== null) {
    inOrderTraversal(root.left, arr);
    arr.push(root.value);
    inOrderTraversal(root.right, arr);
  }
}

function buildBinaryTree(arr, i) {
  if (i < arr.length) {
    let node = new TreeNode(arr[i]);
    node.left = buildBinaryTree(arr, 2 * i + 1);
    node.right = buildBinaryTree(arr, 2 * i + 2);
    return node;
  }
  return null;
}

function convertToMinHeap(root) {
  let arr = [];
  inOrderTraversal(root, arr);
  arr.sort((a, b) => a - b);
  console.log("**@ convertToMinHeap arr is , ", arr);
  return buildBinaryTree(arr, 0);
}

function printInorder(root) {
  if (root !== null) {
    printInorder(root.left);
    console.log(root.value);
    printInorder(root.right);
  }
}

// Helper function to build a binary tree from in-order traversal
function buildTreeFromInorder(inorder, start, end) {
  if (start > end) return null;
  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(inorder[mid]);
  node.left = buildTreeFromInorder(inorder, start, mid - 1);
  node.right = buildTreeFromInorder(inorder, mid + 1, end);
  return node;
}

// Test Cases
let inorder = [1, 2, 3, 4, 5, 6, 7];
let root = buildTreeFromInorder(inorder, 0, inorder.length - 1);
console.log("**@ root is ,", root);
let minHeapRoot = convertToMinHeap(root);
console.log("**@ minHeapRoot is ,", minHeapRoot);

printInorder(minHeapRoot); // Expected output: 1 2 3 4 5 6 7
console.log("*".repeat(100));

inorder = [5, 3, 8, 1, 4];
root = buildTreeFromInorder(inorder, 0, inorder.length - 1);
minHeapRoot = convertToMinHeap(root);
printInorder(minHeapRoot); // Expected output: 1 3 4 5 8
