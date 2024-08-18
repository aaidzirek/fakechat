// array = a variable like strcture that can hold
//           more than 1 value


let fruits = ["apple", "orange", "banana", "coconut", "mango"];
                                 /*
 fruits[3] = "coconut";
 fruits.push("coconut");
 fruits.pop();
 fruits.unshift("mango");
 fruits.shift();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits);
console.log(index);
console.log(numOfFruits);         */

// for(let i = 0; i < fruits.length; i+=2){
// for(let i = fruits.length -1; i >= 0; i--){

fruits.sort().reverse();

for(let fruit of fruits){
   console.log(fruit);
}

