/*Find duplicate element in  an array

//initialize an array     //remeber for every varible declare the varibale with let or var or char 
let marks = [20,60,40,80,20,90,120,50,60,90]

//sort the array 
marks.sort()

//declaring duplictae  array
let duplicate = []

//now think of the logic to implement the operation like finding duplicate element in the array

//run the inner loop and outerloop
 for (let i=0;  i< marks.length;i++){
    for(let j=i+1;j<marks.length;j++)
    {
        if(marks[i]==marks[j]){
            duplicate.push(marks[i])
            
        }
    }
 }
console.log(duplicate)
*/


let motimarks=[6,7,10,2,8,5,7,9,2]

motimarks.sort()

let dupmarks = []

for(let i =0 ; i<motimarks.length;i++){
    for (let j= i+1;j<motimarks.length;j++){
        if(motimarks[i] == motimarks[j]){
            dupmarks.push(motimarks[i])

    }
    }
}
console.log(dupmarks)

