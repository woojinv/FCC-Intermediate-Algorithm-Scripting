// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
  let sum = 0;
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);

// I'm given an array of two numbers in randomg order. Return the sum of all the numbers in the range of the two given numbers, inclusive.

// 1. sort the given array ascending.
// 2. use a for loop.
// url:
