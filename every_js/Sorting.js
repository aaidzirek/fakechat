// sort() = method used to sort elements of an array in place.  |// sort() = طريقة تستخدم لفرز عناصر المصفوفة في مكانها.
//               Sorts elements as strings in lexicographic order, not alphabetical  |// فرز العناصر كسلاسل حسب الترتيب المعجمي وليس الأبجدي
//               lexicographic = (alphabet + numbers + symbols) as strings  |// lexicographic = (الأبجدية + الأرقام + الرموز) كسلاسل

// ---------- EXAMPLE 1 ----------
// ---------- EXAMPLE 2 ----------

let fruits = ["apple 🍏", "orange 🍊", "banana 🍌",
              "coconut 🥥", "pineapple 🍍", "grapges 🍇"];

let numbers = [1, 10, 4, 3, 5, 9, 7, 8, 6, 2]

fruits.sort((a, b) => a - b);
// console.log(fruits);

numbers.sort((a, b) => a - b);
// console.log(numbers);

const people = [{name: "Sponegbob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 35, gpa: 1.5},
                {name: "Squidward", age: 50, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

// people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

