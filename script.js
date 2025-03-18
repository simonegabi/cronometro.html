let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let laps = [];

function startTimer() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("timer").innerText = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function markLap() {
    if (interval) {
        let lapTime = (hours < 10 ? "0" + hours : hours) + ":" +
                      (minutes < 10 ? "0" + minutes : minutes) + ":" +
                      (seconds < 10 ? "0" + seconds : seconds);
        laps.push(lapTime);
        updateLaps();
    }
}

function updateLaps() {
    let lapList = document.getElementById("laps");
    lapList.innerHTML = "";
    laps.forEach((lap, index) => {
        let li = document.createElement("li");
        li.textContent = "Volta " + (index + 1) + ": " + lap;
        lapList.appendChild(li);
    });
}

