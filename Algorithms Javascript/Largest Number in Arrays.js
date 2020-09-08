



function largest(array) {
    var max = []
    for (let i = 0; i < array.length; i++) {
       max [i] = array [i] [i]
       for (let n = 0; n < array[i].length; n++) {
           if (array [i][n]> max[i]) {
               max [i] = array [i][n]
           }
           
       }
        
    }
    return max
}



x =([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

console.log(largest(x))