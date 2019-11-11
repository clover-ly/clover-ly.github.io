var imgArr = [
  "https://gbf.wiki/images/b/be/Stamp133.png",
  "https://gbf.wiki/images/f/fd/Stamp242.png",
  "https://gbf.wiki/images/7/71/Stamp54.png",
  "https://gbf.wiki/images/b/bd/Stamp169.png",
  "https://gbf.wiki/images/f/fc/Stamp62.png",
  "https://gbf.wiki/images/c/cd/Stamp94.png",
  "https://gbf.wiki/images/d/d3/Stamp177.png",
  "https://gbf.wiki/images/c/cd/Stamp94.png",
  "https://gbf.wiki/images/7/7c/Stamp79.png",
  "https://gbf.wiki/images/c/c4/Stamp141.png",
  "https://gbf.wiki/images/4/4d/Stamp41.png",
  "https://gbf.wiki/images/e/e8/Stamp261.png"
];

function displayImg() {
  var num = Math.floor(Math.random() * imgArr.length);
  document.sticker.src = imgArr[num];
}

// shows and hides raid data when boxes are checked. raid parameter is which div to hide. works for anything
function hideDataCard(raid) {
  var x = document.getElementById(raid);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

function calculate() {
  //grabs the goal type and number from the top.
  var goalNumber = parseFloat(document.getElementById("goalNumber").value);
  document.getElementById("reportGoalDisplay").innerHTML = goalNumber;

  //var goalType = document.querySelector('input[name="goalRadio"]:checked').value;
  var st = document.getElementById("goalSelect");
  var goalType = st.options[st.selectedIndex].value;
  document.getElementById("reportGoalTypeDisplay").innerHTML = goalType;

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

  var exMeats = 3;
  var expMeats = 4;
  var nm90Meats = 5;
  var nm95Meats = 10;
  var nm100Meats = 20;

  //grab the inputed honors data
  var exHonors = parseFloat(document.getElementById("exHonorsInput").value);

  var expHonors = parseFloat(document.getElementById("expHonorsInput").value);
  var nm90Honors = parseFloat(document.getElementById("nm90HonorsInput").value);
  var nm95Honors = parseFloat(document.getElementById("nm95HonorsInput").value);
  var nm100Honors = parseFloat(
    document.getElementById("nm100HonorsInput").value
  );

  //gets the times from the form and converts it to seconds
  var exClearTimeMin = parseFloat(
    document.getElementById("exTimeInputMin").value
  );
  var exClearTimeSec = parseFloat(
    document.getElementById("exTimeInputSec").value
  );
  var exClearTimeMin;
  var exClearTimeMin = exClearTimeMin * 60;
  var exClearTime = exClearTimeSec + exClearTimeMin;

  var expClearTimeMin = parseFloat(
    document.getElementById("expTimeInputMin").value
  );
  var expClearTimeSec = parseFloat(
    document.getElementById("expTimeInputSec").value
  );
  var expClearTimeMin;
  var expClearTimeMin = expClearTimeMin * 60;
  var expClearTime = expClearTimeSec + expClearTimeMin;

  var nm90ClearTimeMin = parseFloat(
    document.getElementById("nm90TimeInputMin").value
  );
  var nm90ClearTimeSec = parseFloat(
    document.getElementById("nm90TimeInputSec").value
  );
  var nm90ClearTimeMin;
  var nm90ClearTimeMin = nm90ClearTimeMin * 60;
  var nm90ClearTime = nm90ClearTimeSec + nm90ClearTimeMin;

  var nm95ClearTimeMin = parseFloat(
    document.getElementById("nm95TimeInputMin").value
  );
  var nm95ClearTimeSec = parseFloat(
    document.getElementById("nm95TimeInputSec").value
  );
  var nm95ClearTimeMin;
  var nm95ClearTimeMin = nm95ClearTimeMin * 60;
  var nm95ClearTime = nm95ClearTimeSec + nm95ClearTimeMin;

  var nm100ClearTimeMin = parseFloat(
    document.getElementById("nm100TimeInputMin").value
  );
  var nm100ClearTimeSec = parseFloat(
    document.getElementById("nm100TimeInputSec").value
  );
  var nm100ClearTimeMin;
  var nm100ClearTimeMin = nm100ClearTimeMin * 60;
  var nm100ClearTime = nm100ClearTimeSec + nm100ClearTimeMin;

  //now u have the honors and clear time in seconds.

  //goal material gain per raid.
  //change this to get the honors from the form
  switch (goalType) {
    case " Boxes":
      var gainPerEx = 56;
      var gainPerExp = 66;
      var gainPerNm90 = 83;
      var gainPerNm95 = 111;
      var gainPerNm100 = 148;
      break;
    case " Honors":
      var gainPerEx = 51000;
      var gainPerExp = 72000;
      var gainPerNm90 = 260000;
      var gainPerNm95 = 910000;
      var gainPerNm100 = 2650000;
      break;
    case " Tokens":
      var gainPerEx = 56;
      var gainPerExp = 66;
      var gainPerNm90 = 83;
      var gainPerNm95 = 111;
      var gainPerNm100 = 148;
      break;
    case " Meats":
      var gainPerEx = 3;
      var gainPerExp = 4;
      var gainPerNm90 = 5;
      var gainPerNm95 = 10;
      var gainPerNm100 = 20;
      break;
    default:
  }
  //from here on gainPer[raid] refers to either tokens honors or meats depending on what was selected.

  //if the mode is boxes do the box math, else do the stuff under the other commetn

  if (goalType === " Boxes") {
    //so, counting for boxes is the same as counting for tokens basically
    //this is the step that converts number of boxes into number of tokens
    //we do this by changing the goalNumber given in boxes to tokens based on the conversion numbers

    //PARAM: a goalNumber 1-80. needs to be converted into token number
    
    if (goalNumber==1){
      goalNumber = 1600;
    } else if (goalNumber<5 && goalNumber>1) {
      goalNumber = 1600+((goalNumber-1)*2400);
    } else if (goalNumber>4 && goalNumber<45) {
      goalNumber = 8800+((goalNumber-4)*2000);
    } else if (goalNumber>44) {
      goalNumber = 80800+((goalNumber-44)*6000);
    }

    var totalGoalEx = Math.ceil(goalNumber / gainPerEx);
    var totalGoalExp = Math.ceil(goalNumber / gainPerExp);
    var totalGoalNm90 = Math.ceil(goalNumber / gainPerNm90);
    var totalGoalNm95 = Math.ceil(goalNumber / gainPerNm95);
    var totalGoalNm100 = Math.ceil(goalNumber / gainPerNm100);
    
  } else {
    //how much of each to reach goal based on goal amount and gain rate by goal type
    var totalGoalEx = Math.ceil(goalNumber / gainPerEx);
    var totalGoalExp = Math.ceil(goalNumber / gainPerExp);
    var totalGoalNm90 = Math.ceil(goalNumber / gainPerNm90);
    var totalGoalNm95 = Math.ceil(goalNumber / gainPerNm95);
    var totalGoalNm100 = Math.ceil(goalNumber / gainPerNm100);
  }

  //for each raid type how much of other resources it takes based on the number being done to reach the goal as found above

  var totalGoalExAP = totalGoalEx * exAP;
  var totalGoalExpAP = totalGoalExp * expAP;
  var totalGoalNm90AP = totalGoalNm90 * nm90AP;
  var totalGoalNm95AP = totalGoalNm95 * nm95AP;
  var totalGoalNm100AP = totalGoalNm100 * nm100AP;

  var totalGoalExHonors = totalGoalEx * exHonors;
  var totalGoalExpHonors = totalGoalExp * expHonors;
  var totalGoalNm90Honors = totalGoalNm90 * nm90Honors;
  var totalGoalNm95Honors = totalGoalNm95 * nm95Honors;
  var totalGoalNm100Honors = totalGoalNm100 * nm100Honors;

  var totalGoalExClearTime = totalGoalEx * exClearTime;
  var totalGoalExpClearTime = totalGoalExp * expClearTime;
  var totalGoalNm90ClearTime = totalGoalNm90 * nm90ClearTime;
  var totalGoalNm95ClearTime = totalGoalNm95 * nm95ClearTime;
  var totalGoalNm100ClearTime = totalGoalNm100 * nm100ClearTime;

  var totalGoalExMeat = totalGoalEx * exMeats;
  var totalGoalExpMeat = totalGoalExp * expMeats;
  var totalGoalNm90Meat = totalGoalNm90 * nm90Meats;
  var totalGoalNm95Meat = totalGoalNm95 * nm95Meats;
  var totalGoalNm100Meat = totalGoalNm100 * nm100Meats;

  var totalGoalExTokens = totalGoalEx * exTokens;
  var totalGoalExpTokens = totalGoalExp * expTokens;
  var totalGoalNm90Tokens = totalGoalNm90 * nm90Tokens;
  var totalGoalNm95Tokens = totalGoalNm95 * nm95Tokens;
  var totalGoalNm100Tokens = totalGoalNm100 * nm100Tokens;

  //calculate pots by divinding ap bvy 75

  var totalGoalExPots = Math.ceil(totalGoalExAP / 75);
  var totalGoalExpPots = Math.ceil(totalGoalExpAP / 75);
  var totalGoalNm90Pots = Math.ceil(totalGoalNm90AP / 75);
  var totalGoalNm95Pots = Math.ceil(totalGoalNm95AP / 75);
  var totalGoalNm100Pots = Math.ceil(totalGoalNm100AP / 75);

  //total time in seconds to mins and secs for readability

  var exTimeString = new Date(null);
  exTimeString.setSeconds(totalGoalExClearTime);
  var exFinalTime = exTimeString.toISOString().substr(11, 8);

  var expTimeString = new Date(null);
  expTimeString.setSeconds(totalGoalExpClearTime);
  var expFinalTime = expTimeString.toISOString().substr(11, 8);

  var nm90TimeString = new Date(null);
  nm90TimeString.setSeconds(totalGoalNm90ClearTime);
  var nm90FinalTime = nm90TimeString.toISOString().substr(11, 8);

  var nm95TimeString = new Date(null);
  nm95TimeString.setSeconds(totalGoalNm95ClearTime);
  var nm95FinalTime = nm95TimeString.toISOString().substr(11, 8);

  var nm100TimeString = new Date(null);
  nm100TimeString.setSeconds(totalGoalNm100ClearTime);
  var nm100FinalTime = nm100TimeString.toISOString().substr(11, 8);

  //making the report
  //calculate for each raid what their speeds would take to reach the goal by each material.
  //display and calc them all, just hide the goal

  //printouts

  if (document.getElementById("exCalcCheck").checked) {
    document.getElementById("reportEx").style.display = "inline-block";
    document.getElementById("exFightCountDisplay").innerHTML = totalGoalEx;
    document.getElementById("exTimeDisplay").innerHTML = exFinalTime;
    document.getElementById("exHonorsDisplay").innerHTML = totalGoalExHonors;
    document.getElementById("exTokenDisplay").innerHTML = totalGoalExTokens;
    document.getElementById("exMeatsDisplay").innerHTML = totalGoalExMeat;
    document.getElementById("exAPDisplay").innerHTML = totalGoalExAP;
    document.getElementById("exPotsDisplay").innerHTML = totalGoalExPots;
  } else {
    document.getElementById("reportEx").style.display = "none";
  }

  if (document.getElementById("expCalcCheck").checked) {
    document.getElementById("reportExp").style.display = "inline-block";
    document.getElementById("expFightCountDisplay").innerHTML = totalGoalExp;
    document.getElementById("expTimeDisplay").innerHTML = expFinalTime;
    document.getElementById("expHonorsDisplay").innerHTML = totalGoalExpHonors;
    document.getElementById("expTokenDisplay").innerHTML = totalGoalExpTokens;
    document.getElementById("expMeatsDisplay").innerHTML = totalGoalExpMeat;
    document.getElementById("expAPDisplay").innerHTML = totalGoalExpAP;
    document.getElementById("expPotsDisplay").innerHTML = totalGoalExpPots;
  } else {
    document.getElementById("reportExp").style.display = "none";
  }

  if (document.getElementById("nm90CalcCheck").checked) {
    document.getElementById("reportnm90").style.display = "inline-block";
    document.getElementById("nm90FightCountDisplay").innerHTML = totalGoalNm90;
    document.getElementById("nm90TimeDisplay").innerHTML = nm90FinalTime;
    document.getElementById(
      "nm90HonorsDisplay"
    ).innerHTML = totalGoalNm90Honors;
    document.getElementById("nm90TokenDisplay").innerHTML = totalGoalNm90Tokens;
    document.getElementById("nm90MeatsDisplay").innerHTML = totalGoalNm90Meat;
    document.getElementById("nm90APDisplay").innerHTML = totalGoalNm90AP;
    document.getElementById("reportnm90").style.display = "inline-block";
    document.getElementById("nm90PotsDisplay").innerHTML = totalGoalNm90Pots;
  } else {
    document.getElementById("reportnm90").style.display = "none";
  }

  if (document.getElementById("nm95CalcCheck").checked) {
    document.getElementById("reportnm95").style.display = "inline-block";
    document.getElementById("nm95FightCountDisplay").innerHTML = totalGoalNm95;
    document.getElementById("nm95TimeDisplay").innerHTML = nm95FinalTime;
    document.getElementById(
      "nm95HonorsDisplay"
    ).innerHTML = totalGoalNm95Honors;
    document.getElementById("nm95TokenDisplay").innerHTML = totalGoalNm95Tokens;
    document.getElementById("nm95MeatsDisplay").innerHTML = totalGoalNm95Meat;
    document.getElementById("nm95APDisplay").innerHTML = totalGoalNm95AP;
    document.getElementById("nm95PotsDisplay").innerHTML = totalGoalNm95Pots;
  } else {
    document.getElementById("reportnm95").style.display = "none";
  }

  if (document.getElementById("nm100CalcCheck").checked) {
    document.getElementById("reportnm100").style.display = "inline-block";
    document.getElementById(
      "nm100FightCountDisplay"
    ).innerHTML = totalGoalNm100;
    document.getElementById("nm100TimeDisplay").innerHTML = nm100FinalTime;
    document.getElementById(
      "nm100HonorsDisplay"
    ).innerHTML = totalGoalNm100Honors;
    document.getElementById(
      "nm100TokenDisplay"
    ).innerHTML = totalGoalNm100Tokens;
    document.getElementById("nm100MeatsDisplay").innerHTML = totalGoalNm100Meat;
    document.getElementById("nm100APDisplay").innerHTML = totalGoalNm100AP;
    document.getElementById("nm100PotsDisplay").innerHTML = totalGoalNm100Pots;
  } else {
    document.getElementById("reportnm100").style.display = "none";
  }
}

function material(x, y) {
  var labelSelect = document.getElementById(x);
  var inputSelect = document.getElementById(y);

  labelSelect.style.color = "blue";
  inputSelect.style.borderBottom = "2px solid blue";
}

function material2(x, y) {
  //this one undoes it
  var labelSelect = document.getElementById(x);
  var inputSelect = document.getElementById(y);

  labelSelect.style.color = "#aaa";
  inputSelect.style.borderBottom = "2px solid #ccc";
}

function popupclose() {
  var x = document.getElementById("popupwrap");
  x.style.display = "none";
}
