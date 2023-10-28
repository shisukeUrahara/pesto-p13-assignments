/* 
Next Greater Element
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Next Greater Element

Problem Statement:
Given an array of integers, find the next greater element for each element in the array. The next greater element for an element num is the first greater element to its right. If no such element exists, consider it as -1.

Implement a JavaScript function that takes an array of integers and returns an array of the next greater elements.

Input Format:
Input: The program should prompt the user to enter comma space separated integers.

Output Format:
Output: The program should display the comma space separated next greater elements.

Test Case 1:
sample Input 5, 3, 8, 4, 2, 7, 1

Sample Output 8, 8, -1, 7, 7, -1, -1

Test Case 2:
Sample input: 5, 4, 3, 2, 1

Sample output: -1, -1, -1, -1, -1

Level: Easy
Hints:
Use a stack to keep track of the elements. Iterate through the array from right to left. For each element, pop elements from the stack until the top element is greater than the current element.

If the stack becomes empty, there is no greater element to the right, so set the next greater element as -1. Otherwise, set the next greater element as the top element of the stack. Push the current element onto the stack. Finally, return the array of next greater elements.

Approach:
Create an empty stack and an empty result array. 
Prompt the user to enter an array of integers.
 Split the input string into an array of integers. 
 Iterate through the array from right to left.
  Pop elements from the stack until the top element is greater than the current element 
  or the stack becomes empty. If the stack is empty, set the next greater element as -1. 
  Otherwise, set it as the top element of the stack. Push the current element onto the stack. 
  Reverse the result array. Display the result array.
*/

function findNextGreaterElement(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    let currentElement = arr[i];
    if (!stack.length) {
      stack.push(currentElement);
    } else if (stack[stack.length - 1] > currentElement) {
      result[i] = stack[stack.length - 1];
    } else {
      while (stack.length && stack[stack.length - 1] <= currentElement) {
        stack.pop();
      }
      if (stack.length) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(currentElement);
    }
  }

  return result;
}

const arr = [5, 3, 8, 4, 2, 7, 1];
// expected answer  [8, 8, -1, 7, 7, -1, -1]
console.log(findNextGreaterElement(arr));
