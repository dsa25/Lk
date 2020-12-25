function mainClock(){
    var date = new Date();
    $('#clock .clock__time').text(date.toLocaleString("ru", {hour: 'numeric',  minute: 'numeric',  second: 'numeric'}));
    $('#clock .clock__date').text(date.toLocaleString("ru", {month: 'long',  day: 'numeric'}));
}

var mainClockId = setInterval(mainClock, 1000);

mainClock();