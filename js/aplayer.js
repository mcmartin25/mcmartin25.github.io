//Media audio player Control

document.addEventListener("DOMContentLoaded", function() { 
    startaplayer(); 
}, false);

var aplayer;
var amuteBtn = document.getElementById("amute");

function startaplayer() {
    aplayer = document.getElementById('audioPlayer');
    aplayer.controls = false;
}

function playAud(){
    aplayer.play();
}

function pauseAud(){
    aplayer.pause();
}

function stopAud() {
    aplayer.pause();
    aplayer.currentTime = 0;
}

function muteAud() {
    if (aplayer.muted == false) {
        aplayer.muted = true;
        amuteBtn.value = "Unmute";
    } else {
        aplayer.muted = false;
        amuteBtn.value = "Mute";
    }
}