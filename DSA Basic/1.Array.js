//understanding and playing around array
//Remove Duplicates from an  Array
//First Non-Repeating Element
//Sort Test Results (Pass/Fail)
//Group Test Cases by Type
//Find Missing Number in Array


//find the duplicate element
/*let myArray = [4, 5, 6, 7, 8, 9, 10, 4, 6];  // Array is declared first

function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

let result = findDuplicates(myArray);
console.log("Duplicate values are:", result);  // Output: [4, 6] */


//practice again /*

//let marks= [40,50,60,70,40,50,89,90,89,99,99,49,52]
/*
function findDuplicate(arr){
    let duplicate =[]
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j] && !duplicate.includes(arr[i])) {  
                duplicate.push(arr[i])
                      }
        }
    }
    return duplicate
}

let result =findDuplicate(marks)
console.log("Duplicate values are",result)  */
/*

////Remove Duplicates from an  Array
function removeDuplicate(arr){
    let trim = [] ;
    for(let i =0;i<arr.length;i++){
        if (!trim.includes(arr[i])) {
            trim.push(arr[i]) 
        }
    }
        return trim

}
let result = removeDuplicate(marks)
console.log("array after removing duplicate" + " " , result) */


//finding the missing number in an array

//first create a function
function missingNumber(arr,n){
  //sort the array
  arr.sort((a,b)=>a-b)

  //Traverse through the array with simple incremental order

  for(let i=0;i<arr.length;i++){
    if(arr[i] !== i+1) {
      return i+1;
    }
  }
  return n;
}
const marks=[1,2,3,5,8,9,10]
const n =10
const result =missingNumber(marks,n)
console.log(result)

