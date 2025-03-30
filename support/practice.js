// let str1 = 'ravindran'
//  let str2 = 'sharma'
//  let output = ''
//     // output --> rsahvairnmdaran


// const str3Count = Math.max(str1.length, str2.length);

// for(let i =0; i < str3Count; i++){
//     if(i < str1.length) {
//         output += str1[i];
//     }
//     if(i< str2.length){
//         output += str2[i];
//     }
// }

// console.log(`Merged Strings : ${output}`);
//Second -------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10];
// // output --> [ [1,2,3] , [4,5,6] [7,8,9] , [10] ]
// let gap = 3;
// let result = [];

// for(let i =0; i<arr.length;i+=gap){
// let output = arr.slice(i, i + gap);
// result.push(output);
// }

// console.log(result);

//Third -------------------------------------------

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  // output - [2,3,5,6,8,9]
let result = [];

for(let i = 0; i< arr.length; i++){
    if(i%3!==0){
        result.push(arr[i]);
    }
}

console.log(result);






