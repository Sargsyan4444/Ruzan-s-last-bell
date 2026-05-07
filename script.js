const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const disk = document.querySelector(".disk");

let playing = false;

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