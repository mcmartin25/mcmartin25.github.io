function execute(command){
    let data = command.split(/\s(.+)/)[0];
    // let index = command.split(/\s(.+)/)[1];
    switch(data.toLowerCase()){
        case "about":
            $(location).attr("href", "about.html");
            break;
        case "break":
            $(location).attr("href", "404.html");
            break;
        case "github":
            $(location).attr("href", "https://github.com/mcmartin25.html");
            break;
        case "help":
        case "?":
            help();
            break;
        case "home":
            $(location).attr("href", "index.html");
            break;
        case "ver":
            typeset(systemInfo.header);
            // typeset(systemInfo.summary);
            typeset(systemInfo.description+" "+systemInfo.version);
            typeset("<i>This is a minified (and slightly modified) version of MConsole Web and this website is based on it.</i>");
            typeset("<i>If you're interested in MConsole Web, please visit " + urlify("https://github.com/mcmartin25/MConsoleWeb") + "</i>");
            break;
        default:
            typeset("Command error");
            break;
    }
}

function help(){
    typeset('<table class="help">',false);    
    $.each(commands, function(command, content){
        $('.help').last().append(`<tr>
        <td class="help-command">`+command+`</td>
        <td class="help-content">`+content+`</td>
        </tr>`);
    });
    typeset('</table>',false);
}

function typeset(content, newline = true){
    if (newline){
        $('#content').append(content+br);
    }else{
        $('#content').append(content);
    }
}

// https://stackoverflow.com/a/1500501
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
}