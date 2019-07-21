var modal = document.getElementById("Modal");

var btn = document.getElementById("modalBtn");

var span = document.getElementsByClassName("modalClose")[0];

var closebtn = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

closebtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}