# cronometro.html
Para criar um cronometro use este código:
!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cronômetro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Cronômetro</h1>
        <p id="timer">00:00:00</p>
        <div class="buttons">
            <button onclick="startTimer()">Iniciar</button>
            <button onclick="pauseTimer()">Pausar</button>
            <button onclick="resetTimer()">Resetar</button>
            <button onclick="markLap()">Marcar Volta</button>
        </div>
        <ul id="laps"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

h1 {
    margin-bottom: 10px;
}

p {
    font-size: 2em;
    margin: 10px 0;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

button {
    margin: 5px;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:nth-of-type(1) { background-color: #28a745; color: white; }
button:nth-of-type(2) { background-color: #ffc107; color: black; }
button:nth-of-type(3) { background-color: #dc3545; color: white; }
button:nth-of-type(4) { background-color: #007bff; color: white; }

ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
    max-height: 100px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 5px;
}

li {
    background: #f8f9fa;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    font-size: 0.9em;
}
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

