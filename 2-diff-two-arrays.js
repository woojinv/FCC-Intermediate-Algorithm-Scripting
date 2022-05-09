// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      newArr.push(item);
    }
  });

  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// I'm given two arrays, and I'm to return a new array containing the values that are not in both arrays.

// 1. loop through arr1 first. If an item is NOT in the other array, push it into newArr.
// 2. repeat for arr2.
// 3. return the new array.
