
const friuts = [{name: "apple 🍏", color: "red", calories: 95},
                {name: "orange 🍊", color: "orange", calories: 45},
                {name: "banana 🍌", color: "yellow", calories: 105},
                {name: "coconut 🥥", color: "white", calories: 159},
                {name: "pineapple 🍍", color: "yellow", calories: 37},
                {name: "grapges 🍇", color: "purple", calories: 62}];
            
                

// friuts.push({name: "grapges ", color: "purple", caloeies: 62});

// friuts.pop();
// friuts.splice(1, 2);

// console.log(friuts);

// -------- forEach ----------

friuts.forEach(friuts => console.log(friuts.name))


// -------- map() ----------

const frutNames = friuts.map(friut => friut.name);
const fruitColors = friuts.map(friut => friut.color);
const fruitCalories = friuts.map(friut => friut.calories);



// console.log(frutNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// -------- Filter() ----------

const yellowFriuts = friuts.filter(fruit => fruit.color === "yellow");
const lowCalFriuts = friuts.filter(friut => friut.calories < 100 )
const highCalFriuts = friuts.filter(friut => friut.calories >= 100 )


// console.log(yellowFriuts);
// console.log(lowCalFriuts);
// console.log(highCalFriuts);

// -------- reduce() ----------

const maxFruit = friuts.reduce((max, fruit) =>
                                fruit.calories >
                                max.calories ?
                                fruit : max);

const minFruit = friuts.reduce((min, fruit) =>
                                fruit.calories <
                                min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);


