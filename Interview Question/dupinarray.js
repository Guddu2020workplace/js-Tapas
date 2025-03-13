//finding duplicate element in the array

//intialing aaray
let arr = [1,2,3,2,6,7,8,6,11] ;
//declaring an empty array
let duparr=[];
//iterating the array

let elementCount = {};
for (let i = 0; i < arr.length; i++) { // Start of iteration
    if (elementCount[arr[i]]) {
        duparr.push(arr[i]);
    } else {
        elementCount[arr[i]] = 1;
    }
} // End of iteration

console.log(duparr); // Output: [2]
