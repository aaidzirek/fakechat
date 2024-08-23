
// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
//            person.name = this,name

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name: "Patrick",
    favFood: "mhajeb",
    sayHello: function(){console.log(`Hi! I am ${person2.name}`)},
    // eat: function(){console.log(`${person2.name} is eating ${person2.favFood} He loved `)},
    eat: () => console.log(`${person2.name} is eating ${this.favFood} He loved `),
}
person1.eat();
person2.eat();

console.log(this);
