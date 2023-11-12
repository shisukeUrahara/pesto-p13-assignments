/* 
Sort Array of Dates in Chronological Order
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Sort Array of Dates in Chronological Order

Problem Statement:
Write a JavaScript function that takes an array of dates as input and sorts it in chronological order using the Merge Sort algorithm. Implement the function with the name mergeSortDates.

Input Format:
Prompt the user to enter the dates as a comma-separated string in the format "YYYY-MM-DD".

Output Format:
Print each date in the sorted array on a new line in the format "YYYY-MM-DD".

Test Case 1:
Sample Input:

2022-03-15,2023-01-01,2022-12-31,2022-05-20
Sample Output:

2022-03-15
2022-05-20
2022-12-31
2023-01-01
Test Case 2:
sample input:

2021-09-30,2023-07-03,2022-12-15,2022-01-10
sample output:

2021-09-30
2022-01-10
2022-12-15
2023-07-03
Level: Easy
Hints:
Merge Sort is a divide-and-conquer algorithm that recursively splits the array into halves until the base case of an array with a single element is reached.
It then merges the sorted subarrays to produce the final sorted array.
Approach:
Convert the comma-separated string of dates into an array of strings.
Implement the Merge Sort algorithm to sort the dates in chronological order.
Define a helper function to merge two sorted arrays.
Recursively split the array into halves until the base case is reached.
Merge the sorted subarrays to produce the final sorted array.
*/

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (new Date(left[leftIndex]) < new Date(right[rightIndex])) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSortDates(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSortDates(left), mergeSortDates(right));
}

// Test Cases
const dates1 = "2022-03-15,2023-01-01,2022-12-31,2022-05-20".split(",");
const sortedDates1 = mergeSortDates(dates1);
console.log(sortedDates1.join("\n"));
console.log("*".repeat(100));

const dates2 = "2021-09-30,2023-07-03,2022-12-15,2022-01-10".split(",");
const sortedDates2 = mergeSortDates(dates2);
console.log(sortedDates2.join("\n"));
