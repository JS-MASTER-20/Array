let arr = [10,20,30,40];

// function to reverse a array
function reverseArray(arr){
  let newArr = []
  for(let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
  }
  return newArr;
}

// print subarray and palindrom status

for(let j=0; j<arr.length; j++){
    for(let i=j; i<arr.length; i++){
      let newArr= arr.slice(j,i+1)
      
      console.log(newArr); // print subarray
      
      // Palindrome or not
      let count=0;
      for(let p=0; p<newArr.length; p++){
        if(newArr[p]==reverseArray(newArr)[p]){
          count++;
        }
      }
      if(count==newArr.length){
        console.log("Palindrome");
      }else{
        console.log("Not palindrome")
      }
    }
      console.log("______________")
}


// console.log(reverseArray(arr2)[2])

