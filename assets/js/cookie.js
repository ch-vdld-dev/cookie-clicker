Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@riizbae 
ch-vdld-dev
/
cookie-clicker
1
0
0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
cookie-clicker/assets/js/cookie.js /
@ch-vdld-dev
ch-vdld-dev add my code to devChris
Latest commit b4703cb 3 hours ago
 History
 2 contributors
@LinardJeremy@ch-vdld-dev
89 lines (69 sloc)  2.13 KB
  
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more


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


