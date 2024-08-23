// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`you drive the ${this.model} What color is it? is ${this.color} I like this color...`)
    }
}

const car1 = new Car("ford", "Moustang", 2024, "purple💜");
const car2 = new Car(" BRABUS ", "ROCKET G 900", 2025, "dark black🖤");
const car3 = new Car("Dodge", "charger", 2026, "silver🤍");

car1.drive();
car2.drive();
car3.drive();