// fill() Method - Cheat Sheet (With Hidden & Rare Concepts)

//      The fill() method in JavaScript is used to fill all the elements of an array with a specified value, either fully or   partially,  between a start and end index.

// Syntax:
        // array.fill(value, start, end);

            // value: The value to fill the array with (required).

            // start (optional): The index at which to start filling (default is 0).

            // end (optional): The index at which to stop filling (default is the array’s length).

// Return Value:

//     Modifies the original array and returns the same array.

//     If no start or end index is provided, it fills the entire array from index 0 to length.



// 1. Fill Entire Array
let arr1 = [1, 2, 3, 4, 5];
arr1.fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]

// 2. Fill Specific Part of the Array
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 1, 4);
console.log(arr2); // [1, 0, 0, 0, 5]

// 3. Fill from Negative Indices
let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, -3, -1);
console.log(arr3); // [1, 2, 0, 0, 5]

// 4. Fill Sparse Array (with undefined values)
let arr4 = [1, , 3, , 5];  // Sparse array with empty slots
arr4.fill(0);
console.log(arr4); // [0, 0, 0, 0, 0]

// 5. Shallow Copy Behavior with Objects
let arr5 = new Array(3);
arr5.fill({ name: 'John' });
console.log(arr5); // [{ name: 'John' }, { name: 'John' }, { name: 'John' }]
arr5[0].name = 'Alice';  // Changes will reflect in all elements
console.log(arr5); // [{ name: 'Alice' }, { name: 'Alice' }, { name: 'Alice' }]

// 6. Performance Consideration (Filling Large Array)
let largeArr = new Array(1000000).fill(0);
console.log(largeArr.length); // 1000000

// 7. Edge Case: start > end (No Change)
let arr6 = [1, 2, 3, 4, 5];
arr6.fill(0, 3, 2);  // No change
console.log(arr6); // [1, 2, 3, 4, 5]

// 8. Filling Undefined Values
let arr7 = [1, 2, 3];
arr7.fill(undefined);
console.log(arr7); // [undefined, undefined, undefined]

// 9. Replacing Null with a Specific Value
let arr8 = [null, null, null];
arr8.fill('Replaced');
console.log(arr8); // ['Replaced', 'Replaced', 'Replaced']

// 10. Array Initialization with Default Value
let arr9 = new Array(5).fill(0);  // Array with 5 elements, all set to 0
console.log(arr9); // [0, 0, 0, 0, 0]
