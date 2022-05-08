// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr, ...args) {
    args.forEach(arg => arr = arr.filter(item => item !== arg));
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  // I'm given an array and a variable number of arguments. I have to remove the items from the array that match the value of the arguments I'm given.
  
  /*
  1. Use the spread operator to create an array of the arguments i'm given.
  2. loop through the args array
  3. filter out the values in the given array that match the values in the arguments array. 
  */