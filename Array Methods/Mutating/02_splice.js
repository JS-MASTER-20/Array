// splice() Method Cheat Sheet

// Syntax:

//      array.splice(startIndex, deleteCount, item1, item2, ...);

//      startIndex: The index at which to start modifying the array.

//      deleteCount: The number of elements to remove from the array.

//      item1, item2, ...: The elements to add to the array starting at startIndex.

// Return Value:

//      It returns an array of the removed elements.

//      If no elements are removed, it returns an empty array.


// Example 1: Removing Elements
let arr1 = [1, 2, 3, 4, 5];
let removed1 = arr1.splice(2, 2); // Remove 2 elements from index 2
console.log(arr1); // [1, 2, 5]
console.log(removed1); // [3, 4]

// Example 2: Adding Elements (Without Removing)
let arr2 = [1, 2, 3];
arr2.splice(1, 0, 4, 5); // Add 4 and 5 at index 1
console.log(arr2); // [1, 4, 5, 2, 3]

// Example 3: Replacing Elements
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 6, 7); // Replace 2 elements at index 1 with 6 and 7
console.log(arr3); // [1, 6, 7, 4, 5]

// Example 4: Remove All Elements After a Specific Index
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2); // Remove from index 2 onwards
console.log(arr4); // [1, 2]

// Example 5: Negative Indexing
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(-2, 1); // Remove 1 element from 2nd last index
console.log(arr5); // [10, 20, 30, 50]

// Example 6: Splice with Zero Deletion
let arr6 = [1, 2, 3];
arr6.splice(2, 0, 4, 5); // Add 4 and 5 at index 2, remove 0 elements
console.log(arr6); // [1, 2, 4, 5, 3]

// Example 7: Splice on Empty Array
let arr7 = [];
arr7.splice(0, 0, 1, 2); // Add 1 and 2 at index 0
console.log(arr7); // [1, 2]

// Example 8: Splice on Sparse Array
let arr8 = [1, , 3]; // Sparse array with a missing element
arr8.splice(1, 1, 2); // Remove element at index 1, add 2
console.log(arr8); // [1, 2, 3]

// Example 9: Removing and Replacing Elements
let arr9 = [1, 2, 3, 4, 5];
let removed9 = arr9.splice(1, 3, 6, 7, 8); // Remove 3 elements and replace with 6, 7, 8
console.log(arr9); // [1, 6, 7, 8, 5]
console.log(removed9); // [2, 3, 4] (removed elements)
