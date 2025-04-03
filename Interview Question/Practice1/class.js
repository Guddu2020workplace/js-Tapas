//class in javascript
module.exports= class person   // module.export is used to export the class and it will be available to public to use
{
 age = 25
 //location = 'canada'
 //it 
 get location()
 {
    return "canada"
 }
//constructor is a method which is executed by default  when we create object of the class
 constructor(firstName,lastName)
 {
    this.firstName = firstName
    this.lastName = lastName
 }
 //Methods
 fullName()
 {
    console.log(this.firstName+" "+this.lastName)
 }

}

//access the property of any class we need to crete function using "new" keyword
/*
let personobject = new person("Tapas","Pattanaik") //Class name and object name should not be same
// let    personobject1 = new person("vinith","Pattanaik") */


/*

console.log(personobject.age)
console.log(personobject.location)
console.log(personobject.fullName())
console.log(personobject1.fullName()) */




//**********************constructor**************************/



