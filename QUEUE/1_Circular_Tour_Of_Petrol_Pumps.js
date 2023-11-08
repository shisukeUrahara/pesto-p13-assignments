/* 
Circular Tour of Petrol Pumps
Please Complete Below assignment and upload github link of that solution after completion
Problem Name:
Circular Tour of Petrol Pumps

Problem Statement:
You are given a circular route containing N petrol pumps, where the amount of petrol at each pump and the distance to the next pump is given. You have to find the first petrol pump from where a circular tour can b e completed, visiting all the petrol pumps. It is guaranteed that there is always a solution possible.

Input Format:
The input consists of two parts: The number of petrol pumps, N. For each petrol pump, you need to input the amount of petrol available at the pump and the distance to the next petrol pump, separated by a space. The input is taken as prompt from the user.

Output Format:
The output should be the index of the first petrol pump from where a circular tour can be completed.

Test Case 1:
sample Input 4 4 6 6 5 7 3 4 5

Sample Output 2

Test Case 2:
Sample input: 3 5 4 3 3 6 7

Sample output: 2

Level: Hard
Hints:
Think about the total amount of petrol available and the distance to travel. If the total petrol is less than the total distance, it is impossible to complete the tour.

If at any point the remaining petrol becomes negative, reset the starting petrol pump index and accumulate the remaining petrol from that point.

Approach:
Initialize two variables, start and remainingPetrol, to 0. Iterate through the petrol pumps and calculate the remainingPetrol by subtracting the distance from the available petrol. If remainingPetrol becomes negative, reset start to the next petrol pump and reset remainingPetrol to 0. If the total remaining petrol is greater than or equal to 0 at the end, the tour can be completed, and the index start will be the answer.
*/

function canCompleteCircuit(petrolPumps) {
  let start = 0;
  let totalPetrol = 0;
  let totalDistance = 0;

  for (let i = 0; i < petrolPumps.length; i++) {
    totalPetrol += petrolPumps[i].petrol;
    totalDistance += petrolPumps[i].distance;
  }

  if (totalPetrol < totalDistance) {
    return -1; // Not possible to complete the circuit
  }

  let currentPetrol = 0;
  for (let i = 0; i < petrolPumps.length; i++) {
    currentPetrol += petrolPumps[i].petrol - petrolPumps[i].distance;
    if (currentPetrol < 0) {
      start = i + 1;
      currentPetrol = 0;
    }
  }

  return start;
}

// Test cases
console.log(
  canCompleteCircuit([
    { petrol: 4, distance: 6 },
    { petrol: 6, distance: 5 },
    { petrol: 7, distance: 3 },
    { petrol: 5, distance: 4 },
  ])
); // Output: 1 (index starts from 0, so 1 means the second petrol pump)

console.log(
  canCompleteCircuit([
    { petrol: 5, distance: 4 },
    { petrol: 3, distance: 3 },
    { petrol: 6, distance: 7 },
  ])
); // Output: 1
