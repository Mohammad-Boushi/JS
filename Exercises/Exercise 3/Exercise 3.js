function getAverageAge(users){
    return users.reduce((a,b) => a + b.age,0) / arr.length
}


let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

console.log(getAverageAge(arr))  