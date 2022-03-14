var min = 0;
var sec = 0;
var miliSec = 0;
var timer;
// Call timer is a main function for stopwatch
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}

// Start is a function for starting a stopwatch
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}
// stop is a function for stop a stopwatch
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}
// reset is a function for reset a stopwatch
function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}
