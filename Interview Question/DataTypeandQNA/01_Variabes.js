const accountId = 9938723778
let accountEmail = "abc@gmail.com"
var accountPassword = "2025"
accountcity = "Bhubaneswar"
let accountState = "Odisha"

//let accountSate; //if variable is declared but value is not assigned then it will be undefined 
accountEmail = "Niju@123"
accountPassword = "2026"
//accountId = 9938723779 // Error: Assignment to constant variable.

// prefer not to use var because it is function scoped ,block scope and can be redeclared
console.log(accountId)
//console.log(accountEmail)
//console.log(accountPassword)
//console.log("Tapas")
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])

//