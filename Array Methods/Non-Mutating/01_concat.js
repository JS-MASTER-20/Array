// concat() Method - Cheat Sheet (With Hidden & Rare Concepts)

//      The concat() method in JavaScript is used to combine two or more arrays or non-array values into a new array. It doesn't change the original arrays, but instead creates a new array with the combined elements.

// Syntax: array.concat(value1, value2, ..., valueN);

//      value1, value2, ..., valueN: These are the values or arrays you want to merge into the original array.

//          - Multiple arrays or non-array values can be passed.

//          - Arrays, strings, numbers, etc., can all be concatenated together.

// Return Value:

//          Creates and returns a new array, leaving the original arrays unchanged.

// concat() Method: Is Passing Argument Optional?

//          Yes, passing arguments in concat() is optional.

//          If you don't pass any arguments to concat(), it will simply return a shallow copy of the original array without modifying it. It won't do anything, and the array remains the same.


// 1. Concatenating Two Arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let result1 = arr1.concat(arr2);
console.log(result1); // [1, 2, 3, 4]

// 2. Concatenating Arrays with Non-Array Values
let arr3 = [5, 6];
let result2 = arr3.concat(7, 8, 'hello');
console.log(result2); // [5, 6, 7, 8, 'hello']

// 3. Concatenating Nested Arrays
let arr4 = [10, 20];
let arr5 = [30, [40, 50]];  // Nested array
let result3 = arr4.concat(arr5);
console.log(result3); // [10, 20, 30, [40, 50]]

// 4. Non-Destructive (Original Arrays Unchanged)
let arr6 = [1, 2];
let arr7 = [3, 4];
let result4 = arr6.concat(arr7);
console.log(arr6); // [1, 2] (unchanged)
console.log(arr7); // [3, 4] (unchanged)
console.log(result4); // [1, 2, 3, 4] (new array)

// 5. Concatenating with Undefined or Null
let arr8 = [1, 2, 3];
let result5 = arr8.concat(undefined, null);
console.log(result5); // [1, 2, 3, undefined, null]

// 6. Concatenating Objects
let arr9 = [1, 2];
let obj = { name: 'John' };
let result6 = arr9.concat(obj);
console.log(result6); // [1, 2, { name: 'John' }]

// 7. Handling Arrays with Different Data Types
let arr10 = [1, 2];
let arr11 = ['apple', 'banana'];
let arr12 = [{ name: 'John' }, { name: 'Doe' }];
let result7 = arr10.concat(arr11, arr12);
console.log(result7); // [1, 2, 'apple', 'banana', { name: 'John' }, { name: 'Doe' }]

// 8. Concatenating with an Empty Array (No Effect on Length)
let arr13 = [1, 2, 3];
let emptyArr = [];
let result8 = arr13.concat(emptyArr);
console.log(result8); // [1, 2, 3]
console.log(arr13);   // [1, 2, 3] (Original array unchanged)

// Yes, passing arguments in concat() is optional.
let arr = [1, 2, 3, 4];
let result = arr.concat();  // No arguments passed
console.log(result);  // [1, 2, 3, 4]
console.log(arr);     // [1, 2, 3, 4] (Original array unchanged)

