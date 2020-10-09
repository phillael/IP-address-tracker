////////////// homework ///////////////////

/// implement map using reduce ///

testArr = [1, 2, 3, 4, 5];

// what does map do? - map takes an array a makes a new array transforming each item
// by performing a function on it.

// so the new mapFunc should take an array, and a function?
// the accumulator can be set to an empty array
// the spread operator will put the accumulator values into the array
// after the function is performed on the val each iteration.

function mapFunc(arr, func) {
  return arr.reduce((acc, val, i) => [...acc, func(val, i)], []);
}
mapFunc([1, 2, 3, 4, 5], (val, i) => val + i)


function double(num, i) {
  return num * 2;
}

/// implement filter using reduce ///

// What does filter do? - returns an array of items that meet certain conditions
// so filterFunc should take an array, and a function
// if the function returns true, the item should be added to the accumulator
// the accumulator will be initialized as an empty array
// if the value passed into the function returns true, then add it to the accumulator
// use the spread operator to fill the new array with the accumulator values
// otherwise just return the acc

function filterFunc(arr, func) {
  return arr.reduce((acc, val, i) => func(val, i) ? [...acc, val] : acc
  , []);
}



function isEven(num, i) {
  console.log(i)
  return num % 2 === 0;
}
filterFunc([1, 2, 3, 4, 5, 6], isEven);

console.log(mapFunc(testArr, double));
console.log(filterFunc(testArr, isEven));

/// CHUCK NORRIS ///

const MESSAGE = "Message From Chuck Norris";

// split the message into an array
// convert each character to binary
const binaryMessage = MESSAGE.split("").map(letterToBinary).join("");

// Woah! You can just pass the function into the map without doing .map(letter => letterToBinary(letter))
// is this bad practice?

// figure out how many repeat characters there are...regex?
// use the match function to seperate out groups of 1s and 0s
const matches = binaryMessage.match(/1+|0+/g);

// take the matches array and covert each item to unary
const unaryMessage = matches.map(toUnary).join(" ");

function letterToBinary(letter) {
  // toString(2) converts it to ascii code
  // return each letter as binary
  return letter.charCodeAt(0).toString(2);
}

function toUnary(string) {
  // find out if first number of each group a 1 or 0
  // if 1 return a 0, followed by a space
  // then a group of 0s that are string.length long
  return (
    (string.charAt(0) === "1" ? "0" : "00") + " " + "0".repeat(string.length)
  );
}

console.log(binaryMessage);
console.log(matches);
console.log(unaryMessage);
