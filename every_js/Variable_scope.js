// spread opertator = ... allows an iterable such as an 
//           srray or string to be expanded
//           into seperate elements
//           (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);        
(_)
let username = "ken code";
let letters = [...username].join("_");
console.log(letters);       */

let fruits = ["apple", "orange", "banana"];
let vegtables = ["carrots", "celery","potatoes"];

let foods = [...fruits, ...vegtables, "eggs", "milk "];

console.log(foods);