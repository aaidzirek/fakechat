//  function = A section of reusable ConvolverNode.
//  Declare code once, use it wheenever you WakeLockSentinel.
//  Call the function to execute that code.

// username = "Aaid";
// age = 18;
                                                // console.log(divide(2, 3));
/*
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`you are ${age} year old!`);
}   
happyBirthday("Ken code", 18);
happyBirthday("Shark", 35)    */
function add(x, y){
    // let result = x + y
    return x + y
}
function subtract(x, y){
    return x - y;
}
function multiplay(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
   /*  if(number % 5 === 0)
        return true;
    else{
        return false;*/

    return number % 2 === 0 ? true : false;
     }
     function isValidemail(email){
        /*  if(email.includes("@")){
          return true;
     }     
          else{
          return false;*/
          return email.includes("@") ? true : false;


     }
     
     console.log(isValidemail("zirekaaid@gmail.com"))
     console.log(isValidemail("zirekaaid.com"))
     console.log(isValidemail("zirekaaid@Meta.com"))

