// Two types of data types in JavaScript PRIMITIVE and NON-PRIMITIVE

// PRIMITIVE DATA TYPES :String,number,boolean,null,undefined,symbol,BigInt


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemperature = null
let userEmail = undefined //if we dont assign any value to a variable then it will be undefined
//Javascript is dynamically typed language

const Id = Symbol('123')
const anotherId1 = Symbol('123')

console.log(Id === anotherId1) //false



const bigNumber = 1234567890123456789012345678901234567890n

console.log(typeof bigNumber)

//Refference (NON-PRIMITIVE) DATA TYPES : object,array,function


const heros = ['Superman','Batman','Wonderwoman']
let myObj = {
    name: 'Tapas',
    age: 30
}

const myFunc = function(){
    console.log('Hello')
}
console.log(typeof myFunc)