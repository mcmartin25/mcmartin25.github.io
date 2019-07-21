//Media video player Control

document.addEventListener("DOMContentLoaded", function() { 
    startvplayer(); 
}, false);

var vplayer;
var vmuteBtn = document.getElementById("vmute");

function startvplayer() {
    vplayer = document.getElementById('videoPlayer');
    vplayer.controls = false;
}

function playVid(){
    vplayer.play();
}

function pauseVid(){
    vplayer.pause();
}

function stopVid() {
    vplayer.pause();
    vplayer.currentTime = 0;
}

function muteVid() {
    if (vplayer.muted == false) {
        vplayer.muted = true;
        vmuteBtn.value = "Unmute";
    } else {
        vplayer.muted = false;
        vmuteBtn.value = "Mute";
    }
}