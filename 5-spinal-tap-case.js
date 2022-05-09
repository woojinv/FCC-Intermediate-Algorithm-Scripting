// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
    const arrayOfItems = str.split("");
    const modifiedArr = arrayOfItems.map((item, index) => {
      if (item === " " || item === "_") {
        return item = "-";
      } else if (item === item.toLowerCase() && arrayOfItems[index-1] === "-") {
        return item;
      } else if (item === item.toUpperCase() && arrayOfItems[index - 1] !== " " && index !== 0 && arrayOfItems[index - 1] !== "_") {
        return item = "-" + item;
      } else {
        return item;
      } 
    })
    
    const modifiedString = modifiedArr.join("");
    console.log(modifiedString)
    const spinalCaseString = modifiedString.toLowerCase();
    return spinalCaseString;
  
  
  }
  
  spinalCase("Teletubbies say Eh-oh");
  
  // 1. if there's a space, replace it with a hyphen.
  // 2. if there's a capital letter, prepend a hyphen before it.
  // 3. if there's an _ , replace it with a hyphen.
  // 