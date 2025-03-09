//class in javascript
class person
{
 age = 25
 //location = 'canada'
 //it 
 get location()
 {
    return "canada"
 }
}

//To access the property of any class we need to crete function using "new" keyword
let personobject = new person() //Class name and object name should not be same
console.log(personobject.age)
console.log(personobject.location)

//**********************constructor  */

//constructor is a method which is executed by default  when we create object of the class