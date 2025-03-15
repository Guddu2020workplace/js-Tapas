   //  find the max Tempreture

   //initialize the array  with varibles
   let tempreture =   [30, 32, 28, 35, 29, 33, 31,65,30]

   //initilaize the max tempreature with the first element,index 0
     let    maxtemp = tempreture[0]
   //initialize the min tempreature with the first element,index 0
     let    mintemp = tempreture[0]

     //tempreture.push(42)

   //iterate through the array
   
   for(let i = 1;i<tempreture.length;i++){

    if(tempreture[i] >maxtemp){
      
        maxtemp = (tempreture[i])
    }

    if(tempreture[i] <  mintemp){
        
        mintemp = tempreture[i]

    }

    }
    console.log(maxtemp)
    console.log(mintemp)

    //


