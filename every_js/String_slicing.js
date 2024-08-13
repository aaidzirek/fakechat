
/*
const fullName = "Aaid abdalah"

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 12);

// let firstchar = fullName.slice(0, 1);
//let lastchar = firstName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
// console.log(lastName);
 */

const email = "zirekaaid@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 2); 

console.log(username);
console.log(extension);