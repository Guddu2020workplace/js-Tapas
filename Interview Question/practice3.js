 /*   let marks = [20,30,40,60,80]
    let newmarks = []

marks.pop()
marks.push(100)
marks.unshift(10)
marks.shift()
marks.shift()
marks.shift()
marks.shift()
marks.unshift(5000)
console.log(marks)

//newmarks=marks.slice(0,4)

marks.push(2000000)
marks.unshift(2500000)
console.log(marks)

*/
/*  Lets play arround with loops and arrays */

//find the duplicate values and print in a new array

let array = [20,30,40,60,20,30]  //initialize the array

let duplicatearray = []//initialize the empty array

//for any comparision run two loops one is inner loop and  another is for another loop with +1 increment

for(i=0;i<array.length;i++)
  {
    for (j=i+1;j<array.length;j++)
    {
       if ( array[i] == array[j])
       {
        console.log(duplicatearray.push(array.sort()))
       }
    }
  }

