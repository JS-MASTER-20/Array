// 4,5,11,12 -> doubt 

// JavaScript join() Method - Cheatsheet

//      The join() method in JavaScript is used to combine the elements of an array into a single string, with a separator between them. You can pass any string as the separator, or use the default comma separator.

// Syntax: array.join(separator);

        // separator (optional): The string to use to separate the array elements. The default is a comma ,.

// 1. Default Separator (Comma)
let arr1 = ['apple', 'banana', 'cherry'];
let result1 = arr1.join();
console.log(result1); // "apple,banana,cherry"

// 2. Custom Separator
let arr2 = ['apple', 'banana', 'cherry'];
let result2 = arr2.join('-');
console.log(result2); // "apple-banana-cherry"

// 3. Empty String as Separator
let arr3 = ['apple', 'banana', 'cherry'];
let result3 = arr3.join('');
console.log(result3); // "applebananacherry"

// 4. Passing undefined as Separator
let arr4 = ['apple', 'banana', 'cherry'];
let result4 = arr4.join(undefined);
console.log(result4); // "apple,banana,cherry"

// 5. Passing null as Separator
let arr5 = ['apple', 'banana', 'cherry'];
let result5 = arr5.join(null);
console.log(result5); // "applenullbanananullcherry"

// 6. Special Characters as Separator
let arr6 = ['apple', 'banana', 'cherry'];
let result6 = arr6.join('🍎');
console.log(result6); // "apple🍎banana🍎cherry"

// 7. Empty Array
let arr7 = [];
let result7 = arr7.join('-');
console.log(result7); // ""

// 8. Array with One Element
let arr8 = ['apple'];
let result8 = arr8.join('-');
console.log(result8); // "apple"

// 9. Nested Arrays
let arr9 = [1, [2, 3], 4];
let result9 = arr9.join('-');
console.log(result9); // "1-2,3-4"

// 10. Arrays with Different Data Types
let arr10 = [1, true, 'apple', null];
let result10 = arr10.join('-');
console.log(result10); // "1-true-apple-null"

// 11. Joining Arrays with Objects
let arr11 = [{ name: 'Alice' }, { name: 'Bob' }];
let result11 = arr11.map(obj => obj.name).join('-');
console.log(result11); // "Alice-Bob"

// 12. Handling Arrays with undefined or null Elements
let arr12 = ['apple', undefined, 'cherry', null]; 
let result12 = arr12.join('-');
console.log(result12); // "apple--cherry-"

// 13. Infinity and NaN in join
let arr13 = [1, Infinity, 3, NaN];
let result13 = arr13.join('-');
console.log(result13); // "1-Infinity-3-Nan"
