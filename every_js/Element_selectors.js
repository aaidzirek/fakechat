// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()              // ELEMENT OR NULL
// 2. document.getElementsClassName()        // HTML COLLECTION
// 3. document.getElementsByTagName()        // HTML COLLECTION
// 4. document.querySelector()               // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()            // NODELIST

// 1. document.getElementById() ====== 

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "lightpink";
document.body.style.backgroundColor = "lightgray"
myHeading.style.textAlign = "center";

// console.log(myHeading);

// 2. document.getElementsClassName() ======

const fruits = document.getElementsByClassName("fruits");

/**/
fruits[0].style.color = "green"
fruits[1].style.color = "orange"
fruits[2].style.color = "yellow"

for(let fruit of fruits){
    fruit.style.backgroundColor = ""
}


Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "lightpink";
    fruits[1].style.backgroundColor = "";
});

// 3. document.getElementsByTagName() ======

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");



for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "......."
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "......"
}


Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow"
});

Array.from(liElements).forEach(liElements => {
    liElements.style.backgroundColor = "lightyellow"
});

// 4. document.querySelector() ======

const element = document.querySelector("li");

// element.style.backgroundColor = "blue"

// 5. document.querySelectorAll() =====

const foods = document.querySelectorAll("li");

// foods[0].style.backgroundColor = "lightgreen";

foods.forEach(food => {
    food.style.backgroundColor = "lightgreen"
});