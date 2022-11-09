let [hunds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.stopwatch_container .timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = window.setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [hunds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerText = '00 : 00 : 00 . 00 ';
});

function displayTimer(){
    hunds+=1;
    if(hunds == 100){
        hunds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ht = hunds < 10 ? "0" + hunds : hunds;

 timerRef.innerText = ` ${h} : ${m} : ${s} . ${ht}`;
}
