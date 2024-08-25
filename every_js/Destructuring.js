// destructuring =  extract values from arrays and objects,   |// destructuring = استخراج القيم من المصفوفات والكائنات،
//                              then assign them to variables in a convenient way  |// ثم تعيينها للمتغيرات بطريقة ملائمة
//                              [] = to perform array destructuring   |// [] = لإجراء تفكيك المصفوفات
//                              {} = to perform object destructuring  |// {} = لإجراء تفكيك الكائنات

// ---------- EXAMPLES ( ) ----------
// SWAP THE VALUE OF TWO VARIABLES |  // تبديل قيمة متغيرين

// ** ----Example(1)-----

let a = 1;
let b = 2;
[a, b] = [b, a];

// console.log(a);
// console.log(b);



// ** ----Example(2)--------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES


const colors = ["red", "green", "blue", "black", "white", "purple"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

const [firstColor, secondColor, thirdColor, fourthColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(fourthColor);
// console.log(extraColors);

// console.log(fifthColor);
// console.log(sixthColor);



// ** ----Example(3)--------------------
// EXTRACT VALUES FROM OBJECT

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarPants",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 32,
    job: "just eating(Unemployed)",
}
// console.log(person1);
// console.log(person2);

const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName); 
// console.log(age);
// console.log(job);



// ** ----Example(4)--------------------
//  DESTRUCTURE IN FUNCTION PARAMETERS

function dispalyPreson({firstName, lastName, age, job="Unemployed(just eat)"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Spongebob",
    lastName: "SquarPants",
    age: 35,
    job: "Fry Cook",
}
const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
}

dispalyPreson(person4);
dispalyPreson(person3);




// ----Example(5)--------------------- OSAMA ANTHOR ONE
// OSAMA ANTHOR ONE


let f = 55;
let m = 33;
let c = 7;
let d = 6;
let e = 65;
let g = 3;

let myFriends = ["ken", "mourad", "daivd", "abdou", "Maysa"];

[f = "Spongebob", m, c, d, e] = myFriends;
// f =  m3dosh 3la9a m3a Spongebob hta ida drto howa ydy mn 3nd myFriends !
//  Did you understand ?


// console.log(f);
// console.log(m);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(g);

// console.log(myFriends[4])

let [x, z, , y, t] = myFriends

// console.log(x);
// console.log(z);
// console.log(y);
// console.log(t);
