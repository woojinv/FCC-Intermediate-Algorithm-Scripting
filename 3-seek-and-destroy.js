// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr, ...args) {
    args.forEach(arg => {
      arr = arr.filter(item => {
        return item !== arg;
      })
    })
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  // i'm given an array of values and a variable number of arguments after the array. i need to remove the values in the array that match the arguments i'm given. 
  
  // 1. loop through the args array comparing each value to each value in the items array. 