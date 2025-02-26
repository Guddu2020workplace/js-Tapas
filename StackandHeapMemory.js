// Stack meomry(used in Primitive data types) , Heap Memory (used in Non-Primitive data types)

// Stack Memory:when used ,we get copy of the variable
// Heap Memory: when used, we get reference of the variable

let myLaptop ="Dell"
let yourLaptop = myLaptop
yourLaptop = "HP"

console.log(yourLaptop)
console.log(myLaptop);

let user = {
    email: "1@gmail.com",
    num:007
}

//nonprimitive or refference data types and here objects are ccalledusing variable.object as mentioned ".email" and ".num"
let user2 = user
user2.email = "tap@gmail.com"
console.log(user.email)
console.log(user2.email)