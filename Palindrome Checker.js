
//pseudocode
//write a function that take a string
//define a variable that take the value with small letters and splitted from the orginal text
//if condition : if the deviding of the length of the text by 2 = 0 it willkeep the proces run
//for loop that start from 0 til the half of the text's length
//if condition : if each element has the same value with his palindrome element
//return true or false it depands on the proces



//code

function checkPalindrome(word){

for(var i = 0; i < word.length/2; i++){
    if(word[i] != word[word.length-i-1]){
      return false
    }
}
return true
}

console.log(checkPalindrome("rasar"))

//diagram
//i = 0 => r == r keep the proces
//i = 1 => a == a keep the proces
//i = 2 => s == s it will return true