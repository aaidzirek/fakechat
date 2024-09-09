// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);


// ---------- EXAMPLE 1 ----------
// ====== Short code ======

function sayHello(){
    window.alert("hello");
}

// setTimeout(sayHello, 3000);

/*setTimeout(function(){window.alert("Hello")}, 3000);*/

// ---------- EXAMPLE 2 ----------

// const timeoutId = setTimeout(() => window.alert("hello welcome to my website"), 3000);
// clearTimeout(timeoutId);

// ---------- EXAMPLE 3 ----------

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("hello welcome to my website"), 3000);
    console.log("STARTER");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}