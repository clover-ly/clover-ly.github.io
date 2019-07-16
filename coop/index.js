//by chloe
//cloverly#2544

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

function initialize() {
  displayImg();
  displayHistory();
}

function displayImg() {
  var num = Math.floor(Math.random() * imgArr.length);
  document.sticker.src = imgArr[num];
}

function displayHistory() {
  const history = readGenerationResultHistory();
  const target = document.getElementById("history");

  clearChildren(target);

  const historyKey = "gen-history-";
  let historyIndex = 0;
  for (item of history) {
    const id = historyKey + historyIndex;

    const liNode = document.createElement("li");

    const textNode = document.createElement("input");
    textNode.setAttribute("id", id);
    textNode.value = item;
    textNode.style = "border:none;padding-top:.5em;padding-bottom:.5em;margin:0px;border-top:1px solid #bbb;color:#333;";

    const buttonNode = document.createElement("button");
    buttonNode.innerText = "Copy";
    buttonNode.addEventListener("click", () => copyTextFunction(id));

    liNode.appendChild(textNode);
    liNode.appendChild(buttonNode);

    target.appendChild(liNode);
    historyIndex += 1;
  }
}

function popupclose() {
  var x = document.getElementById("howtotrain");
  x.style.display = "none";
}

function popupopen() {
  var x = document.getElementById("howtotrain");
  x.style.display = "block";
}

function generate() {
  var result = "";
  //assigning the raid names
  var raidTextList = new Object();
  raidTextList.europa = "エウロペ ";
  raidTextList.shiva = "シヴァ ";
  raidTextList.grimnir = "グリム ";
  raidTextList.alex = "ゴブロ ";
  raidTextList.metatron = "メタトロン ";
  raidTextList.avatar = "アバター ";
  raidTextList.PBN = "よわバハ ";
  raidTextList.PBHL = "つよバハ ";
  raidTextList.UBN = "アルバハ ";
  raidTextList.UBHL = "アルバハHL ";
  raidTextList.luci = "ルシファー ";
  raidTextList.tiaM = "ティアマリス ";
  raidTextList.HL = "黄龍 ";
  raidTextList.qilin = "黒麒麟 ";
  raidTextList.HLQL = "黄龍・黒麒麟HL";
  raidTextList.grande = "グランデ ";
  raidTextList.aka = "アーカーシャ ";
  raidTextList.mika = "ミカ ";
  raidTextList.gabu = "ガブ ";
  raidTextList.uriel = "ウリエル ";
  raidTextList.raph = "ラファ ";
  raidTextList.fourPrimarchs = "四大天司HL ";
  raidTextList.PBHLintoAkasha = "つよばは→アーカーシャ";
  raidTextList.dailies= "デイリー ";
  raidTextList.slime= "スラ爆 ";
  raidTextList.creeds= "信念集め ";
  raidTextList.darkblades= "EX6-1 ";
  raidTextList.jk= "ローズ ";

  //get the raid choice from the form. thank u stackoverflow
  var temp1 = document.getElementById("raid");
  var raidSelection = temp1.options[temp1.selectedIndex].value;

  //find the associated text for the raid, format
  var raidText = raidTextList[raidSelection];
  var result = result + raidText;

  //if theres anything in repeating grab it, format
  if (document.getElementById("repeatField").value.length != 0) {
    var repeatNumber = document.getElementById("repeatField").value;
    var repeatNumber = repeatNumber + "連 ";
    result = result + repeatNumber;
  }

  // rank min. u get the gist here no?
  if (document.getElementById("rankMinField").value.length != 0) {
    var rankMinNumber = document.getElementById("rankMinField").value;
    var rankMinNumber = rankMinNumber + "↑ ";
    result = result + rankMinNumber;
  }

  // rank max. no I don't get it clouhai
  if (document.getElementById("rankMaxField").value.length != 0) {
    var rankMaxNumber = document.getElementById("rankMaxField").value;
    var rankMaxNumber = rankMaxNumber + "↓ ";
    result = result + rankMaxNumber;
  }

  //extras, same mechanic as raid name
  var extrasList = new Object();
  extrasList.noExtras = "none";
  extrasList.noDancer = "禁止";
  extrasList.weakHost = "主弱 ";
  extrasList.noChrys = "クリュ禁止 ";
  extrasList.noDancer = "ダンサー禁止 ";
  extrasList.exPara = "麻痺延長 ";
  extrasList.thor10 = "主10ト";
  extrasList.thor30 = "主30ト";
  extrasList.thor70 = "主70ト";
  extrasList.noLeech = "ワンパン禁止 ";
  extrasList.mvpFree = "M自由";
  extrasList.thPlease = "トレハン募集 ";
  extrasList.hostAFK = "自発放置";

  var extras = document.getElementById("extrasField");
  var selectedExtras = getSelectValues(extras);
  for (var selection of selectedExtras) {
    var extrasText = extrasList[selection];
    if (extrasText != "none") {
      var result = result + extrasText;
    }
  }

  //bad chloe, no code duplications!

  //take everything and stick it together, spit it out
  document.getElementById("generatedResult").value = result;
}

function copyGenerated() {
  copyTextFunction("generatedResult", true);
}

function saveGenerated() {
  saveTextFunction("generatedResult", true);
}

function copyTextFunction(idOfElement, doConfirm) {
  /* Get the text field */
  document.getElementById(idOfElement).select();
  document.execCommand("copy");
  if (doConfirm) {
    document.getElementById("copyConfirm").innerHTML = "Copied!";
  }

  // Update generation history
  let result = document.getElementById(idOfElement).value;
  //updateGenerationResultHistory(result);
  //displayHistory();
}

function saveTextFunction(idOfElement, doConfirm) {
  /* Get the text field */
  document.getElementById(idOfElement).select();
  document.execCommand("copy");
  if (doConfirm) {
    document.getElementById("copyConfirm").innerHTML = "Copied!";
  }

  // Update generation history
  let result = document.getElementById(idOfElement).value;
  updateGenerationResultHistory(result);
  displayHistory();
}


function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
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

  labelSelect.style.color = "#555";
  inputSelect.style.borderBottom = "2px solid #ccc";
}

// History format ([a-Z]*\+)*
const generationHistoryCookieKey = "gen-history-max10";

function readGenerationResultHistory() {
  let history = readCookie(generationHistoryCookieKey);

  if (!history || history === "") {
    return [];
  }

  history = history.slice(0, -1);

  let items = history.split("+");
  return items;
}

function updateGenerationResultHistory(newGeneration) {
  let history = readCookie(generationHistoryCookieKey) || "";
  let items = history.split("+");
  const found = items.findIndex((value) => value === newGeneration);

  if (found >= 0) {
    items = [items[found], ...items.filter((_, id) => id !== found)];
  } else {
    items = [newGeneration, ...items];
  }
  const newHistory = items.slice(0, 10).join("+");
  writeCookie(generationHistoryCookieKey, newHistory);
}

function writeCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function readCookie(key) {
  let cookies = document.cookie;
  let cookiesArray = cookies.split(";");

  for (let cookie of cookiesArray) {
    var [cookieKey, value] = cookie.split("=");

    if (cookieKey === key) {
      return value;
    }
  }

  return undefined;
}

function clearChildren(myNode) {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
