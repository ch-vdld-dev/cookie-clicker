let btn = document.getElementById('CookieClick');
    let target = document.getElementById('score');
    localStorage.getItem('caugm') === null && localStorage.setItem('caugm', 0);
    target.innerHTML = localStorage.getItem('caugm');

    function incLocal() {
        let x = parseInt(localStorage.getItem('caugm'), 10) + 1;
        localStorage.setItem('caugm', x);
        target.innerHTML = x;
    }

    btn.addEventListener('click', incLocal);