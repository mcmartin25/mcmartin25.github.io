// This may convert to json file in the future. Using js file to store json objects is a temporary solution.

let systemInfo = {
    header: "Martin C.'s Personal Website Under Construction", 
    version: '0.0.4', 
    stable: false, 
    usable: true, 
    summary: 'MConsole Web Under Construction ', 
    description: 'MConsole Web Under Construction version', 
    copyright: 'Copyright &copy; 2020 Martin C. All rights reserved.'
};

let commands = {
    'about': 'Show Info.', 
    'clear, cls': 'Clear screen.',
    'font': 'Set different font.', 
    'github': 'Go to my Github profile.', 
    'help, ?': 'Show commands.', 
    'home': 'Go to home page.', 
    'ver': 'Show MConsole version.'
};

let fonts = [
    {en:"Inconsolata", zh_tw:"Noto Sans TC", license: urlify("https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL", "Open Font License")},
    {en:"Noto Serif", zh_tw:"Noto Serif TC", license: urlify("https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL", "Open Font License")},
    {en:"Ubuntu Mono", zh_tw:"*****", license: urlify("http://font.ubuntu.com/ufl/", "Ubuntu Font License")}
];