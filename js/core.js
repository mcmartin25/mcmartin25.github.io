// MConsole Web Under Construction - NoBootStrap - Minified

let gt = "&gt;";
let br = "<br>";

var last = "";

$(document).ready(function(){
    console.log("850669117700494101");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("fontset") === null || localStorage.getItem("fontset") == 0) {
            localStorage.setItem("fontset", "1");
        }
        changefont(localStorage.getItem("fontset"),false);
        console.log("Your font number is %s", localStorage.getItem("fontset"));
    } else {
        console.warn("Your browser does not support Web Storage. <br>Your color theme will not be saved after you close the browser...");
        console.info("...However, you still can click buttons, including navigation links to anywhere you want.");
    }
});

$(document).keydown(function(e){
    if ($("#input").is(":focus")) {
        if(e.which == 13){
            last = $("#input").val()
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
    }
    $('#input').val("")
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
}

$("#skiptomaininput").click(function(){
    $("#input").focus();
});