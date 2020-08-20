  
//pseudocode
//write a function that take an array
//define a new array to take the valus in reverse
//for loop that start from length min 1 of the array til 0
//push the value in the new array

//code:



function shift(array){
    var sh = []

    for (var i = array.length -1; i >= 0; i--){
        sh.push(array[i])
    }
    return sh
}
    
   var x = [-8,-4,0,6,12]
   console.log (shift (x))

   
//diagram
//i = 4 => result =  12
//i = 3 => result =  6
//i = 2 => result =  0
//i = 1 => result = -4
//i = 0 => result = -8