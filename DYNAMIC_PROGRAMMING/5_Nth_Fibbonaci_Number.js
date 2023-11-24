/* 
nth Fibonacci Number using Dynamic Programming
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
nth Fibonacci Number using Dynamic Programming

Problem Statement:
Write a program to calculate the nth Fibonacci number using dynamic programming. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1. Your task is to calculate the nth Fibonacci number efficiently using dynamic programming.

Input Format:
The user is prompted to enter an integer value for n, which represents the position of the Fibonacci number to be calculated.

Output Format:
The program prints the value of the nth Fibonacci number.

Test Case 1:
Sample Input: 7

Sample Output: 13

Test Case 2:
sample input: 5

sample output: 5

Level: Easy
Hints:
Use an array to store the Fibonacci numbers. Initialize the base cases: fib[0] = 0 and fib[1] = 1.
Calculate the Fibonacci numbers from the bottom-up approach, using the previously calculated values. Return the nth Fibonacci number.
Approach:
Take input from the user as the value of n.
Create an array fib to store the Fibonacci numbers.
Initialize the base cases: fib[0] = 0 and fib[1] = 1.
Iterate from 2 to n:
Calculate the Fibonacci number at index i by adding the previous two Fibonacci numbers: fib[i] = fib[i - 1] + fib[i - 2].
Return the nth Fibonacci number: fib[n].
Print the result.
*/

function nthFibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Array to store Fibonacci numbers
  let fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  // Calculate Fibonacci numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Return the nth Fibonacci number
  return fib[n];
}

// Test cases
console.log(nthFibonacci(7)); // Output: 13
console.log(nthFibonacci(5)); // Output: 5
