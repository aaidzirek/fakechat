//  spread opearator = ... allows an iterable such as an 
//                    array or string to be expanded 
//                    into seperate elements 
//                    (unpacks the elements)
/*
let numbers = [-8, 1, 2, 3, 4, 5, 6];
let maximum = Math.max(...numbers);
let minmum = Math.min(...numbers)

console.log(minmum);   */

let username = "ken code";
let letters = [... username];

console.log(letters);