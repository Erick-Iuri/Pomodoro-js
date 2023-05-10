const BotãoStar = document.querySelector(".Botão-go");
const BotãoStop = document.querySelector(".Stop");
const BotãoReset = document.querySelector(".Reset");


const Timer = document.querySelector(".Display");
let interval = ""
let timeleft = 10;

function update() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    Timer.innerHTML = formattedTime
}

function StartTimer() {
    interval = setInterval(()=>{
        timeleft--;
        update();
        if(timeleft == 0) {
            clearInterval(interval);
            alert("Hora do café!");
            timeleft = 1500;
            update();
        }
    }, 1000)
}

function StopTimer() {
    clearInterval(interval);
}

function ResetB() {
    clearInterval(interval);
    timeleft = 1500;
    update();
}

BotãoStar.addEventListener("click", StartTimer);
BotãoStop.addEventListener("click", StopTimer);
BotãoReset.addEventListener("click", ResetB);

