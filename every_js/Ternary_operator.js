// ternary operator = a shortcut to if{} and else{} statments
//                    helps to assign a varible based on a condition
//                    condition ? codeIftrue : codeIfFalse;


// let age = 15;
// let message = age >= 18 ? "you're an adult" : "you're a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

// let Ownacar = false; 
// let message = Ownacar ? "you own a car" : "you don't have a car";
// console.log(message);

let purchaseAmount = 140;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);