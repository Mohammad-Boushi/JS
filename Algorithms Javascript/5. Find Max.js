//pseudocode:
//write a function that take an array
//define a variable that take the max value of the elements
//for loop that start from 0 til length of the array
//if condition : the variable will take the value of the element if the element bigger than the variable
//return the variable



//code

function maxNumber(arr){
    var max = arr[0]
    for(var i = 0 ; i < arr.length ;i++){
        if (arr[i]>max) {
            max = arr[i]
        }
    }
    return(max)
}



var x = [5,9,-8,0,3,-4,7,2]

console.log(maxNumber(x))


//diagram:
//output : the bigger element of the array