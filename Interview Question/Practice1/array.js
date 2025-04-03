let person = new person("Tapas","Pattanaik")
/* // Loop an array and display its original Properties
 //concepts
 //Array -Declaration
 let person = {                   //adding objects
    name:"Tapas",
    Ph:1234567890,

}

 let arr = ["Guddu", "niju","kiku",person];



  //  console.log(arr[3].Ph);
   // console.log(arr.length);
  // arr.push("Tango");//adding element from the last side of the array
   //console.log(arr);

   //// this starts removing the element from th last of the array

    //arr.pop();
    //arr.pop();
   // arr.pop();
   // arr.pop();
    //console.log(arr);
    //Different methods to dd or remove

    arr.unshift()
    arr.shift();
    console.log(arr);

    //Looping in an array
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
*/

/*const salary=[50,30,60,80]


//
salary.sort((a,b)=>b-a);
salary.sort((a,b)=>a-b); // b-a is for descending order and a-b is for ascending order


//By using (a, b) => a - b, you can ensure the array is sorted numerically and in ascending order.*/



/*

console.log(salary); */


//Aray declaration
/*
var marks = [20,30,40,80,90]
submark = marks.slice(2,5)
console.log(submark)
*/


//array.includes() is used to find the value present in an array or not
/*
console.log(marks.includes(10))
console.log(marks.includes(80))




console.log(marks.indexOf(20)) */


/* print each element of aaray
marks = [20,30,40,60,80]

for (let i = 0;i<marks.length;i++)

(
    console.log(marks[i])
)
    
*/

// sum all the elemnet of array

marks = [1,2,3,4,6]

var sum = 0

for (i=0;i<marks.length;i++)

    (
        (sum = sum + marks[i]) //if console.log is given here it will show the full step by step values
    )

   // console.log(sum) //using console.log outside of the loop gives the sum of the values of the array


    //********reduce method in js to perform sum or multiplication

   let totalMarks =  marks.reduce((sum,marks)=>sum+marks,0)

  // console.log(totalMarks) 


   // create new array of even numbers only from the existing array

   score = [12,13,14,16,19]
var evenscore = []

   for(let i=0;i<score.length;i++)
   {
        if(score[i] %2 == 0)
        (
            evenscore.push(score[i])
    )

   }
console.log(evenscore)

//*********filter method to create  a new array with the condition
let newfilterscore =  score.filter(score=> score %2 == 0)

console.log(newfilterscore)


//map function - multipy the new array with 3
 let mappedarray = console.log(newfilterscore.map(score=>score*3))

 //chaining all the functions
 let sumvalue=score.filter(score=>score %2 == 0).map(score=>score*3)
      
 console.log(sumvalue)


 //sorting an array: two scenario,array consists of number and strings

 //string array
 let family = ["bunty","guddu","linton","baba","bou","bhauja","pooja","moti"]
 console.log(family.sort())
 console.log(family.reverse())

 let salary = [00018,19,003,22,28000]

 salary.sort((a,b)=>a-b)
 console.log(salary)

 //***************************function in javascript*******************************

 //*****************************Object in javascript*******************************

   let person = {

        firstName:'Tapas',
        lastName:'Pattanaik',
        fullName : function()
            {
           console.log(this.firstName + " " + this.lastName)
           }

   }

   //calling the object by their properties and printing them

   console.log(person.lastName)
   //Can access like array index type ,here keywords are string
   console.log(person['lastName'])

   //runtime assignining values to keypaiir of objects
   person.firstName='Vinith'
   person.lastName = 'Pattanaik'

   console.log(person['firstName'])
   console.log(person['lastName'])
   person.gender = 'male' //adding properties to the object
   person.phoneNo = '0000123456'
   console.log(person)
   person.test= 'Testing' //adding properties

   console.log(person)

   delete person.test //deleting properties in realtime
   console.log(person)

   //Properties exist or not
   console.log('gender' in person) //person is the object,gender is the keyvalues which is written in strings
   console.log('test' in person)

   //printing all the values of the javascript obkect//iterating through every "person" object
   for (let key in person)
   {
    console.log(person[key])
   }
   console.log(person.fullName())


