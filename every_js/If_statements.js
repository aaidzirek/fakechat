// IF STATEMENTS = if a condition is true , execute some code     
        //   if not, do something else
        // console.log("hello every body")


 //let age = (51);
 //if(age >= 18){
 //  console.log("you are old enough to enter this site");
 //}
//else{
   // console.log("you must be 18+ to enter this site");
//}


//let time = 9;
//if(time < 12){
   //  console.log("Good morning!");
//}
//else{
  //  console.log("Good afternoon!");
//}


// let isstudent = false;
// if(isstudent){
    // console.log("you are a student!");
// }
// else{
    // console.log("you are a Not a student!");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){

   age = myText.value;
   age = Number(age);

    if(age >= 100){
        resultElement.textContent = `you are TOO OLD TO enter this site!?`;
  }
  else if(age == 0){
     resultElement.textContent = `you can't enter. you were iust born.`;
  }
     else if(age >= 18){
      resultElement.textContent = `you are old enough to enter this site`;
  }
    else if(age < 0){
      resultElement.textContent = `your age can't be below 0`;
  }
    else{
      resultElement.textContent = `you must be 18+ to enter this site`;
  }
}