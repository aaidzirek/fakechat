// DOM Navigation = The process of navigation through the structure 
//                 of an HTML document using Javascript.

const myH1 = document.getElementById("myH1");
myH1.style.backgroundColor = "gray"

// ---------- .firstElementChild -------------

const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "......";


const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "......";

})

// -------------- .lastELementChild ----------

const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "......";

const ulElement = document.querySelectorAll("ul")

ulElements.forEach(ulElements => {
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "......";
})

for(let ulElement of ulElements){
    ulElement.style.backgroundColor = "......"
}

// ------------ .naxtElementSibling --------

const element3 = document.getElementById("vegetables");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "......";

// .previousElementSibling -------

const element4 = document.getElementById("vegetables");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = ".......";

// ------------- .parentElement -----------

const element5 = document.getElementById("ice cream");
const parent = element5.parentElement;

parent.style.backgroundColor = "........"

// ------------ .children -----------------

const element6 = document.getElementById("vegetables");
const children = element6.children;

children[0].style.backgroundColor = "hsl(0, 0%, 60%)"
children[1].style.backgroundColor = "hsl(0, 0%, 50%)"
children[2].style.backgroundColor = "hsl(0, 0%, 40%)"
children[3].style.backgroundColor = "hsl(0, 0%, 30%)"         


const fruit = document.querySelectorAll("li");
fruit[8].style.backgroundColor = "....."