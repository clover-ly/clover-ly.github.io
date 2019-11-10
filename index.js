var imgArr = ["https://gbf.wiki/images/b/be/Stamp133.png","https://gbf.wiki/images/f/fd/Stamp242.png","https://gbf.wiki/images/7/71/Stamp54.png","https://gbf.wiki/images/b/bd/Stamp169.png","https://gbf.wiki/images/f/fc/Stamp62.png","https://gbf.wiki/images/c/cd/Stamp94.png","https://gbf.wiki/images/d/d3/Stamp177.png","https://gbf.wiki/images/c/cd/Stamp94.png","https://gbf.wiki/images/7/7c/Stamp79.png","https://gbf.wiki/images/c/c4/Stamp141.png","https://gbf.wiki/images/4/4d/Stamp41.png","https://gbf.wiki/images/e/e8/Stamp261.png"];


function displayImg(){
    var num = Math.floor(Math.random() * (imgArr.length));
    document.sticker.src=imgArr[num];
}

function rateCompare() {
  
  //fight constants
  var exTokens = 56;
  var expTokens = 66;
  var nm90Tokens = 83;
  var nm95Tokens = 111;
  var nm100Tokens = 148;

  var exAP = 30;
  var expAP = 30;
  var nm90AP = 30;
  var nm95AP = 40;
  var nm100AP = 50;
  
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
  var expClearPerHour = 60/expClearTime;
  
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
  
  //using clears per hour for token gain and ap use / writing to page
  //ex+
  var expClearPerHour = 3600/expClearTime;
  var expTPH = expTokens*expClearPerHour;
  var expAPUPH = expClearPerHour*expAP;
  document.getElementById("expAPUPH").innerHTML = Math.round(expAPUPH);
  document.getElementById("expTPH").innerHTML = Math.round(expTPH);
  document.getElementById("expfph").innerHTML = Math.round(expClearPerHour);
  //ex
  var exClearPerHour = 3600/exClearTime;
  var exTPH = exTokens*exClearPerHour;
  var exAPUPH = exClearPerHour*exAP;
  document.getElementById("exAPUPH").innerHTML = Math.round(exAPUPH);
  document.getElementById("exTPH").innerHTML = Math.round(exTPH);
  document.getElementById("exfph").innerHTML = Math.round(exClearPerHour);
  //nm90
  var nm90ClearPerHour = 3600/nm90ClearTime;
  var nm90TPH = nm90Tokens*nm90ClearPerHour;
  var nm90APUPH = nm90ClearPerHour*nm90AP;
  document.getElementById("nm90APUPH").innerHTML = Math.round(nm90APUPH);
  document.getElementById("nm90TPH").innerHTML = Math.round(nm90TPH);
  document.getElementById("nm90fph").innerHTML = Math.round(nm90ClearPerHour);
  //nm95
  var nm95ClearPerHour = 3600/nm95ClearTime;
  var nm95TPH = nm95Tokens*nm95ClearPerHour;
  var nm95APUPH = nm95ClearPerHour*nm95AP;
  document.getElementById("nm95APUPH").innerHTML = Math.round(nm95APUPH);
  document.getElementById("nm95TPH").innerHTML = Math.round(nm95TPH);
  document.getElementById("nm95fph").innerHTML = Math.round(nm95ClearPerHour);
  //nm100
  var nm100ClearPerHour = 3600/nm100ClearTime;
  var nm100TPH = nm100Tokens*nm100ClearPerHour;
  var nm100APUPH = nm100ClearPerHour*nm100AP;
  document.getElementById("nm100APUPH").innerHTML = Math.round(nm100APUPH);
  document.getElementById("nm100TPH").innerHTML = Math.round(nm100TPH);
  document.getElementById("nm100fph").innerHTML = Math.round(nm100ClearPerHour);

  //divides honors by time to get gain per second
  var exHPS = exHonors/exClearTime;
  var expHPS = expHonors/expClearTime;
  var nm90HPS = nm90Honors/nm90ClearTime;
  var nm95HPS = nm95Honors/nm95ClearTime;
  var nm100HPS = nm100Honors/nm100ClearTime;
  
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
  
  document.getElementById("exAPUPH").innerHTML = 0;
  document.getElementById("expAPUPH").innerHTML = 0;
  document.getElementById("nm90APUPH").innerHTML = 0;
  document.getElementById("nm95APUPH").innerHTML = 0;
  document.getElementById("nm100APUPH").innerHTML = 0;
  
  document.getElementById("exTPH").innerHTML = 0;
  document.getElementById("expTPH").innerHTML = 0;
  document.getElementById("nm90TPH").innerHTML = 0;
  document.getElementById("nm95TPH").innerHTML = 0; 
  document.getElementById("nm100TPH").innerHTML = 0;

  document.getElementById("exfph").innerHTML = 0;
  document.getElementById("expfph").innerHTML = 0;
  document.getElementById("nm90fph").innerHTML = 0;
  document.getElementById("nm95fph").innerHTML = 0;
  document.getElementById("nm100fph").innerHTML = 0;

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

function material(x, y) {
 var labelSelect = document.getElementById(x);
                                           var inputSelect = document.getElementById(y);
                                     
  
 labelSelect.style.color = "blue";
  inputSelect.style.borderBottom= "2px solid blue";

  }

function material2(x, y) {
 //this one undoes it
   var labelSelect = document.getElementById(x);
                                           var inputSelect = document.getElementById(y);
  
  labelSelect.style.color = "#555";
   inputSelect.style.borderBottom= "2px solid #bbb";
}

function popupclose() {
  var x = document.getElementById("popupwrap");
  x.style.display = "none";
}
