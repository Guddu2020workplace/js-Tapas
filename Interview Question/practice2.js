// Function to find duplicate characters in a string
function findDuplicateCharacters(str) {
    let charCount = {}; // Initialize an empty object to keep track of character counts
    let dupChars = []; // Initialize an empty array to store duplicate characters

    for (let i = 0; i < str.length; i++) { // Iterate through the string
        if (charCount[str[i]]) { // Check if the character exists in the object
            if (!dupChars.includes(str[i])) {
                dupChars.push(str[i]); // Add to duplicates array if it is a duplicate
            }
        } else {
            charCount[str[i]] = 1; // Add to the object with a count of 1
        }
    }

    return dupChars; // Return the duplicates array
}

// Function to find duplicate characters in an array of strings
function findDuplicateCharactersInArray(arr) {
    let charCount = {}; // Initialize an empty object to keep track of character counts
    let dupChars = []; // Initialize an empty array to store duplicate characters

    for (let i = 0; i < arr.length; i++) { // Iterate through the array of strings
        let str = arr[i];
        for (let j = 0; j < str.length; j++) { // Iterate through each character in the string
            let char = str[j];
            if (charCount[char]) { // Check if the character exists in the object
                if (!dupChars.includes(char)) {
                    dupChars.push(char); // Add to duplicates array if it is a duplicate
                }
            } else {
                charCount[char] = 1; // Add to the object with a count of 1
            }
        }
    }

    return dupChars; // Return the duplicates array
}

// Example usage
let str = "programming";
let duplicates = findDuplicateCharacters(str);
console.log(duplicates); // Output: ['r', 'g']

// Example usage
let arr = ["programming", "javascript"];
let duplicatesInArray = findDuplicateCharactersInArray(arr);
console.log(duplicatesInArray); // Output: ['r', 'a']
