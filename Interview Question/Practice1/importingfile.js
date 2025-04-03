const  person = require('./class.js') // module.exports is used to export the class and require(./classname)is used to import

console.log(person)
let personobject = new person("Tapas","Pattanaik")
console.log(personobject.fullName())