/* 
Largest Rectangle in Histogram
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Largest Rectangle in Histogram

Problem Statement:
Given an array of non-negative integers representing the histogram's bar height, where the width of each bar is 1, find the area of the largest rectangle in the histogram.

Implement a JavaScript function that takes an array of integers representing the histogram and returns the area of the largest rectangle.

Input Format:
Input: The program should prompt the user to enter comma separated integers representing the histogram.

Output Format:
Output: The program should display the area of the largest rectangle in the histogram.

Test Case 1:
sample Input 2,1,5,6,2,3

Sample Output 10

Test Case 2:
Sample input: 5,5,5,5

Sample output: 20

Level: Hard
Hints:
Use a stack to keep track of the bar indices. Iterate through each bar in the histogram. If the stack is empty or the current bar height is greater than the bar at the top of the stack, push the current bar index onto the stack. If the current bar height is less than or equal to the bar at the top of the stack, keep popping bars from the stack and calculate the area for each popped bar.

The width of the rectangle for each popped bar is the difference between the current index and the index of the previous bar in the stack. Update the maximum area if the calculated area is greater. After iterating through all the bars, if the stack is not empty, repeat the popping and area calculation process for the remaining bars. Return the maximum area.

Approach:
Create an empty stack. Prompt the user to enter an array of integers representing the histogram.
 Split the input string into an array of integers.4
  Initialize variables for the maximum area and the current index. 
  Iterate through each bar in the histogram. 
  If the stack is empty or the current bar height is greater than the bar at the top of the stack, 
  push the current index onto the stack. If the current bar height is less than or equal to the bar 
  at the top of the stack, keep popping bars from the stack and calculate the area for each popped bar.
   Update the maximum area if the calculated area is greater. After iterating through all the bars,
    if the stack is not empty, repeat the popping and area calculation process for the remaining bars. 
    Return the maximum area.
*/

function largestRectangleArea(hist) {
  let stack = [];
  let maxArea = 0;
  let i = 0;

  while (i < hist.length) {
    if (stack.length === 0 || hist[i] >= hist[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      let top = stack.pop();
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      let area = hist[top] * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length !== 0) {
    let top = stack.pop();
    let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    let area = hist[top] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

// Test
let hist = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(hist)); // Expected output: 10
