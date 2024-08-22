var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var time = document.getElementById("time");

var seconds = 0;
var minutes = 0;
var hours = 0;
var running = false;
var interval;

function updateDisplay() {
    time.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

start.addEventListener("click", function() {
    if (!running) {
        running = true;
        interval = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
});

stop.addEventListener("click", function() {
    running = false;
    clearInterval(interval);
});

reset.addEventListener("click", function() {
    running = false;
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
});

updateDisplay();
