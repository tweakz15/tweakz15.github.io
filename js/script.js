function realClock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime (m);
    s = checkTime (s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(realClock, 500);
}

function checkTime(i){
    if(i < 10) {i = '0' + 1};
    return i;
}
