// MConsole Web Under Construction - NoBootStrap - Minified

let gt = "&gt;";
let br = "<br>";

var last = "";

$(document).ready(function(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("fontset")===null) {
            localStorage.setItem("fontset", "0");
        }
        changefont(localStorage.getItem("fontset"),false);
        console.log(localStorage.getItem("fontset"));
    } else {
        console.log("Your browser does not support Web Storage.");
    }
});

$(document).keydown(function(e){
    
    if ($("#input").is(":focus")) {
        console.log("Input focused");
        if(e.which == 13){
            enterval($('#input').val());
        }
        if(e.which == 38){
            $('#input').val(!last==""?last:"");
        }

    }
});

function enterval(index){
    $('#content').append(gt+index+br);
    if (!(index == "") && !(index == " ")) {
        execute(index);
    } else {
        console.log("Space error")
    }
    $('#input').val("")
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
}

$("#skiptomaininput").click(function(){
    $("#input").focus();
});