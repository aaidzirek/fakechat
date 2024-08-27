// nested objects = Objects inside of other Objects.                |// الكائنات المتداخلة = كائنات داخل كائنات أخرى.
//            Allows you to represent more complex data structures  |// يسمح لك بتمثيل هياكل بيانات أكثر تعقيدًا
//            Child Object is enclosed by a Parent Object           |// الكائن الفرعي محاط بكائن رئيسي
//                                                                  |
//            Person{Address{}, ContactInfo{}}                      |// الشخص{العنوان{}، معلومات الاتصال{}}
//            ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}          |// عربة التسوق{لوحة المفاتيح{}، الماوس{}، الشاشة{}}

const person = {
    fullName: "Spongebob Squarpants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "jellyfishing", "cooking"],
    address: {
        street: "125 Conch St.",
        city: "BIkini BOttom",
        countrty: "Int. Water"
    }
}
for(const property in person.address){
// console.log(person.address[property]);
}

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.countrty);


// ----------- EXAMPLE 1 -----------

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address{
    constructor(street, city, countrty){
        this.street = street;
        this.city = city;
        this.countrty = countrty;
    }
}

const person1 = new Person("Spongebob", 30, "124 Counch St.",
                                            "Bikini Bottom",
                                            "Int Waters");

const person2 = new Person("Patrick", 30, "128 Counch St.",
                                          "Bikini Bottom",
                                          "Int Waters");

const person3 = new Person("Squidward", 30, "130 Counch St.",
                                            "Bikini Bottom",
                                            "Int Waters");

console.log(person1.address.street);
console.log(person2.name);
console.log(person3.address.countrty);
console.log(personaddress);
