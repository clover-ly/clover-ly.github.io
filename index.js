function rateCompare() {
  
  //honors rates
  var exHonors = parseFloat(document.getElementById("exHonorsInput").value);
  var expHonors = parseFloat(document.getElementById("expHonorsInput").value);
  var nm90Honors = parseFloat(document.getElementById("nm90HonorsInput").value); 
  var nm95Honors = parseFloat(document.getElementById("nm95HonorsInput").value);
  var nm100Honors = parseFloat(document.getElementById("nm100HonorsInput").value);
  
  //gets the times from the form
  var exClearTimeMin = parseFloat(document.getElementById("exTimeInputMin").value);
  var exClearTimeSec = parseFloat(document.getElementById("exTimeInputSec").value);
  var exClearTimeMin = exClearTimeMin*60;
  var exClearTime = exClearTimeSec+exClearTimeMin;

  
  var expClearTimeMin = parseFloat(document.getElementById("expTimeInputMin").value);
  var expClearTimeSec = parseFloat(document.getElementById("expTimeInputSec").value);
  var expClearTimeMin = expClearTimeMin*60;
  var expClearTime = expClearTimeSec+expClearTimeMin;
  
  var nm90ClearTimeMin = parseFloat(document.getElementById("nm90TimeInputMin").value);
  var nm90ClearTimeSec = parseFloat(document.getElementById("nm90TimeInputSec").value);
  var nm90ClearTimeMin = nm90ClearTimeMin*60;
  var nm90ClearTime = nm90ClearTimeSec+nm90ClearTimeMin;
  
  var nm95ClearTimeMin = parseFloat(document.getElementById("nm95TimeInputMin").value);
  var nm95ClearTimeSec = parseFloat(document.getElementById("nm95TimeInputSec").value);
  var nm95ClearTimeMin = nm95ClearTimeMin*60;
  var nm95ClearTime = nm95ClearTimeSec+nm95ClearTimeMin;
  
  var nm100ClearTimeMin = parseFloat(document.getElementById("nm100TimeInputMin").value);
  var nm100ClearTimeSec = parseFloat(document.getElementById("nm100TimeInputSec").value);
  var nm100ClearTimeMin = nm100ClearTimeMin*60;
  var nm100ClearTime = nm100ClearTimeSec+nm100ClearTimeMin;

  //divides honors by time to get gain per second
  var exHPS = exHonors/exClearTime;
  var expHPS = expHonors/expClearTime;
  var nm90HPS = nm90Honors/nm90ClearTime;
  var nm95HPS = nm95Honors/nm95ClearTime;
  var nm100HPS = nm100Honors/nm100ClearTime;
  
  //compares gain per sec to find the highest
  
  
  // returns the higher value 
  //this is so ghetto im sorry
  
  /*if (exHPS>expHPS && exHPS>nm90HPS){
    if(exHPS>nm95HPS && exHPS>nm100HPS){
    document.getElementById("result").innerHTML = "ex is more efficient";
    }
  }
  if (expHPS>exHPS && expHPS>nm90HPS) {
    if (expHPS>nm95HPS && expHPS>nm100HPS){
    document.getElementById("result").innerHTML = "exp is more efficient";
    }
  }
  if (nm90HPS>expHPS && nm90HPS>exHPS) {
    if (nm90HPS>nm95HPS && nm90HPS>nm100HPS){
    document.getElementById("result").innerHTML = "nm90 is more efficient";
    }
  }
  if (nm95HPS>expHPS && nm95HPS>exHPS) {
    if (nm95HPS>nm90HPS && nm95HPS>nm100HPS){
    document.getElementById("result").innerHTML = "nm95 is more efficient";
    }
  }
  if (nm100HPS>expHPS && nm100HPS>exHPS) {
    if (nm100HPS>nm90HPS && nm100HPS>nm95HPS){
    document.getElementById("result").innerHTML = "nm100 is more efficient";
    }
  }*/
 
  
  //converts honors per sec to honors per min and fills out the chart
  var exHPM = exHPS*3600;
  var expHPM = expHPS*3600;
  var nm90HPM = nm90HPS*3600;
  var nm95HPM = nm95HPS*3600;
  var nm100HPM = nm100HPS*3600;
  
  document.getElementById("exHPM").innerHTML = Math.round(exHPM);
  document.getElementById("expHPM").innerHTML = Math.round(expHPM);
  document.getElementById("nm90HPM").innerHTML = Math.round(nm90HPM);
  document.getElementById("nm95HPM").innerHTML = Math.round(nm95HPM);
  document.getElementById("nm100HPM").innerHTML = Math.round(nm100HPM);
}

function formReset(){
  //location.reload();
  document.getElementById("exHPM").innerHTML = 0;
  document.getElementById("expHPM").innerHTML = 0;
  document.getElementById("nm90HPM").innerHTML = 0;
  document.getElementById("nm95HPM").innerHTML = 0;
  document.getElementById("nm100HPM").innerHTML = 0;
  
  document.getElementById("exTimeInputSec").value = 0;
  document.getElementById("expTimeInputSec").value = 0;
  document.getElementById("nm90TimeInputSec").value = 0;
  document.getElementById("nm95TimeInputSec").value = 0;
  document.getElementById("nm100TimeInputSec").value = 0;

  document.getElementById("exTimeInputMin").value = 0;
  document.getElementById("expTimeInputMin").value = 0;
  document.getElementById("nm90TimeInputMin").value = 0;
  document.getElementById("nm95TimeInputMin").value = 0;
  document.getElementById("nm100TimeInputMin").value = 0;
  
  document.getElementById("exHonorsInput").value = 51000;
  document.getElementById("expHonorsInput").value = 72000;
  document.getElementById("nm90HonorsInput").value = 260000;
  document.getElementById("nm95HonorsInput").value = 910000;
  document.getElementById("nm100HonorsInput").value = 2650000;
  
  document.getElementById("ex").style.display = "inline-block";
  document.getElementById("exp").style.display = "inline-block";
  document.getElementById("nm90").style.display = "none";
  document.getElementById("nm95").style.display = "none";
  document.getElementById("nm100").style.display = "none";
}

function hideEx() {
  //i copy pasted this from stack overflow
  var x = document.getElementById("ex");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
} 

function hideExp() {
  var x = document.getElementById("exp");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

function hideNM90() {
  var x = document.getElementById("nm90");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

function hideNM95() {
  var x = document.getElementById("nm95");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

function hideNM100() {
  var x = document.getElementById("nm100");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}