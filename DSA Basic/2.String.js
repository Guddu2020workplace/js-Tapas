   /*
   /* Arrays and Strings

Hashing (Maps, Sets)

Searching and Sorting

Two Pointers & Sliding Window

Stack & Queue basics

Basic Recursion

Simple Trees & Graphs (Rare for QAE) */
/*

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

//console.log(result)

//export the function using module.exports
module.exports = reverseString ; 

function reverseAstring(str){
    let revrsed =[]
    for(let i=arr.length-1;i>=0;i--){
        revrsed.push(str[i])
    }
    return revrsed.join("");
}
let string = "Tapas Pattanaik"
let result = reverseAstring(string)
//console.log("The reversed string",result) 



//Checking Pallindrome
function isPalindrome(str){ //create function that will check for pallindrom
     
     str = str.toLowerCase().replace(/[^a-z0-9]/g,'') 

    let reversed=[]         //declare an empty array that will store the value after the the logic is applied
    for(let i=str.length-1;i>=0;i--){  //this for loop will traverse from last element of arry to the first element
        reversed.push(str[i])
        }
        let reversedString = reversed.join("")  //decalre a new variable will store the output from the above logic and join is used to convert the output of array to string

        if (str===reversedString){
            return ("pallindrome");
        } else{
            return ("Not Pallindrome");
        }

}

let input ="madaM"
let result = isPalindrome(input)
//console.log("The result is",result)


//find maximum number in n array 

function maxminiNumber(arr){
    let maxNum =arr[0]
    let minNum = arr[0]
    for(let i =0 ;i<arr.length;i++){
        if(arr[i]>maxNum){
            maxNum = arr[i]
        }
        if(arr[i]<minNum){
            minNum=arr[i]
        }
    } 
    return{maxNum,minNum}  //create curly braces such that it will return bracket,when called under normal bracket it compares both the value but returns only last value)
}
let temp=[30,32,28,26,38,35,34]

let result=maxminiNumber(temp)
//console.log("the max tempreture is ",result.maxNum)
//console.log("the minimum tempreture is",result.minNum) 


//Find the highest nd lowest mark

function highLowmark(arr){
    let highMark=arr[0]
    let lowMark=arr[0]

    for(let i = 0;i<arr.length;i++){
        if(arr[i]>highMark){
            highMark = arr[i]
        }
        if(arr[i]<lowMark){
            lowMark = arr[i]
        }
    }
    return {highMark,lowMark}
}
let marks= [30,40,50,25,80,60,90,100]
let result = highLowmark(marks)
//console.log("the highest mark is",result.highMark)
//console.log("The lowest mark is",result.lowMark) */

/*


//5!(5factorial)=5*4*3*2*1 and 0!(0factorial)=1
factorial using for loop only
function factorial(n){

    //declare result =1
    let result =1
    
    //loop from 1 to n
    for(let i=1;i<=n;i++){
        result= result * i; //multiply each number into rsult
    }
    return result
}
//console.log(factorial(5))

//factorial using recursion 

function facTorial(n){
    if(n==0) return 1;
    return n * facTorial(n-1)
}
let n = 5
let result =facTorial(n)
console.log("The factorial is",result) */
/*

//factorial
function facTorial(n){
    if(n==0) return 1 ;
    return n*facTorial(n-1);
    }
let n=4;
let result = facTorial(n)
//console.log(result)


//Count vowels in the string

function vowelCount(str){ //we have declared one function named vowelcount
    let count =0 //we have declared count =0
    let vowel ="aeiouAEIOU" //we have declared the vowels
    for(let i=0;i<str.length;i++){ //we used a loop to travese through the array
        if(vowel.includes(str[i])){ //we use javascript function includes will check whether anyof those input string contains the declared vowels
            count++   //then we used increment operator to make the count by 1 if vowels found
        }
    }
    return count //then we asked to get rwturn count
}
let string = "Tapas Pattanaik" //we have declared a string and given the input value

let totalcount = vowelCount(string)
//console.log("the total number of vowel is",totalcount)


//function to count number of nonvowels

function notVowel(str){
    let count = 0
    let vowels="aeiouAEIOU"
    for(let i=0;i<str.length;i++){
        let char =str[i]
        if(!vowels.includes(char) && char.toLowerCase() !==char.toUpperCase()){ //it checks for all kind of letter
            count ++; 
        }
    }
    return count
}

let name = "Tapas Pattanaik"
let result = notVowel(name)
//console.log("consonant",result) */


