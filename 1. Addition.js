//pseudocode
//define a variable that sum the  numbers
//for loop that start from 200 til 2700
//if condition : if the rest of dividing the number by 3 or 5 
//print the numbers and the vatiable
//code

var x = 0
for (var i = 200; i < 2700; i++) {


    
    if ((i % 3 == 0) || (i % 5 == 0)) {
        
        console.log (i , x += i )
    }


   
}

//diagram
//i = 200 => output = number is : 200 sum : 200
//i = 201 => output = number is : 201 sum : 401
//i = 202 => output = number is : 201 sum : 401
//i = 203 => output = number is : 201 sum : 401
//i = 204 => output = number is : 204 sum : 605
//i = 205 => output = number is : 205 sum : 810