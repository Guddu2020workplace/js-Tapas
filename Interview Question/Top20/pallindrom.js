   /* let str = "cuttacc";  // Input string
let isPalindrome = true;  // Assume it is a palindrome

// Loop from start to middle
for (let i = 0; i < str.length / 2; i++) {
  // Compare characters from start and end
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;  // If mismatch, set flag to false
    break;  // No need to check further, exit the loop
  }
}

// Output the result
if (isPalindrome) {
  console.log("The string is a palindrome.");
} else {
  console.log("The string is not a palindrome.");
}
*/
/*
let str = "madaum";  // Input string

// Loop from start to middle
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    console.log("The string is not a palindrome.");
    return;  // Exit function when mismatch is found
  }
}  

// If no mismatch, string is a palindrome
console.log("The string is a palindrome."); */
/*

let name = "cuttack"
for(let i = 0;i<name.length/2;i++){
if (name[i] !== name[name.length -1 -i]){
console.log("not pallindrome")
break;
}
console.log("pallindrome")
} 

*/

let place = "bbsrb"

for(let i = 0;i<place.length / 2 ; i ++){
   
     if(place[i] !== place[place.length -1 - i]){
     
     console.log("not pallindrome")
     break;
     }   


     console.log (place + " " + "is pallindrome")

    }