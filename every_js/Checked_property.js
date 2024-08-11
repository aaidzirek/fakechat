
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subReslut = document.getElementById("subReslut");
const paymentReslut = document.getElementById("paymentReslut");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subReslut.textContent = `you are sybscribed!?`;
    }
    else{
        subReslut.textContent = `you are NOT sybscribed!?`;
    }

    if(visaBtn.checked){
        paymentReslut.textContent = `you are pauing with visa✔️`;
    }

    else if(masterCardBtn.checked){
        paymentReslut.textContent = `you are pauing with MasterCard✔️`;
    }
    else if(payPalBtn.checked){
        paymentReslut.textContent = `you are pauing with payPal✔️`;
    }
    else{
        paymentReslut.textContent = `you must selcet a payment type`;
    }

}