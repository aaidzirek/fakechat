// .reduce() = reduce the elements of an array
//            to a single value
/*
const prices = [5, 30, 10, 15, 20, 25];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator + element;
}*/


const grades = [89, 67, 56, 45, 73, 50];

const maximum = grades.reduce(getMAx);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMAx(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


