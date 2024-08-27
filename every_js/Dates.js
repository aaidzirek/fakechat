// Date(year, month, day, hour, minute, second, ms)
// 

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayOfweek = date.getDay();


// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(dayOfweek);

const date = new Date();

date.setFullYear(2024);
date.setMonth(1);
date.setDate(1);
date.setHours(6);
date.setMinutes(6);
date.setSeconds(6);

console.log(date);


const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}
