// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

}

class FIsh extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fIsh = new FIsh("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);
