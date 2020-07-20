let btn = document.getElementById('CookieClick');
    let target = document.getElementById('score');
    let multi =  document.getElementById('multiplicator');
     let x =0;
     let y=0;


    function incLocal() {
         x+=1;
     target.innerHTML = x;
     y+=1;
     

    }

    btn.addEventListener('click', incLocal);


    function lessCredit(){
    x = target.innerHTML - parseInt(multi.value);
    // target.innerHTML= (parseInt(target.innerHTML) - parseInt(multi.value));
     
    target.innerHTML=x+y;
    multi.value = parseInt(multi.value)*2;
       if (x<0) {
           target.innerHTML = 0;
       }
       else if (x< parseInt(multi.value)){
        multi.disabled = true;
           
       }
       else if (x>=parseInt(multi.value)){
           multi.disabled= false;
       }
    };
    multi.addEventListener('click', lessCredit);
