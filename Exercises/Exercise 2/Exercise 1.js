// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }



const checkAge  = (age) => (age > 18) ? true : ('Do you have your parents permission to access this page?');

console.log (checkAge(20))