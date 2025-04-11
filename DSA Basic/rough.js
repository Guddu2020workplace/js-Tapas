//Remove duplicate element in an array
/*function removeduplicate(arr){

    let uniqArr = []
    for(i=0;i<arr.length;i++){
        if(!uniqArr.includes(arr[i])){
            uniqArr.push(arr[i])
        }
    }
    return uniqArr;

}
let marks = [20,50,60,40,50,60,95,45,85,45]
let result = removeduplicate(marks)
console.log("Unnique array is " + " " , result) */

//reversing a string

//create a function then declare an empty array

function reverseString(arr){
    let reversed=[]
    //iterate through the loop
    for(i=arr.length-1;i>=0;i--){

        reversed.push(arr[i])
        
    }
    return reversed.join('')
}
 let str = "Tapas Pattanaik"
let result = reverseString(str)

console.log(result)
//export the function using module.exports
module.exports = reverseString ;