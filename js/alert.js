var alert = document.getElementById("alert");
var closebtn = document.getElementsByClassName("alertclose")[0];

closebtn.onclick = function() {
  alert.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == alert) {
    alert.style.display = "none";
  }
}