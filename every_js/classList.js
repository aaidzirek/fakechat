// classList = Element property in JavaScript used to interact.
//                     with an element's list of classes (CSS classes);
//                     Allows you to make reusable classes for many elements.
//                     across your webpage.

// Add();
// remove();
// toggle(Remove if present, Add if not);
// replace(oldclass, newClass);
// contains();

const myButton = document.getElementById("myButton")

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

myH1.classList.add("enabled")
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "❤"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }

})

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "❤"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }

})