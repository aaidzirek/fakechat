// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, arrow, function);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor  = "tomato"
    event.target.textContent =  "OUCH! 🤕"
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor  = "yellow"
    event.target.textContent =  "don't do it! 😲"
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor  = "lightgreen"
    event.target.textContent =  "click me 😂"
});



myButton.addEventListener("click", event => {
    event.target.style.backgroundColor  = "tomato"
    event.target.textContent =  "He did it 😁"
});

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor  = "yellow"
    event.target.textContent =  "Yes do it 😊 "
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor  = "lightgreen"
    event.target.textContent =  "click me 😂"
});