
// Functions

// Function to display the current cookies number and the total of the cookies
function displayScore() {
    document.getElementById("score").innerHTML = cookies;
    document.getElementById("totalcookies").innerHTML = totalcookies;
  }


// Function to increase the number of cookie, and if bonusok true then clickValue is 200%
function IncreaseScore() {
    if (bonusok == true){
        cookies = cookies + (clickValue * 2);
        totalcookies = totalcookies + (clickValue *2);
    } else {
        cookies += clickValue;
        totalcookies += clickValue;
    }
    displayScore();
    EnableButtons();

}

// Function to increase the step of number of click per click
function IncreaseByMultiplier() {
    cookies -= costmulti;
    multiplier *= 2;
    console.log(multiplier)
    console.log(clickValue)
    clickValue = multiplier * clickValue;
    costmulti *= multiplier;
    console.log(`costmulti: ${costmulti}`);
    EnableButtons();
    displayScore();

}

// Function to increase automatically the number of cookies
function IncreaseByAuto() {
    cookies -= costauto;
    autoclickInterval = window.setInterval(IncreaseScore, 1000);
    costauto *= 2;
    console.log(`costauto: ${costauto}`)
    EnableButtons();
    displayScore();
}

// Function to decrease the time and clear the setInterval when is done
function BonusWaitTime() {
    if (bonusTime == 0) {
        bonusok = false;
        clearInterval(interval);
    }else {
        bonusok = true;
        bonusTime--;
        console.log(bonusTime + " sec");
        
    }
}

// Function to set the bonus time to 30s and call 
function IncreaseByBonus() {
    cookies -= costbonus;
    bonusTime = 15;
    interval = setInterval(BonusWaitTime, 1000);
    costbonus *= 2;
    console.log(`costbonus: ${costbonus}`)
    EnableButtons();
    displayScore();
}


// Function to call EnableButton with right parameters
function EnableButtons() {
    EnableButton(costmulti, multiclick);
    EnableButton(costauto, autoclick);
    EnableButton(costbonus, bonusclick);
}

// Function to check if there is enough cookies to enable the button
function EnableButton(cost, functionname) {
    if (cookies >= cost) {
        functionname.disabled = false;
    } else {
        functionname.disabled = true
    }

}



// Define button variables
let cookieclick = document.getElementById("cookieclick");
let multiclick = document.getElementById("multiclick");
let autoclick = document.getElementById("autoclick");
let bonusclick = document.getElementById("bonusclick");
// Disable button by default
multiclick.disabled = true;
autoclick.disabled = true;
bonusclick.disabled = true;

// Init of variable
let cookies = 0;
let totalcookies = 0
let clickValue = 1;
let multiplier = 1
let costmulti = 10;
let costauto = 20;
let costbonus =30;
let bonusok = false;


// Main program
cookieclick.addEventListener('click', IncreaseScore);
multiclick.addEventListener('click', IncreaseByMultiplier);
autoclick.addEventListener('click', IncreaseByAuto);
bonusclick.addEventListener('click', IncreaseByBonus);

