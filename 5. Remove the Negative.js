//pseudocode
//write a function that take an array
//define a new array to take the valus without the negative numbers
//for loop that start from 0 until the end length of the array
//if condition : if the number bigger than 0
//push the number in the new array

//code:




function theNegative(arr) {
    var re = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            re.push(arr[i])
        }
        
    }
    return re
}


var x =[1,-1,5,-8,9]
console.log(theNegative(x))

//diagram
//i = 0 => result = newArr[0] = 1
//i = 1 => result = i < 0 skip...
//i = 2 => result = newArr[1] = 4
//i = 3 => result = newArr[2] = 1