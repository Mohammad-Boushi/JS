// write a function that takes n s an argument
// defined a variable result to store the result and equal it to 1
//for loop that start from 1 until the end 
// return the fa

//code
function factorialize(n) {
    fa = 1
    for (let i = 1; i <= n; i++) {
         fa = fa * i        
        
    }
    return fa
}

console.log (factorialize(4))




// diagram :
// n = 0 => result = 1
// n = -3 => result = 'the number must be bigger than 0'
// n = 4 => result = 1 * 2 * 3 * 4 = 24




