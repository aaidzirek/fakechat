// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,            
//                function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 25,
    isEmployed: true,
    sayHello: function(){console.log("hi! I am David!")},
    eat: () => console.log("I am eating a krabby Patty"),
}

const person2 = {
    firstName: "Patrick",
    lastName: "star",
    age: 28,
    isEmployed: false,
    // sayHello: function(){console.log("hey! I am Patrick...")},
    sayHello: () => console.log("hey! I am Patrick..."),
    eat: () => console.log("I am eating roast, chiken, and pizza"),
}

// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2);
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();
