// // Biggest row length wise

// let arr1 = [
//     [10,20,30],
//     [40,50,3,3,3,3],
//     [70],
//     [65,66,67,67,100]
// ]

// // console.log(arr1);
// let len = 0;
// row =0;

// for(let i=0; i<arr1.length; i++){
//     if(arr1[i].length>len){
//         len = arr1[i].length
//         row = i;
//     }
// }

// console.log(arr1[row]);
// // console.log(len);


// If the given nested array is matrix;


let arr2 = [
    [10,20,30],
    [40,50,3],
    [70,3,3],
    [65,66,67],
    "dft"
]

let len = arr2[0].length;
let result = true;

// console.log(len);
for(let i=0; i<arr2.length; i++){
    // console.log(arr2[i].length == len);
    // console.log(arr2[i].length != len && typeof arr2[i]== "object");
    if(arr2[i].length != len || typeof arr2[i]!= "object"){
        console.log("Not a matrix");
        result = false;
        break;
    }
}

if(result==true){
    console.log("This is a matrix");
}