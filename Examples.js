/*
let student = {name: "yahia",
     age: "18",
     gender: "male",
     marks: {science: 20, math:75 }
}
console.log(student.marks.science)
console.log(student['name'])
// console.log(student.name)*/


let students = [
    { firstname: "Ali", lastname: "SHerif", grade: 20, gender: "male"},
    { firstname: "Dalila", lastname: "Samh", grade: 30, gender: "female"},
    { firstname: "mourad", lastname: "zirek", grade: 34, gender: "male"},
    { firstname: "moustpha", lastname: "ahmed", grade: 41, gender: "male"}
];
const firstname = students.map((students) => {return students.firstname} );
     //  console.log(firstname);

const maleOnly = students.filter((students) => {return students.gender === "male"});
     //    console.log(maleOnly);

const personToFind = students.filter((students) => {return students.firstname === "Ali"});
     // console.log(personToFind);

let studentsMove = students.splice(0, 2);
     // console.log(students); 
     // console.log(studentsMove)

let studentsSecond = ["Tast", ...students]
     // console.log(studentsSecond);
d
const userProfile = { name: "Yahya", user: "yaya"};
const userData = {
  // take a last
     name: "Yahya",   
     address: "123 Street",
     phone: "01234567",
     age: 15,
};
let fullData = { ...userProfile, ...userData};
console.log(fullData);


let { name, address, phone} = userData
console.log(name, address, phone)


/*
1 - example
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);
function square(element){
    return Math.pow(element, 2);
}

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element){
    return Math.pow(element, 2);
});

console.log(squares);  

// ---------- EXAMPLE 3 ----------
const cubes = numbers.map(function (element){
     return Math.pow(element, 3);
 });

//**--------Abbreviation -------**

 const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);         */