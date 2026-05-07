const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const disk = document.querySelector(".disk");

let playing = false;
const targetDate = new Date(2026, 4, 13, 17, 30, 0);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown(){
    const now = new Date();
    let diff = targetDate - now;

    if(diff <= 0){
        daysEl.innerHTML = "0:";
        hoursEl.innerHTML = "00:";
        minutesEl.innerHTML = "00:";
        secondsEl.innerHTML = "00:";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = String(hours).padStart(2, "0");
    minutesEl.innerHTML = String(minutes).padStart(2, "0");
    secondsEl.innerHTML = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
btn.onclick = () => {

    if(!playing){

        audio.play();

        disk.style.animationPlayState = "running";

        btn.innerHTML = "❚❚";

    }else{

        audio.pause();

        disk.style.animationPlayState = "paused";

        btn.innerHTML = "▶";
    }

    playing = !playing;
}