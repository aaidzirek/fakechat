
// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."
/*
hello(leave);
goodbye(wait);


function hello(callback){
    // setTimeout(function (){
    console.log("hello!");
    callback();
    // }, 3000);
}
function wait(){
    console.log("Wait");
}
function leave(){
    console.log("leave!");
}
function goodbye(callback){
    console.log("Goodbye!");
    callback();
}*/

sum(displayPage, 1, 3)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayconsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH2").textContent = result;
}
// function displayParagraph(result){
//  document.getElementById("myP").textContent = result;
// }