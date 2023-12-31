/*
Get Square root
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Get Square root

Problem Statement:
Find the square root of a given positive integer using binary search.

Input Format:
The first line contains an integer N, representing the positive integer for which the square root needs to be found.

Output Format:
Print a floating-point number representing the square root of the given integer, rounded to 6 decimal places

Test Case 1:
Sample Input: 16

Sample Output: 4.000000

Test Case 2:
Sample input: 2

Sample output: 1.414214

Level: Medium
Hints:
Consider using a binary search approach to narrow down the range of possible square roots. Initialize the search range from 0 to the given positive integer.

Determine the middle value within the search range and square it. Adjust the search range based on whether the squared value is greater than, less than, or equal to the target number.

Approach:
Initialize variables start and end as 0 and the given positive integer, respectively. Iterate while start is less than or equal to end: Compute the middle value as mid = start + (end - start) / 2. Compute the square of the middle value as midSquared = mid * mid. If midSquared is equal to the target number, return mid rounded to 6 decimal places. If midSquared is less than the target number, update start to mid + 1. If midSquared is greater than the target number, update end to mid - 1. If the loop completes without finding an exact square root, return the value of end rounded to 6 decimal places.

*/

function squareRoot(N) {
  if (N < 0) return null; // Negative numbers don't have real square roots
  if (N === 0 || N === 1) return N; // Square root of 0 or 1 is itself

  let start = 0;
  let end = N;
  let mid;
  let prevMid = -1; // To store previous mid value
  let precision = 0.000001;

  while (end - start > precision) {
    mid = (start + end) / 2;

    if (Math.abs(mid - prevMid) < precision) {
      break; // If the guess value isn't changing much, break out
    }

    if (mid * mid > N) {
      end = mid;
    } else {
      start = mid;
    }

    prevMid = mid;
  }

  return parseFloat(mid.toFixed(6)); // Return the result rounded to 6 decimal places
}

// Test cases
console.log(squareRoot(16)); // Expected: 4.000000
console.log(squareRoot(2)); // Expected: 1.414214
console.log(squareRoot(9)); // Expected: 3.000000
console.log(squareRoot(0)); // Expected: 0
console.log(squareRoot(1)); // Expected: 1
