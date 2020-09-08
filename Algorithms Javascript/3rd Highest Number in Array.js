
// write a function that takes array as an input
// defined a variables first , second and third to store the results and equal them to 0 (first number in the array)
// for loop through the array
// check if the number is bigger than the variable first then change the values
// check if the number is bigger than the variable second but smaller then first then change the values
// check if number is bigger than the variable third and smaller than second then change the values
// return the variable third

//code

function number(array) {
max0 = 0
max1 = 0
max2 = 0
for (let i = 0; i < array.length; i++) {
    if (array [i]> max0) {
        max2 = max1
        max1 = max0
        max0 = array[i]
    }else if (condition) {
        
    }
    
}
return max2
}





x =[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
console.log(number(x))



// function thirdNumber(array){
//     var first = 0
//     var second = 0
//     var third = 0
//     for(var i=0; i<array.length; i++){
//         if(array[i] > first){
//             third = second
//             second = first
//             first = array[i]
//         }else if ((array[i] > second) && (array[i] < first)){
//             third = second
//             second = array[i]
//         }else if((array[i] > third) && (array[i] < second)){
//             third = array[i]
//         }
//     }
//     return third
// }
// var x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// console.log(thirdNumber(x))


// // first = 11; second = 9; third = 8
// // x[i] = 20 => third = 9; second = 11; first = 20
// // x[i] = 31 => third = 11; second = 20; first = 31
// //  ....etc