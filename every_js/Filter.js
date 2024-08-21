// .filter() = creates a new array by filtering out
//                 elements with a callback
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = numbers.filter(isEven);
let oddNum = numbers.filter(isOdd);

console.log(oddNum);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult)
const children = ages.filter(isChild)

console.log(adults)

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}
*/

const words = ['apple', 'orange',
              'kiwi', 'banana',
              'pomegranate', 'coconut'];
const Shortword = words.filter(getShortword);
const longword = words.filter(getLongword);

console.log(longword)

function getShortword(element){
    return element.length <= 6;
}

function getLongword(element){
    return element.length > 6;
}