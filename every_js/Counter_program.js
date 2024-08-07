 
   const decreasBtn = document.getElementById("decreaseBtn");
   const resetBtn = document.getElementById("resetBtn");
   const increaseBtn = document.getElementById("increaseBtn");
   const countLabel = document.getElementById("countLabel");
   let count = 0;

   increaseBtn.onclick = function(){
      count++;
      countLabel.textcontent = count;
   }

   decreasBtn.onclick = function(){
    count--;
    countLabel.textcontent = count;
 }

 decreasBtn.onclick = function(){
    count = 0;
    countLabel.textcontent = count;
 }