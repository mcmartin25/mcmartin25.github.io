function execute(command){
    let data = command.split(/\s(.+)/)[0];
    let index = command.split(/\s(.+)/)[1];
    switch(data.toLowerCase()){
        case "about":
            // https://stackoverflow.com/a/17143667
            if ($(location).prop('href').split('/').pop() != "about.html") {
                $(location).attr("href", "about.html");
            }
            break;
        case "blog":
            $(location).attr("href", "blog.html");
            break;            
        case "crash":
            if ($(location).prop('href').split('/').pop() != "404.html") {
                $(location).attr("href", "404.html");
            }
            break;
        case "clear":
        case "cls":
            $('#content').html("");
            break;
        case "font":
            changefont(index);
            break;
        case "github":
            $(location).attr("href", "https://github.com/mcmartin25.html");
            break;
        case "help":
        case "?":
            help();
            break;
        case "home":
            if (document.location.pathname == "/") {
                typeset("Command error - Task failed successfully.");
            }else if (document.location.pathname == "/index.html"){
                typeset("Command error - Task failed successfully.");
            }else{
                $(location).attr("href", "index.html");
            }
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

// desc properties are only used when startup
function changefont(mode, desc=true){
    removeBodyClasses("font-set");
    switch (String(mode)) {
        case "1":
        case "none":
        case "default":
            if (desc){
                typeset("Reset to default font. Using Inconsolata and Noto Sans TC. Licensed under "+ urlify("https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL", "Open Font License") +"");
            }
            // removeBodyClasses("font-set");
            localStorage.setItem("fontset", "0");
            break;
        case "2":
            if (desc) {
                typeset("Default terminal font that used in Ubuntu. Licensed under the " + urlify("http://font.ubuntu.com/ufl/", "Ubuntu Font License") + ".");
            }
            $("body").addClass("font-set2");
            localStorage.setItem("fontset", "2");
            break;
        case "3":
            if (desc) {
                typeset("The Windows default fonts set since Windows 3.1, Times New Roman and MingLiu. Now, the open source replacements, The Noto Serif and Noto Serif TC, which licensed under "+ urlify("https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL", "Open Font License") +", will be used here.");
            }
            $("body").addClass("font-set1");
            localStorage.setItem("fontset", "1");
            break;
        default:
            // if (desc){
                typeset("No font set chosen. Press a number after enter font command.");
                typeset("Here's all available fonts you can choose");
                typeset('<table class="fontlist">',false);
                $('.fontlist').append(`<tr>
                <td class="fontlist-index">&nbsp;</td>
                <td class="fontlist-lang-en">English font</td>
                <td class="fontlist-lang-zhtw">Traditional Chinese font</td>
                <td class="fontlist-lang-license d-none d-xs-none d-md-block">License</td>
                </tr>`);
                $.each(fonts, function(i, objcon){
                    $('.fontlist').append(`<tr>
                    <td class="fontlist-index">`+(i)+`</td>
                    <td class="fontlist-lang-en">`+objcon.en+`</td>
                    <td class="fontlist-lang-zhtw">`+objcon.zh_tw+`</td>
                    <td class="fontlist-lang-license d-none d-xs-none d-md-block">`+objcon.license+`</td>
                    </tr>`);
                });
                typeset('</table>',false);
                typeset("using <kbd>font [index]</kbd> command.");
            // }
            break;
    }
}

function help(){
    typeset('<table class="help">',false);    
    $.each(commands, function(command, content){
        $('.help').last().append(`<tr>
        <td class="help-command"><kbd>`+command+`</kbd></td>
        <td class="help-content">`+content+`</td>
        </tr>`);
    });
    typeset('</table>',false);
}

// https://stackoverflow.com/a/28608620
function removeBodyClasses(){
    $("body[class*='font-set']").removeClass (function (index, css) {
        return (css.match (/(^|\s)font-set\S+/g) || []).join(' ');
    });
}


function typeset(content, newline = true){
    if (newline){
        $('#content').append(content+br);
    }else{
        $('#content').append(content);
    }
}

// https://stackoverflow.com/a/1500501
function urlify(urltext, displaytext) {
    var result;
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return urltext.replace(urlRegex, function(url) {
        if (displaytext) {
            result = '<a href="' + url + '">' + displaytext + '</a>'
        } else {
            result = '<a href="' + url + '">' + url + '</a>'
        }
        return result;
    })
}