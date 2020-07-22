// let bonus = document.getElementById("bonusclick");
// bonusValue = "test";

//     function incLocal() {
//      if (multi.value==="25") {
//     x+=1;
//      target.innerHTML = x;
//      }
//      if (multi.value==="50") {
//          x+=2;
//      target.innerHTML = x;
//      }
//      if (parseInt(multi.value)>50){
//         x+=4;
//         target.innerHTML = x;
//      }
//      if (x<0 && (x<parseInt)) {
//         target.innerHTML = 0;
//      }
//      if (x< parseInt(multi.value)) {
//      multi.disabled = true;
//      }  
//      if (x>=parseInt(multi.value)){
//         multi.disabled= false;
//      }
     
//     }

//     btn.addEventListener('click', incLocal);


//     function lessCredit(){
//     x = parseInt(target.innerHTML) - parseInt(multi.value);

//     // target.innerHTML= (parseInt(target.innerHTML) - parseInt(multi.value));
//     target.innerHTML=x;
//     multi.value = parseInt(multi.value)*2;

//     };
//     multi.addEventListener('click', lessCredit);

// partie chris


// Functions

// Function to display the current cookies number and the total of the cookies
function displayScore() {
    document.getElementById("score").innerHTML = cookies;
    document.getElementById("totalcookies").innerHTML = totalcookies;
   
  }


// Function to increase the number of cookie
function increaseScore() {
    cookies += clickValue;
    totalcookies += clickValue;
    displayScore();
    EnableButtons();

}

// Function to increase the step of number of click per click
function increaseMultiplier() {
    cookies -= costmulti;
    multiplier += 1;
    clickValue = multiplier;
    /* if (bonusOn) {
        clickValue *= 2;
    } */
    costmulti *= multiplier;
    console.log(costmulti);
    EnableButtons();
    displayScore();

}

// Function to increase automatically the number of cookies
function IncreaseByAuto() {
    cookies -= costauto;
    autoclickInterval = window.setInterval(increaseScore, 1000);
    costauto *= 2;
    console.log(costauto)
    EnableButtons();
    displayScore();
}

// Function to call EnableButton with right parameters
function EnableButtons() {
    EnableButton(cookies, costmulti, multiclick);
    EnableButton(cookies, costauto, autoclick);
    EnableButton(cookies, costbonus, bonusclick);
}

// Function to check if there is enough cookies to enable the button
function EnableButton(cookies, cost, functionname) {
    if (cookies >= cost) {
        functionname.disabled = false;
    } else {
        functionname.disabled = true
    }

}
// test jeremy
let timer =  document.getElementById('timer');
function chrono(){
    timer.innerHTML = (parseInt(timer.innerHTML) +1);
}

function bonustest(){
    var x = setInterval(chrono, 1000);
    bonus.disabled = true;
    setTimeout(disabledBonus, 5000);
    if (parseInt(timer.innerHTML) == 5){
    clearInterval(x);
    }


}
function disabledBonus(){
    bonus.disabled = false;

}
bonus.addEventListener('click', bonustest);



// test jeremy



// Define button variables
let cookieclick = document.getElementById("cookieclick");
let multiclick = document.getElementById("multiclick");
let autoclick = document.getElementById("autoclick");
let bonusclick = document.getElementById("bonusclick");

// Init of variable
let cookies = 0;
let totalcookies = 0
let clickValue = 1;
let multiplier = 1
let costmulti = 10;
let costauto = 20;
let costbonus =30;


multiclick.disabled = true;
autoclick.disabled = true;
bonusclick.disabled = true;

// Main probram
cookieclick.addEventListener('click', increaseScore);
multiclick.addEventListener('click', increaseMultiplier);
autoclick.addEventListener('click', IncreaseByAuto);


