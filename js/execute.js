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
        case "home":
            $(location).attr("href", "index.html");
            break;
        case "help":
        case "?":
            help();
            break;
        case "ver":
            typeset(systemInfo.description);
            typeset(systemInfo.header+" "+systemInfo.version);
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
