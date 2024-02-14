let hours = 0, minutes = 0, seconds = 0;
let timer = null;
let displayTime = document.getElementById("display");
let lapss = document.getElementById("laps");
let lapCount=0 ;
let lapList=[];

function start() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    
        displayTime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function watchstart() {
        timer = setInterval(start, 1000);
  
}

function stop() {
        clearInterval(timer);
   
}
function lap() {
   
        let li = document.createElement("li")
        let number = document.createElement("span");
        let timeStamp=document.createElement("span")
        
        li.setAttribute("class","lap-item");
        number.setAttribute("class","number");
        timeStamp.setAttribute("class","time-stamp");
        number.innerText= `#${lapCount++} `;
        timeStamp.innerText= formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        li.append(number, timeStamp);
        lapss.append(li);



}



function reset(){
        clearInterval(timer);
        [hours,minutes,seconds]=[0,0,0];
        displayTime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
       return time < 10 ? "0" + time : time;
}
