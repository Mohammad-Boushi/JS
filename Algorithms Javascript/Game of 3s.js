// Write a function that takes a number as an input
// If the number can be divided by 3 then divided by 3
// Else if the number -1 is divided by 3 then divide the number-1 by 3
// Else if the number +1 is divided by 3 then divide the number+1 by 3
// If the number is equal to 1 then the function should stops

function gameOfThree(number){
    for(var i=number; i>=1; i--){
        if(number%3 === 0){
            console.log(number, 0)
            number = number / 3
        }else if ((number-1) %3 === 0){
            console.log(number, -1)
            number = (number-1) / 3
        }else if ((number+1) % 3 === 0){
            console.log(number, 1)
            number = (number+1) / 3
        }
        if(number === 1){
            console.log(1)
            break;
        }
    }
}
gameOfThree(100)

// var n = 100;
// console.log(n, ' is the number of Game of 3s!');
// while (n > 1){
//   if (n % 3 === 0){
//     console.log(n, 0);
//     n = n / 3;
//   }
//   else if (n % 3 === 1){
//     console.log(n, -1);
//     n = (n - 1) / 3;
//   }
//   else {
//     console.log(n, +1);
//     n = (n + 1) / 3;
//   }
// }
// console.log(n, ' is the last number and the game is finished.');

// Diagram :
// n= 100 => console.log '100, -1' ... 100-1 / 3 = 33
// n= 33 => console.log '33, 0' ... 33 / 3 = 11
// n= 11 => console.log '11, 1' ... 11+1 / 3 = 4 
// n= 4 => console.log '4, -1' ... 4-1 / 3 = 1
// n= 1 ... the function stops