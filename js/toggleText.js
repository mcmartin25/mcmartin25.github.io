function toggleText() {
  var x = document.getElementById("subMenu");
  var mbtn = document.getElementById("subMenuBtn");
  if (x.style.display === "block") {
    x.style.display = "none";
    mbtn.style.background = "";
    mbtn.style.color = "";
  } else {
    x.style.display = "block";
    mbtn.style.background = "white";
    mbtn.style.color = "black";
  }  
}