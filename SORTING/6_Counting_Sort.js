/* 
Counting Sort - Sort Array of Positive Integers in Ascending Order
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Counting Sort - Sort Array of Positive Integers in Ascending Order

Problem Statement:
Write a JavaScript function that takes an array of positive integers as input and sorts it in ascending order using the Counting Sort algorithm. Implement the function with the name countingSort.

Input Format:
Prompt the user to enter the positive integers as a comma-separated string.

Output Format:
Print each integer in the sorted array on a new line.

Test Case 1:
Sample Input:

9,5,3,7,1
Sample Output:

1
3
5
7
9
Test Case 2:
sample input:

10,3,6,2,9
sample output:

2
3
6
9
10
Level: Easy
Hints:
Counting Sort is an integer sorting algorithm that works by determining the number of occurrences of each distinct element in the array and using that information to reconstruct a sorted array.
It assumes that the input consists of integers in a specific range.
Approach:
Convert the comma-separated string of positive integers into an array of numbers.
Find the maximum element in the array to determine the range of counting.
Create a counting array to store the count of each element.
Traverse the input array and update the counting array with the count of each element.
Modify the counting array to store the cumulative count.
Create a sorted array of the same length as the input array.
Traverse the input array from right to left and place each element at its correct position in the sorted array.
Return the sorted array.
*/
function countingSort(arr) {
  let maxVal = Math.max(...arr);
  let countArray = new Array(maxVal + 1).fill(0);
  let sortedArray = new Array(arr.length);

  // Count each element
  for (let num of arr) {
    countArray[num]++;
  }

  // Cumulative count
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Place elements in sorted order
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[countArray[arr[i]] - 1] = arr[i];
    countArray[arr[i]]--;
  }

  return sortedArray;
}

// Test cases
console.log(countingSort([9, 5, 3, 7, 1])); // [1, 3, 5, 7, 9]
console.log(countingSort([10, 3, 6, 2, 9])); // [2, 3, 6, 9, 10]
