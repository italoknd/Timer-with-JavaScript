let sec=0;
let min=0;
let hour=0;
let interval;

function twoDigits(digits){
  if(digits<10){
    return('0'+digits);
  }else{
    return(digits)
  }
}

//start count function
function start() {
  interval = setInterval(clockIsTicking, 1);
}

//stop count function
function stop(){
  clearInterval(interval);
  sec = 0;
  min = 0;
  hour = 0;
  let timeCounter = document.getElementById('timer-counter').textContent = '00:00:00';
}

//pause count function
function pause(){
  clearInterval(interval);
}

function clockIsTicking(){
  sec++;

  if(sec == 60){
    min++;
    sec=0;
  }
  if(min==60){
    hour++;
    sec=0;
    min=0;
  }
  let timeCounter = document.getElementById('timer-counter').textContent = twoDigits(hour) + ':'+ twoDigits(min) + ':' + twoDigits(sec);
}