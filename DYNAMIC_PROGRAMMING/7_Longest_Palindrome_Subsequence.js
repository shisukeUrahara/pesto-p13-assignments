/* 
Longest Palindromic Subsequence
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Longest Palindromic Subsequence

Problem Statement:
Write a program to find the length of the longest palindromic subsequence in a given string. A palindromic subsequence is a subsequence that reads the same forwards and backwards. Your task is to calculate the length of the longest palindromic subsequence.a

Input Format:
The user is prompted to enter a string.

Output Format:
The program prints the length of the longest palindromic subsequence.

Test Case 1:
Sample Input: babad

Sample Output: 3

Test Case 2:
sample input:

7
3
sample output: 28

Level: Medium
Hints:
Use dynamic programming to solve this problem. Create a dynamic programming array dp to store the results. Initialize the base cases: The length of a single character is a palindrome of length 1.
Fill the dynamic programming array by considering all possible subproblems. Use the values of previously solved subproblems to find the solution for the current subproblem. Return the length of the longest palindromic subsequence.
Approach:
Take input from the user for a string.
Implement the longestPalindromicSubsequence function that takes the string as input.
Get the length of the string.
Create a dynamic programming array dp of size n x n to store the results, where n is the length of the string.
Initialize the base cases: A single character is a palindrome of length 1: dp[i][i] = 1 for all i.
Fill the dynamic programming array by considering all possible subproblems.
Iterate over the subsequence lengths len from 2 to n.
Iterate over the start indices i from 0 to n - len.
Calculate the end index j as i + len - 1.
If the characters at both ends are the same, increment the length of the palindromic subsequence by 2: dp[i][j] = dp[i + 1][j - 1] + 2.
If the characters at both ends are different, take the maximum of the lengths obtained by excluding one character at a time from either end: dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]).
Return the length of the longest palindromic subsequence: dp[0][n - 1].
Print the length of the longest palindromic subsequence.
*/

function longestPalindromicSubsequence(s) {
  const n = s.length;
  let dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // Base case: single character is a palindrome of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Fill the DP table
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}

// Test cases
console.log(longestPalindromicSubsequence("babad")); // Output: 3
console.log(longestPalindromicSubsequence("cbbdbdadb")); // Output: 5
