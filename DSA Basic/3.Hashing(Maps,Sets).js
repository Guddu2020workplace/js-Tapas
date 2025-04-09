/*
let city = ["Rayagada","Khurda","Cuttack","Bhubaneswar"] ; below is how hashmap works

Key (City)      | Value (Count)
----------------|---------------
"Rayagada"      |     2
"Khurda"        |     2
"Cuttack"       |     1
"Bhubaneswar"   |     1




//Most Frequent Element in Array , use hashmap to for frequency count 
/*
function countFrequency(arr){
    let freq = {} //Declaring an empty object
     
    for(let i=0;i<arr.lenght;i++){ //for loop for iterating though the array
        let item=arr[i] //Declaring a variable "Item" that will store the value of the array

        //use if else for 
        if freq[item]{  
            freq[item]++;
        }else {
            freq[item] = 1
        }
    }
return freq;

}
let city = ["Rayagada","Bhubaneswar","Cuttack","Khurda","Rayagda","Bhubaneswar"]
let result = freq(city) */

//
function tripcount(arr) {
    let freq = {};  // Initialize the frequency counter (hashmap)

    for (let i = 0; i < arr.length; i++) {
        let trip = arr[i];

        // If the city hasn't been counted yet, initialize its count to 1
        if (freq[trip] === undefined) {
            freq[trip] = 1;
        } else {
            // If the city exists, increment its count
            freq[trip]++;
        }
    }

    return freq;  // Return the frequency counter
}

let city = ["Rayagada", "Bhubaneswar", "Cuttack", "Khurda", "Rayagada", "Bhubaneswar"];
let result = tripcount(city);  // Correct function call

console.log(result);
