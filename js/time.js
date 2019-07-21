function updateClock() {
    var now = new Date(),
        time = now.getHours() + ':' + now.getMinutes()+ ':' + now.getSeconds(),
        date = [now.getDate(), now.getMonth(), now.getFullYear()].join('/');
    document.getElementById('timeNow').innerHTML = [date, time].join('   ');
    setTimeout(updateClock, 1000);
}
updateClock();

// https://stackoverflow.com/questions/5091888/how-to-update-time-regularly