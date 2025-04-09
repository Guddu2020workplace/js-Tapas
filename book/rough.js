let salary =[25000,50000,90000,75000,50000,75000]
let duparray =[]


for(let i =0;i<salary.length;i++){
    for(let j=i+1;j<salary.length;j++){

        if(salary[i] === salary[j]){
            duparray.push(salary[i])
        }
    }
}

console.log(duparray)
/* sorting an array,
finding duplicate in an array,
duplicate an array,
finding the largest number in an array
find the smallest number in an array

console.log(salary) */