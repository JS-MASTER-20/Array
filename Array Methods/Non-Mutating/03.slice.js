// JavaScript slice() Method - Cheatsheet

//         The slice() method in JavaScript is used to extract a portion of an array or string without modifying the original. 
//         It returns a new array (or string), including elements from start index up to, but not including, the end index.

// Syntax:
//      array.slice(start, end);


//          start (optional): The index at which to start extraction (inclusive).

//              If omitted, defaults to 0.

//          end (optional): The index at which to stop extraction (exclusive).

//              If omitted, extracts until the end of the array.

//      Negative Indices: Negative values for start and end count from the end of the array.

// Start<end: if start index is greator than end index. it will return epmty array.

// Shallow Copy of Nested Arrays:

//      slice() creates a shallow copy of the array. It doesn't deep-copy nested arrays or objects.


// 1. Extract a portion (start index, end index)
let arr1 = [1, 2, 3, 4, 5];
let result1 = arr1.slice(1, 3);
console.log(result1); // [2, 3]

// 2. Omitting the `end` index to extract until the end
let arr2 = [1, 2, 3, 4, 5];
let result2 = arr2.slice(2);
console.log(result2); // [3, 4, 5]

// 3. Using negative indices
let arr3 = [1, 2, 3, 4, 5];
let result3 = arr3.slice(-3, -1);
console.log(result3); // [3, 4]

// 4. Calling `slice()` without arguments (shallow copy)
let arr4 = [1, 2, 3, 4, 5];
let result4 = arr4.slice();
console.log(result4); // [1, 2, 3, 4, 5]

// 5. Modifying the original array after using `slice()`
let arr5 = [1, 2, 3, 4, 5];
let result5 = arr5.slice(0, 3);
console.log(arr5); // [1, 2, 3, 4, 5] (original array unchanged)
console.log(result5); // [1, 2, 3] (new array)

// 6. Empty array
let arr6 = [];
let result6 = arr6.slice();
console.log(result6); // []

// 7. Start index greater than end index
let arr7 = [1, 2, 3, 4, 5];
let result7 = arr7.slice(3, 1);
console.log(result7); // []

// 8. Out-of-bounds indices
let arr8 = [1, 2, 3];
let result8 = arr8.slice(10, 20);
console.log(result8); // []

// 9. Shallow copy of nested arrays
let arr9 = [1, [2, 3], 4];
let result9 = arr9.slice();
result9[1][0] = 10;
console.log(arr9); // [1, [10, 3], 4]
console.log(result9); // [1, [10, 3], 4]

// 10. Using `slice()` on strings
let str = "Hello, world!";
let result10 = str.slice(0, 5);
console.log(result10); // "Hello"

// 11. Arrays with undefined or null elements
let arr10 = ['apple', undefined, 'banana', null];
let result11 = arr10.slice(1, 3);
console.log(result11); // [undefined, 'banana']
