/*//Initialize array

let marks = [20,30,60,75,80]
let revarr = [] //intilaizing empty array

for(let i = marks.length - 1; i >= 0; i--){

    revarr.push(marks[i])
}
console.log(revarr) */

//Reverse my Mobile Number; 

let mobilenum = "123456789"
let mobarr = mobilenum.split("")
console.log(mobarr)
let revmob =[]

for(let i = mobarr.length -1;i>=0;i--){
    revmob.push(mobarr[i])
}

let revnum = revmob.join("")
console.log(revmob)
console.log(revnum)