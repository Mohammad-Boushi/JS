// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login = 'Director';


let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '' ) ? 'No login' : '';

console.log(message)
