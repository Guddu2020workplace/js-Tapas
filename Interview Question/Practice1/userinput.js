   //et userinput = prompt("enter your name"); // can be used in readline

   //onsole.log(userinput);

//
// reverseString.js

const readline = require('readline');

// Create an interface to read user input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a string
rl.question('Enter a string: ', (inputString) => {
  // Reverse the string
  const reversedString = inputString.split('').reverse().join('');
  
  // Output the reversed string
  console.log('Reversed string:', reversedString);

  // Close the readline interface
  rl.close();
});
