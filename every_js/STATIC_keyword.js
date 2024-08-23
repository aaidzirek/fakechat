// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

// ----------- EXAMPLE 1 -----------
/*
class MAthUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getcircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }

}

const MAthUtil1 = new MAthUtil();
*/
// console.log(MAthUtil.PI);
// console.log(MAthUtil.getDiameter(10));
// console.log(MAthUtil.getcircumference(10));
// console.log(MAthUtil.getArea(10))

// ----------- EXAMPLE 2 -----------


class User{
    static userCount = 0;

    comstructor(username){
        this.username = username;
        User.userCount++;

    static getUserCount(){
        console.log(`There are ${User.userCount} user online`);
    }

    sayHello()
        console.log(`Hello, my username is ${this.username}`);
    

    }
}
const user1 = new User("Spangebob");
const user2 = new User("Patrick");


user1.sayHello();
user2.sayHello();

// console.log(user1.username);
// console.log(user2.username);
User.getUserCount();