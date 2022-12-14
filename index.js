// var sound=new Audio();
// sound.src="https://www.videvo.net/royalty-free-music-track/just-happy/1021808/";
// var Timer;
// function setAlarm(button)
// {
// 	var ms=document.getElementById("datetime").valueAsNumber;
// 	if(isNaN(ms)){
// 		alert("please setAlarm")
// 		return;
// 	}
// 	var alarm=new Date(ms);
// 	var alarm_time=new Date(
// 		alarm.getUTCFullYear(),
// 		alarm.getUTCMonth(),
// 		alarm.getUTCDate(),
// 		alarm.getUTCHours(),
// 		alarm.getUTCMinutes(),
// 		alarm.getUTCSeconds()
// 		);
// 	var differenceInMs=alarm_time.getTime()-new Date().getTime();
// 	if(differenceInMs<0){
// 		alert("Specified time is already passed");
// 		return;
// 	}
// 	Timer=setTimeout(initAlarm, differenceInMs);
// 	button.innerText="Cancel Alarm";
// 	button.setAttribute("onclick","cancelAlarm(this);")
// }
// function cancelAlarm(button)
// {
// 	clearTimeout(Timer);
// 	button.innerText="Set Alarm";
// 	button.setAttribute("onclick","setAlarm(this);")
// }
// function initAlarm(){
// 	sound.play();
// 	document.getElementById("alarmoption").style.display=" ";
	
// }
// function stop(){
// 	sound.pause();
// 	sound.currentTime=0;
// 	document.getElementById("alarmoption").style.display = "none";
//   cancelAlarm(document.getElementById("set"))

// }
// function snooze() {
//   stop();
//   Timer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
// }
// setInterval(() => {
//   d = new Date(); //object of date()
//   hr = d.getHours();
//   min = d.getMinutes();
//   sec = d.getSeconds();
//   hr_rotation = 30 * hr + min / 2; //converting current time
//   min_rotation = 6 * min;
//   sec_rotation = 6 * sec;

//   hour.style.transform = `rotate(${hr_rotation}deg)`;
//   minute.style.transform = `rotate(${min_rotation}deg)`;
//   second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);
var alarmSound = new Audio();

alarmSound.src = "https://assets.codepen.io/78749/fantasy_alarm_clock.mp3";

var alarmTimer;
function setAlarm(button) {
  var ms = document.getElementById("datetime").valueAsNumber;
  if (isNaN(ms)) {
    alert("Invalid Date");
    return;//when a return statement is used in a function body,then the execution of the function is stopped
  }
  var alarm = new Date(ms);
  var alarmTime = new Date(
    alarm.getUTCFullYear(),
    alarm.getUTCMonth(),
    alarm.getUTCDate(),
    alarm.getUTCHours(),
    alarm.getUTCMinutes(),
    alarm.getUTCSeconds()
  );
  var differenceInMs = alarmTime.getTime() - new Date().getTime();
  if (differenceInMs < 0) {
    alert("Specified time is already passed");
    return;
  }
  alarmTimer = setTimeout(initAlarm, differenceInMs);
  document.getElementById("setA").innerText = "Cancel Alarm";
  document.getElementById("setA").setAttribute("onclick", "cancelAlarm(this);");
}

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = "Set Alarm";
  button.setAttribute("onclick", "setAlarm(this);");
}

function initAlarm() {
  alarmSound.play();
  document.getElementById("alarmoption").style.display = "";
}

function stop() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById("alarmoption").style.display = "none";
  cancelAlarm(document.getElementById("setA"));
}

function snooze() {
  stop();
  alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
}
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);