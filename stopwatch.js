// // let w;

// // function startWorker() {
// //   if(typeof(w) == "undefined") {
// //     w = new Worker("../javascript/stopwatch.js");
// //   }
// //   w.onmessage = function(event) {
// //     document.getElementById("result").innerHTML = event.data;
// //   };
// // }

// // function stopWorker() { 
// //   w.terminate();
// //   w = undefined;
// // }







// (function timer() {
//     'use strict';

//     var output = document.getElementById('timer');
//     var toggle = document.getElementById('toggle');
//     var clear = document.getElementById('clear');
//     var running = false;
//     var paused = false;
//     var timer;

//     var then;
//     var delay;
//     var delayThen;


//     var start = function () {
//         delay = 0;
//         running = true;
//         then = Date.now();
//         timer = setInterval(run, 51);
//         toggle.innerHTML = 'stop';
//     };


//     var parseTime = function (elapsed) {
//         var d = [3600000, 60000, 1000, 10];
//         var time = [];
//         var i = 0;

//         while (i < d.length) {
//             var t = Math.floor(elapsed / d[i]);

//             elapsed -= t * d[i];

//             t = (i > 0 && t < 10) ? '0' + t : t;
//             time.push(t);
//             i++;
//         }

//         return time;
//     };


//     var run = function () {
//         var time = parseTime(Date.now() - then - delay);
//         output.innerHTML = time[0] + ':' + time[1] + ':' + time[2] + '.' + time[3];
//     };


//     var stop = function () {
//         paused = true;
//         delayThen = Date.now();
//         toggle.innerHTML = 'resume';
//         clear.dataset.state = 'visible';
//         clearInterval(timer);

//         run();
//     };


//     var resume = function () {
//         paused = false;
//         delay += Date.now() - delayThen;
//         timer = setInterval(run, 51);
//         toggle.innerHTML = 'stop';
//         clear.dataset.state = '';
//     };


//     var reset = function () {
//         running = false;
//         paused = false;
//         toggle.innerHTML = 'start';
//         output.innerHTML = '0:00:00.00';
//         clear.dataset.state = '';
//     };


//     var router = function () {
//         if (!running) start();
//         else if (paused) resume();
//         else stop();
//     };

//     toggle.addEventListener('click', router);
//     clear.addEventListener('click', reset);

// })();






let hr = min = sec = ms = "0" + 0,
    startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    }, 10); //1000ms = 1s

}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}









