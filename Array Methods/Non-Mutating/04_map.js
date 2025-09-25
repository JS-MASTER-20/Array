// JavaScript map() Method - Cheatsheet

//      The map() method in JavaScript is used to transform each element of an array based on a callback function, and it returns a new array without modifying the original array. 
//      It’s widely used for element-wise transformations like scaling, converting types, or mapping properties of objects.

// Syntax:
//      array.map(callback(currentValue, index, array));

//          callback: The function applied to each element of the array.

//          currentValue: The current element being processed.

//          index (optional): The index of the current element.

//          array (optional): The original array on which map() was called.



// 1. Basic map() example
let arr1 = [1, 2, 3, 4];
let result1 = arr1.map(x => x * 2);
console.log(result1); // [2, 4, 6, 8]

// 2. Using map() with index
let arr2 = [10, 20, 30];
let result2 = arr2.map((value, index) => value + index);
console.log(result2); // [10, 21, 32]

// 3. map() with strings (convert characters to uppercase)
let str = "hello";
let result3 = [...str].map(char => char.toUpperCase());
console.log(result3); // ['H', 'E', 'L', 'L', 'O']

// 4. map() does not modify the original array
let arr3 = [1, 2, 3];
let result4 = arr3.map(x => x * 10);
console.log(arr3); // [1, 2, 3] (original array unchanged)
console.log(result4); // [10, 20, 30] (new array)

// 5. map() on array of objects
let arr4 = [{ name: 'Alice' }, { name: 'Bob' }];
let result5 = arr4.map(obj => obj.name);
console.log(result5); // ['Alice', 'Bob']

// 6. map() for complex transformations
let arr5 = [1, 2, 3];
let result6 = arr5.map(x => ({
  value: x,
  square: x * x,
  double: x * 2
}));
console.log(result6);
// [{value: 1, square: 1, double: 2}, {value: 2, square: 4, double: 4}, {value: 3, square: 9, double: 6}]

// 7. map() on empty array
let arr6 = [];
let result7 = arr6.map(x => x * 2);
console.log(result7); // []

// 8. map() with null and undefined elements
let arr7 = [1, null, 2, undefined, 3];
let result8 = arr7.map(x => x === null ? 'Null' : (x === undefined ? 'Undefined' : x * 2));
console.log(result8); // [2, 'Null', 4, 'Undefined', 6]

// 9. Handling complex nested structures
let arr8 = [{ name: 'Alice', scores: [80, 90] }, { name: 'Bob', scores: [70, 85] }];
let result9 = arr8.map(obj => obj.scores.map(score => score + 5));
console.log(result9); // [[85, 95], [75, 90]]

// 10. Using map() with function callback
function transform(x) {
  return x * 2;
}
let arr9 = [1, 2, 3];
let result10 = arr9.map(transform);
console.log(result10); // [2, 4, 6]

