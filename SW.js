let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener('click', function() {
    timer = true;
    // Start the timer
});

stopBtn.addEventListener('click', function() {
    timer = false;
    // Stop the timer
});

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    // Reset the timer
});

// Function to update the timer
function updateTimer() {
    if (timer) {
        count++;
        if (count >= 100) {
            second++;
            count = 0;
        }
        if (second >= 60) {
            minute++;
            second = 0;
        }
        if (minute >= 60) {
            hour++;
            minute = 0;
        }
        document.getElementById('hour').innerHTML = hour.toString().padStart(2, '0');
        document.getElementById('minute').innerHTML = minute.toString().padStart(2, '0');
        document.getElementById('second').innerHTML = second.toString().padStart(2, '0');
        document.getElementById('count').innerHTML = count.toString().padStart(2, '0');
    }
}

// Call the updateTimer function every 10 milliseconds
setInterval(updateTimer, 10);