//pseudocode
//write a function that take array and a word 
//for loop that start from 0 until the end
//if the element is same the word remove it
//for loop put * in the value of element
//rutern the arry

//code


function Communist(arr,liter) {
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == liter ) {
          arr[i] = ""
          for (var n = 0; n < liter.length; n++) {
            arr[i] += "*"
              
          }
        }
        
    }
    return arr
}



var y = ['Man', 'I','Love','The','Matrix','Program'];

 console.log(Communist(y,"The"))

 //diagram
 //i = 0 => man != The
 //i = 1 => I != The
 //i = 2 => Love != The
 //i = 3 => The != The 
 //                      n = 0 => *
 //                      elc.....
 
