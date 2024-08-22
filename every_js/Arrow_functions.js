// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code




/*
const hello = function(){
    console.log("Hello");
}

// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {console.log(`Hello ${name}`);
                         console.log(`You are ${age} years old`)}; 
hello("Bro", 18);

// ---------- EXAMPLE 2 ---------- 
setTimeout(function(){
    console.log("Hello");
}, 3000);

//**--------Abbreviation -------**

setTimeout( () => console.log("Hello"), 3000);
*/

// ---------- EXAMPLE 3 ----------

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNum = numbers.filter((element) => element % 2 === 0);
const oddNum = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element)


console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(total);

