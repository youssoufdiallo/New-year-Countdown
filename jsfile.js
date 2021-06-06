const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const newYear = '1 jan 2022';

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSecond = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSecond / 3600/ 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 24;
    const seconds = Math.floor(totalSecond) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    
}


countdown();
setInterval(countdown, 1000)