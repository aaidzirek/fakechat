// Mathod chainig = calling one method after another  
//                  in one continous line of code.

let username = window.prompt("Enter your username: ");


// -------- NO METHOD CHAINING -----
/*
username = username.trim();
let letter = username.charAt();
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;

console.log(username);
*/

// -------- METHOD CHAINING --------


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);