
// getter = special method that makes a property readable     | // getter = طريقة خاصة تجعل الخاصية قابلة للقراءة
// setter = special method that makes a property writeable    |// setter = طريقة خاصة تجعل الخاصية قابلة للكتابة
//validate and modify a value when reading/writing a property |//تحقق من صحة القيمة وتعديلها عند قراءة/كتابة خاصية

// ---------- EXAMPLE 1 ----------

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`; // toFIxed is Add what is behind the comma
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`; // * To calculate the total
    }
}

const rectangle = new Rectangle(9, 8);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// ---------- EXAMPLE 2 ----------

class Person{

    constructor(firstName, lastName, age){
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error(`First name must be a non-empty string`);
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error(`Last name must be a non-empty string`);
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error(`Age must be a non-empty number`);
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "squarpants", 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);