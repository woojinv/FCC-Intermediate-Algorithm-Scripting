// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  return collection.filter((object) => {
    for (let i = 0; i < keys.length; i++) {
      if (
        !object.hasOwnProperty(keys[i]) ||
        object[keys[i]] !== source[keys[i]]
      ) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// I'm given an array of objects and a single object. I need to return the objects from the array that have the same properties as the single object i'm given.

/*
  1. Create an array of the keys of the single object i'm given. 
  2. loop through the keys array. 
  3. use filter to only get the objects that have matching key value pairs. 
  */
