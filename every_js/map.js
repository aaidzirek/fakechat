// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array
/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);
            
function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

const students = ["SponGebob", "Pat", "sandy", "belito", "basIt"];
const studentsUpper = students.map(uppercase);
const studentsLower = students.map(lowercase);

console.log(studentsLower);

function uppercase(element){
    return element.toUpperCase();
}

function lowercase(element){
    return element.toLowerCase();
}  */

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}