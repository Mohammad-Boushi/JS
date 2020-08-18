//pseudocode
//write a function that take an array
//for loop that end at array length
//if condition : if the value of the element smaller then 0 it will be replaced
//return the array with the new values


//code


function NumberToString(arr){
    
    for(var i = 0 ; i < arr.length ;i++){

      if (arr[i]<0) {
        arr[i] = "Turing"
      }
      
    }
    return(arr)
}


var x = [-5,9,-2,4]

console.log(NumberToString(x))

//diagram
//i = 0 => result = 2
//i = 1 => result = Turing
//i = 2 => result = 6
//i = 3 => result = Turing