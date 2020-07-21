let btn = document.getElementById('CookieClick');
    let target = document.getElementById('score');
    let multi =  document.getElementById('multiplicator');
     let x =0;

    function incLocal() {
     if (multi.value==="25") {
    x+=1;
     target.innerHTML = x;
     }
     if (multi.value==="50") {
         x+=2;
     target.innerHTML = x;
     }
     if (parseInt(multi.value)>50){
        x+=4;
        target.innerHTML = x;
     }
     if (x<0 && (x<parseInt)) {
        target.innerHTML = 0;
     }
     if (x< parseInt(multi.value)) {
     multi.disabled = true;
     }  
     if (x>=parseInt(multi.value)){
        multi.disabled= false;
     }
     
    }

    btn.addEventListener('click', incLocal);


    function lessCredit(){
    x = parseInt(target.innerHTML) - parseInt(multi.value);

    // target.innerHTML= (parseInt(target.innerHTML) - parseInt(multi.value));
    target.innerHTML=x;
    multi.value = parseInt(multi.value)*2;

    };
    multi.addEventListener('click', lessCredit);
