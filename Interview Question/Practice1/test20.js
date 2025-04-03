//Initialize array
let currentTemp = [20,30,45,55,32,30,31]


//declaring max Temp and minTemp to the first element of array which is index [0]
let maxTemp = currentTemp[0]
let minTemp = currentTemp[0]

//iterating through the array

for(let i = 1; i<currentTemp.length;i++){
    if(currentTemp[i]  > maxTemp ){
        maxTemp = currentTemp[i]
    }
    if(currentTemp[i]<minTemp[0]){
        minTemp = currentTemp[i]
    }
}

console.log(maxTemp)
console.log(minTemp)