// sort() Method - Key Points

// Syntax:

    // array.sort(compareFunction);


  // Arguments:

    // 1 argument (optional): compareFunction — Defines the sort order.

    //    The compareFunction takes two arguments (a, b) and should return:

    //    Negative value: If a should come before b

    //    Positive value: If b should come before a

    //    Zero: If a and b are equal

  // Return Value:

      // Modifies the original array and returns the same array.

      // If no compareFunction is provided, array is sorted lexicographically.

      // Default Sorting (No compareFunction):

      // Strings are sorted lexicographically (alphabetically).

      // Numbers are sorted as strings (incorrect order).

  // Sorting Numbers:

      // Use a custom comparator: array.sort((a, b) => a - b);

      // Ascending order: a - b, Descending order: b - a.

  // Sorting Objects:

      // Use a custom comparator for object properties: array.sort((a, b) => a.property - b.property);

  // Case Sensitivity:

      // By default, sort() is case-sensitive (capital letters come before lowercase).

      // For case-insensitive sorting:
      // array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      // Stable Sort (ECMAScript 2019):

  // Stable sorting: Equal elements retain their relative order after sorting.


// 1. Lexicographical Sorting (Strings)
let arr1 = ['banana', 'apple', 'cherry'];
arr1.sort(); 
console.log(arr1); // ['apple', 'banana', 'cherry']

// 2. Incorrect Sorting for Numbers (Without Custom Comparator)
let arr2 = [40, 100, 1, 5];
arr2.sort(); 
console.log(arr2); // ['1', '100', '40', '5'] (Incorrect)

// 3. Correct Sorting for Numbers (Ascending Order)
let arr3 = [40, 100, 1, 5];
arr3.sort((a, b) => a - b); // Ascending
console.log(arr3); // [1, 5, 40, 100]

// 4. Case-Sensitive Sorting
let arr4 = ['apple', 'Banana', 'cherry'];
arr4.sort();
console.log(arr4); // ['Banana', 'apple', 'cherry']

// 5. Case-Insensitive Sorting
let arr5 = ['apple', 'Banana', 'cherry'];
arr5.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(arr5); // ['apple', 'Banana', 'cherry']

// 6. Sorting Objects by Property (Age)
let arr6 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 }
];
arr6.sort((a, b) => a.age - b.age);
console.log(arr6);
// [
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 }
// ]

// 7. Sorting by Multiple Criteria (Age, then Name)
let arr7 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 20 }
];
arr7.sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name); // Sort by name if ages are the same
  }
  return a.age - b.age; // Sort by age
});
console.log(arr7);
// [
//   { name: 'Bob', age: 20 },
//   { name: 'David', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 25 }
// ]

// 8. Stable Sort
let arr8 = [2, 3, 1, 2, 4];
arr8.sort((a, b) => a - b);
console.log(arr8); // [1, 2, 2, 3, 4]

