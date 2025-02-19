// ---------- EXAMPLE 1 h1 ELEMENT ----------

// STEP 1 CREATE THE ELEMENT----------
const newH1 = document.createElement("h1");
const newP1 = document.createElement("P1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES----------
newH1.textContent = "I like pizza!";
newP1.textContent = "I hate pizza!";
newH1.id = "myH1";
newP1.id = "myP1";

// STEP 3 APPEND ELEMENT TO DOM----------
// document.body.append(newH1);
// document.body.prepend(newH1);

document.getElementById("box2").append(newH1);
document.body.prepend(newP1)

// document.body.style.backgroundColor = "lightblue";

newH1.style.color = "purple";
newH1.style.textAlign = "center";

// HOW YOU CAN put element betwin boxes----------
// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);

//  REMOVE HTML ELEMENT----------
// document.body.removeChild(newH1);
document.getElementById("box2").removeChild(newH1);


// ---------- EXAMPLE 2 li ELEMENT ----------

// STEP 1 CREATE THE ELEMENT----------
const newListItem = document.createElement(li);


// STEP 2 ADD ATTRIBUTES/PROPERTIES----------
newListItem.textContent = "coconut";

document.getElementById("fruits").append(newListItem);



// STEP 3 APPEND ELEMENT TO DOM----------
// document.body.append(newListItem);
