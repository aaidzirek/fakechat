//  NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);

let attenpts = 0;
let guess;
let running = true;

while(running){
45451545;45
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

       if(isNaN(guess)){
          window.alert("Please enter a valid number");
       }
       else if(guess < minNum || guess > maxNum){
          window.alert("Please enter a valid number");
       }
       else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!!");
        }
        else if(guess > answer){
            window.alert("TOO HICH! TRY AGAIN!!");
        }
        else{
              window.alert(`CORRECT! The answer was ${answer}. It took you ${attempsts} attempts`);
              running = false;
        }
       }
}