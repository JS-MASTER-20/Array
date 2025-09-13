// Find count of all subarrays whose sum is less than or equal to k

let k = 70
let arr = [10,20,30,40];

for(let i=0; i<arr.length; i++){
    let count=0
    for(let j=i; j<arr.length; j++){
        let newArr = arr.slice(i,j+1);

        // console.log(newArr);
        let sum =0;
        for(let s=0; s<newArr.length; s++){
            sum = sum+newArr[s];
        }
        if(sum<=k){
            count++;
            console.log(newArr);
        }
    }
    console.log(count);

    console.log("----------------")
}