/* 
Shell Sort for Sorting Dates
Please Complete Below assignment and upload github link of that solution after completion
Problem Statement:
Shell Sort for Sorting Dates

Problem Statement:
You are given an array of dates in string format. Each date is represented as "YYYY-MM-DD HH:mm:ss" (e.g., "2023-07-03 12:30:15"). Implement the Shell Sort algorithm to sort the array of dates in ascending order based on both date and time.

Input Format:
The input will be taken from the user as a prompt. The user will input the array of dates as a comma-separated string.

Output Format:
The sorted array of dates will be printed as a comma-separated string.

Test Case 1:
Sample Input:

"2023-07-03 12:30:15", "2023-07-03 10:15:00", "2023-07-02 18:45:30", "2023-07-01 20:00:00"
Sample Output:

"2023-07-01 20:00:00", "2023-07-02 18:45:30", "2023-07-03 10:15:00", "2023-07-03 12:30:15"
Test Case 2:
sample input:

2023-07-03 09:00:00, 2023-07-02 15:30:00, 2023-07-01 12:45:00, 2023-07-03 18:20:00
sample output:

2023-07-01 12:45:00 PM, 2023-07-02 3:30:00 PM, 2023-07-03 9:00:00 AM, 2023-07-03 6:20:00 PM
Level: Medium
Hints:
Shell Sort is an in-place comparison-based sorting algorithm. It's an extension of the Insertion Sort algorithm.
The algorithm works by comparing elements that are far apart and then gradually reducing the gap between elements to perform more efficient swaps. In this problem, you need to sort dates, so you can convert the dates into timestamps and then perform the sorting based on timestamps.
Approach:
Convert the dates into timestamps.
Implement the Shell Sort algorithm to sort the timestamps in ascending order.
Convert the sorted timestamps back to dates and output the sorted array of dates.
*/

function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i];
      let j;
      for (
        j = i;
        j >= gap && new Date(arr[j - gap]) > new Date(temp);
        j -= gap
      ) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

function sortDates(dates) {
  // Convert dates to timestamps
  let timestamps = dates.map((date) => Date.parse(date));

  // Sort timestamps using Shell Sort
  shellSort(timestamps);

  // Convert timestamps back to date strings
  return timestamps.map((timestamp) =>
    new Date(timestamp).toISOString().replace("T", " ").substring(0, 19)
  );
}

// Test Cases
console.log(
  sortDates([
    "2023-07-03 12:30:15",
    "2023-07-03 10:15:00",
    "2023-07-02 18:45:30",
    "2023-07-01 20:00:00",
  ])
);
console.log(
  sortDates([
    "2023-07-03 09:00:00",
    "2023-07-02 15:30:00",
    "2023-07-01 12:45:00",
    "2023-07-03 18:20:00",
  ])
);
