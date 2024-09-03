// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

// --------- EXAMPLE 1 ---------
// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();

// --------- EXAMPLE 2 ---------let count = 0;
function createCounter(){
    
    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount(){
        return count;
    }
    return {increment, getCount}

}
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


// counter.count = 0;
// console.log(counter.count);