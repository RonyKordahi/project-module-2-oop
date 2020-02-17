let videoMinutes = 3;
let videoSeconds = 25;
const span = document.createElement("span");
span.style.position = "fixed";
span.style.top = "40%";
span.style.right = 90;
span.style.color = "black";
span.style.fontSize = "3em";

span.innerHTML = `0${videoMinutes}:${videoSeconds}`;
document.getElementById("app").appendChild(span);

const timerCountdown = setInterval(function() {

    --videoSeconds;

    if (videoSeconds === 0 && videoMinutes > 0) {
        videoSeconds = 60;
        --videoMinutes;
    }
    if (videoSeconds === 0 && videoMinutes === 0) {
        clearInterval(timerCountdown);
    }

    if (videoSeconds < 10) {
        timer = `0${videoMinutes}:0${videoSeconds}`;
    }
    else {
        timer = `0${videoMinutes}:${videoSeconds}`;
    }
    span.innerHTML = timer;
    document.getElementById("app").appendChild(span);
}, 1000);