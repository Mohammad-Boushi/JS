let salaries = {
    // Fred: 100,
    // Ted: 160,
    // Ghaith: 130,

  sumAll(){
        let x =  this.Fred + this.Ted + this.Ghaith > 0 ?  this.Fred + this.Ted + this.Ghaith : 0
        return x
        }
  }




  
// let sum = 0;
// for (let i in salaries) {
//   if (salaries.length != 0 ) {
//     sum += salaries[i];
//   }
// }

  console.log(salaries.sumAll())