//Sum all numbers in an array /*
/*
function sumAllNumber(arr){
    let sum=0 
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
let marks1=[20,30,40,60,80,90]
let result2= sumAllNumber(marks1)
console.log("sum of elements in array",result2) */

//Remove dupicate from an array
/*
function removeDuplicate(arr){
    let uniqueArr=[]
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])

        }
    }
    return uniqueArr
}
let marks = [20,40,50,60,40,20,80,30,]

let result = removeDuplicate(marks)

console.log("Unique arr = ",result) */

//find the second largest number in an array
/*
function secondLargest(arr){
    if(arr.length<2) return null; //because to find the second largest element in an arayy.rray  should be having atleast two elements to compare 
    let max = -Infinity
    let secondMax = -Infinity

    for(let i=0;i<arr.length;i++){
        let num = arr[i];

       
        if(num>max){
         secondMax = max //for iteration1 ,secondMax= -infinity
         max = num       //for iteration1(i.e i =0),max =10
        }
        else if(num>secondMax && num!==max){  //this will enter to else block when arr[i] <arr[j]
            secondMax = num;
        }
    }
        if(secondMax===-Infinity){   //this will check for wen second element = -Infinity
            return null
        }
        return secondMax
}
let marks = [80,60,30,80,90]
let result =secondLargest(marks)
console.log("The second largest element is",result)  */


// finding 2ndLargest element in an array 
/*
function secondLargest(arr){
    let max=-Infinity
    let secondMax=-Infinity
    for(let i=0;i<arr.length;i++){
        let num =arr[i]
        if(num>max){
            secondMax=max;
            max=num;
        }
        else if(num>secondMax && num!==max){
            secondMax=num
        }
        
    }
    if(secondMax===-Infinity){
        return null;
    }
    return secondMax;
}

let mark=[20,30,40,20,60,80]

let result =secondLargest(mark)

console.log("Second Largest Element",result) */


//Check if two strings are anagrams
/*
function isAnagram(str1,str2){
if(str1.length!==str2.length){
    return false //if length is not same then its not an anagram
}

const charCount={}//create a HashMap that will store the count

for(let i=0;i<str1.length;i++){
    const char=str1[i]
    if(charCount[char]===undefined){
        charCount[char]=1;
    }else{
        charCount[char]=charCount[char]+1;
    }
}

for(let j=0;j<str2.length;j++){
    const char = str2[j]
    if(charCount[char]===undefined || charCount[char]===0){
        return false
    }else{
        charCount[char]=charCount[char]-1
    }
}
return true
}
let string1="listen"
let string2="silent"
let result = isAnagram(string1,string2)
if(result){
    console.log("its Anagram")
}else{
    console.log("Not Anagram")
} */

//10. Get the Fibonacci number at position n (recursion)

/*below are the logic behinf fibonacci series
F(0) = 0  
F(1) = 1  
F(n) = F(n-1) + F(n-2) for n > 1

optimizeCode
..............*/
/*
function fiboNicci(n,memo={}){
    if(n<0) throw new Error("invalid input");
    if(n===0) return 0;
    if(n===1) return 1;

    if(memo[n]) return memo[n]
    memo= fiboNicci(n-1,memo) + fiboNicci(n-2,memo)
    return memo[n]
}
let nums = 3;
let resulto = fiboNicci(nums)
console.log(resulto)  */


//samecode forFibonicci using recursion
/*
function fiboNicci(n,memo={}){
    if(n<0) throw new Error("invalid input");
    if(n===0) return 0;
    if(n===1) return 1;

    if(memo[n]) return memo[n];
    memo[n]=fiboNicci(n-1,memo) + fiboNicci(n-2,memo)
    return memo[n]
}
let num =[5,4,3,2,1,0,60]

//let result =fiboNicci(num) -this will work for single element not the array like num =3;
//To print the output for all the element of array we need to run a for loop
for(let i=0;i<num.length;i++)  {

    let result =fiboNicci(num[i])
    console.log("The result is ",result)
}


*/

//find the non-repeating character in a string

