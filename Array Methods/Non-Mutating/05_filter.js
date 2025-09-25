// JavaScript filter()
// The filter() method in JavaScript is used to create a new array with all elements that pass a test (provided by a callback function). The original array remains unchanged.

// Syntax: 

    // array.filter(callback(currentValue, index, array));

        // callback: Function that is called for every element in the array.

        //         currentValue: Current element being processed.

        //         index (optional): The index of the current element.

        //         array (optional): The original array being processed.

    // filter() returns a new array containing only the elements that pass the test. If no elements pass the test, it returns an empty array.

// Final Summary of filter():

    // filter() creates a new array that contains only the elements satisfying the specified condition.

    // It does not modify the original array.

    // You can use filter() with strings, arrays of objects, and complex conditions.

    // Edge cases: Handling empty arrays, null, undefined, and falsey values is easy with custom conditions.

    // Always remember that filter() returns an empty array if no elements pass the test.



// 1. Basic filter() example
let arr1 = [1, 2, 3, 4, 5];
let result1 = arr1.filter(x => x > 2);
console.log(result1); // [3, 4, 5]

// 2. filter() with strings
let arr2 = ['apple', 'banana', 'cherry', 'date'];
let result2 = arr2.filter(fruit => fruit.length > 5);
console.log(result2); // ['banana', 'cherry']

// 3. filter() with objects
let arr3 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }];
let result3 = arr3.filter(person => person.age > 30);
console.log(result3); // [{ name: 'Charlie', age: 35 }]

// 4. filter() does not modify the original array
let arr4 = [1, 2, 3, 4, 5];
let result4 = arr4.filter(x => x % 2 === 0);
console.log(arr4); // [1, 2, 3, 4, 5] (original array unchanged)
console.log(result4); // [2, 4] (new array)

// 5. filter() on empty array
let arr5 = [];
let result5 = arr5.filter(x => x > 2);
console.log(result5); // []

// 6. filter() with null and undefined
let arr6 = [1, null, 2, undefined, 3];
let result6 = arr6.filter(x => x !== null && x !== undefined);
console.log(result6); // [1, 2, 3]

// 7. Handling falsey values
let arr7 = [1, 0, false, "", NaN, 2];
let result7 = arr7.filter(Boolean);  // Filters out all falsey values
console.log(result7); // [1, 2]

// 8. Complex filtering
let arr8 = [{ name: 'Alice', age: 25, city: 'New York' }, { name: 'Bob', age: 30, city: 'Chicago' }];
let result8 = arr8.filter(person => person.age > 20 && person.city === 'New York');
console.log(result8); // [{ name: 'Alice', age: 25, city: 'New York' }]

// 9. Empty elements in array
let arr9 = [1, , 3, 4];  // Sparse array
let result9 = arr9.filter(x => x !== undefined);
console.log(result9); // [1, 3, 4]

// 10. filter() on objects with undefined or null values
let arr10 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: null }, { name: 'Charlie', age: undefined }];
let result10 = arr10.filter(person => person.age !== null && person.age !== undefined);
console.log(result10); // [{ name: 'Alice', age: 25 }]

// 11
console.log("\n=== 8) thisArg usage (non‑arrow) ===");
let range = {min:10, max:20};
let nums = [5,10,15,20,25];
console.log(nums.filter(function(n){ return n >= this.min && n <= this.max; }, range)); // [10,15,20]