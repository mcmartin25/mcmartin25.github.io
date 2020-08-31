// MConsole Web Under Construction - NoBootStrap - Minified

let gt = "&gt;";
let br = "<br>";

var last = "";

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