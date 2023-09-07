let sld = document.querySelectorAll('.slider');
// condition for next slide
var i = 0;
function next() {
    sld[i].style.animation = ' nxt1 0.5s ease-in forwards';
    if (i >= sld.length - 1) {
        i = 0;
    }
    else {
        i++;

    }
    sld[i].style.animation = 'nxt2 0.5s ease-in forwards';
}
// condition for previous slide

function prev() {
    sld[i].style.animation = ' prev1 0.5s ease-in forwards';
    if (i == 0) {
        i = sld.length - 1;
    }
    else {
        i--;

    }
    sld[i].style.animation = 'prev2 0.5s ease-in forwards';
}

// autometic slide show!

function start(){
    stop = setInterval(timer,2000);
    function timer(){
        next();
    }

}
start();
// stop when mouseover
const stp =document.querySelector('.container');
 stp.addEventListener('mouseover',function(){
    clearInterval(stop);
 })
// restart autosliding
stp.addEventListener('mouseout',start);
