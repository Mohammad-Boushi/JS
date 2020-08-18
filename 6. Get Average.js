//pseudocode
//write a function that take an array
//define a variable that sum the numbers of the array
//return the variable after dividing by the length of the array



//code

function Average(arr){
    var av = 0;
    for(var i = 0 ; i < arr.length ;i++){
       av += arr[i]
    }
    av = av/arr.length
    return(av)
}



var x = [5,9,4]

console.log(Average(x))

//diagram
//result => the avarage of the array elements