/*first count the frequency of the character
>Then loop through the string again and find the charcter that has frequency =1
>if found the charchter then return it or if no nonrepeating charcter found then return null*/
/*
function nonRepeatingchar(str){
    const freq =new Map()
    //count frquency of each charater
    for(let i =0;i<str.length;i++){
        const ch=str[i]
        freq.set(ch, (freq.get(ch)|| 0) + 1)
    }
    //secondly,find the charachter whose frequency =1
    for(let i =0;i<str.length;i++){
        const ch=str[i]
        if(freq.get(ch)===1){
            return ch
        }
    }
  return -1 //if all charcters are repetative
}
let name ="TapasPattanaik".toLowerCase()
let result =nonRepeatingchar(name)
//console.log("Non repeatative charachters are",result)



// finding the non-repetitive caharacter in a string using javascript


function firstnonRepeativechar(str){ //create a function

    let count ={} //create a object that will strore the character count

    //loop through the string
    for(let i=0;i<str.length;i++){
        let ch = str[i]; //declare ch to store the array of string

        if(count[ch]){ //count the frequency of each character
            count[ch] = count[ch] + 1;
        }else {
            count[ch]=1
        }

    }

    //loop through the string again and find the first character which has the count =1
    for(let i=0;i<str.length;i++){
        let ch = str[i]
        if(count[ch]===1){
            return ch;
        }
    }
    return -1
}

let city = "Rayagada".toLowerCase()
let city1result = firstnonRepeativechar(city)
//console.log("firstNonrepeative char is",city1result) */

// Move all zeros to the end of an array
/*
function moveAllzerotoend(arr){

    let nonZeroIndex = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex]=arr[i];//move the nonzero element to Non-zero Index
            nonZeroIndex ++; //increase the nonzero index count
            
        }

    }
//fill the remaining position with zeros
/*
while(nonZeroIndex<arr.length){
    arr[nonZeroIndex]=0;
    nonZeroIndex++
}
return arr;

}

let array =[20,0,30,-9,0,5,0,-1,0,0,2]
let result0=moveAllzerotoend(array)
console.log("all zero had moved to the end",result0) */



    //Find intersection of two array
//playing around set
// 
 /*
let mySet = new  Set([20,30,40,40,50,60]) ;
console.log(mySet);   */


//WILL ADD PROGRAM FOR SET RELATED THINGS 


/* find the highest non repeating charcter //Use of hashmap

"bbbbbbbbbbbbbbccccdddeeeeffffggggg"

we need to find the highest non repeating character, 
we have to declare three things
>one is empty object which is a hasmap that will store the charcter count as how much time it appeared
>empty array for storing the most frequent char
>highest count =0

let map ={}
for(){
if(map(char[tem]


/*
function dupArray(arr){
    let dup =[]
    for(let i=0;i<arr.length;i++){
    for(let j=i+1 ;j<arr.length;j++){
        if(arr[i]===arr[j]){
            dup.push(arr[i])
        }
    }
    }
    return dup
}
let marks =[20,40,60,80,-20,30,30,40]

let result = dupArray(marks)
console.log(result)
*/
//findind duplicate of an array using hashmap
function dupArr(arr){
    let freqCount ={} //this will store the frequency count of each element of  array
    let dupArr =[]//this will store the duolicate element in a new array so declared an empty array

    for(let i=0;i<arr.length;i++){ //This will traverse through the array
        const  char  =arr[i] //for better readbility we stored arr[i] into a constant variable that is "char "
        if(freqCount[char]){ //if the element is already present then increment the count by +1
            freqCount[char]++;
        }else{
            freqCount[char]= 1;//if element is not present then set frequency count = 1
        }
    }

//now we have to write the logic if frqeuncy count >1 then push the element to the duplicate element
   
for(let i=0;i<arr.length;i++){
    let char = arr[i]
    if(freqCount[char]>1 && !dupArr.includes(char) ){
        dupArr.push(char)
    }
}

/* instead of typlical for loop we can include the for in 
for(const key in freqCount){
    if(freqCount[key]>1){
    
        dupArr.push(Number(key))
    }
}*/
return dupArr
}

let mymarks=[70,80,40,60,70,31,80]

let myResult = dupArr(mymarks)
console.log(myResult)