function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var currentDate = document.getElementById('date');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date().toLocaleDateString('en-US', options);

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    currentDate.innerHTML = date;
}
var interval = setInterval(clock, 1000);