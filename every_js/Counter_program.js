 
   const decreasBtn = document.getElementById("decreaseBtn");
   const resetBtn = document.getElementById("resetBtn");
   const increaseBtn = document.getElementById("increaseBtn");
   const countLabel = document.getElementById("countLabel");
   let count = 0;

increaseBtn.onclick = function(){
      count++;
      countLabel.textContent = count;
      console.log(count);
}

decreasBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log(count);
 }

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    console.log(count);
 }

 