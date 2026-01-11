// How do you clone / copy objects and arrays?
// Shallow Copy

// // A shallow copy copies only the first level.
// // Nested objects/arrays are still shared by reference.

// //A deep copy copies all nested levels, so changes don’t affect the original.


// Methods to Deep Clone an Object
// 1. structuredClone (BEST – modern)


// const deepCopy = structuredClone(obj);


//  Handles nested objects
//  Handles arrays, maps, sets
// Not supported in very old browsers


// 3 ) Object.keys(), Object.values(), Object.entries()

// Given:

// const user = { name: "Aryan", age: 21 };

// 🔹 Object.keys()
// Object.keys(user);
// // ["name", "age"]

// 🔹 Object.values()
// Object.values(user);
// // ["Aryan", 21]

// 🔹 Object.entries()
// Object.entries(user);
// // [["name", "Aryan"], ["age", 21]]

// 4) Array Methods: map, filter, reduce, forEach
//  map

// Transforms each element → returns new array

// arr.map(x => x * 2);

//  filter

// Keeps elements that pass a condition

// arr.filter(x => x > 2);
//  forEach

// Executes logic but returns nothing

// arr.forEach(x => console.log(x));

// reduce

// Reduces array to single value

// arr.reduce((acc, cur) => acc + cur, 0);
//  forEach vs map


 OUTPUT 

 const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 3;
console.log(obj1.b.c);

//3

const arr = [1, 2, 3];
const newArr = arr;
newArr.push(4);
console.log(arr);
//[1, 2, 3, 4]

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  }
});
console.log(result);
//[undefined, 4, undefined, 8, undefined]


const arr1 = [1, 2, 3];
const arr2 = arr1.map(num => {
  console.log(num);
  return num * 2;
});
console.log('Done');
// 1
// 2
// 3
// Done
