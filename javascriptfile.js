$(document).ready(function () {
    var deadline = 'April 6 2019 21:12:00 GMT+03:00';
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'alarm.mp3';

    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime){
        var clock = document.getElementById(id);
        var timeinterval = setInterval(function(){
            var t = getTimeRemaining(endtime);
            if (t.hours < 1 && t.minutes < 1) {
                clock.innerHTML =  t.seconds;
                $(".block").addClass("-minute");
            }else if (t.hours < 1) {
                clock.innerHTML =  t.minutes + ':' + t.seconds;
                $(".block").addClass("-hour");
            } else clock.innerHTML = t.hours + ':'   + t.minutes + ':' + t.seconds;
            if(t.total<=0){
                clearInterval(timeinterval);
                audio.play();
            }

        },1000);
    }

    initializeClock('3232', deadline);


});
