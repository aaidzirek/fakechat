// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons" );

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "......."
    button.textContent += ""
});

//  CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "......."
    });
});

// MOUSEEVOER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(194, 69%, 41%)"
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(194, 69%, 61%)"
    })
})


const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "Button 5" // STEP 2
newButton.classList = "myButtons"; 
document.body.appendChild(newButton); //STEP 3

buttons = document.querySelectorAll(".myButtons");

// REMOVE AN ELEMENT 

buttons.forEach(button => {
    button.addEventListener("click", event => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons")
    console.log(buttons);
    })
});