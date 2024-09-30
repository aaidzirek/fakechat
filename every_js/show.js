
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide"
    }
    
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show"
    }
})

myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "purple"
})

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "gray"
})

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "black"
})

// display / visibility