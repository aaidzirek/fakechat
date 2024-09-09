// DIICE ROLLER PROGRAM

function rollDice(){
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];      
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        if(numOfDice > 6){
            document.getElementById("error").innerText = "please select a number between 1-6";
        }else{
            const value = Math.floor(Math.random() * 6) + 1;
            // console.log(value);
            values.push(value);
            images.push(`<img src="../dice_images/${value}.png" alt="Dice ${value}">`);
            document.getElementById("error").innerText = "";
        }
      
    }
    numOfDice > 6 ? diceResult.textContent = "" : diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
 