//by chloe
//cloverly#2544

function generate() {
  var result = "";
  //assigning the raid names
  var raidTextList = new Object();
  raidTextList.europa = "エウロペ ";
  raidTextList.shiva= "シヴァ ";
  raidTextList.grimnir= "グリム ";
  raidTextList.alex= "ゴブロ ";
  raidTextList.metatron= "メタトロン ";
  raidTextList.avatar= "アバター ";
  raidTextList.PBN= "よわバハ ";
  raidTextList.PBHL= "つよバハ ";
  raidTextList.UBN= "アルバハ ";
  raidTextList.UBHL= "アルバハHL ";
  raidTextList.luci= "ルシファー ";
  raidTextList.tiaM= "ティアマリス ";
  raidTextList.HL= "黄龍 ";
  raidTextList.qilin= "黒麒麟 ";
  raidTextList.HLQL= "黄龍・黒麒麟HL";
  raidTextList.grande= "グランデ ";
  raidTextList.aka= "アーカーシャ ";
  raidTextList.mika= "ミカ ";
  raidTextList.gabu= "ガブ ";
  raidTextList.uriel= "ウリエル ";
  raidTextList.raph= "ラファ ";
  raidTextList.fourPrimarchs= "四大天司HL ";
  raidTextList.PBHLintoAkasha="つよばは→アーカーシャ";

  
  //get the raid choice from the form. thank u stackoverflow
  var temp1 = document.getElementById("raid");
  var raidSelection = temp1.options[temp1.selectedIndex].value;
  
  //find the associated text for the raid, format
  var raidText = raidTextList[raidSelection];
  var result = result+raidText;
  
  //if theres anything in repeating grab it, format
  if(document.getElementById('repeatField').value.length != 0)
    {
    var repeatNumber = document.getElementById('repeatField').value;
    var repeatNumber = repeatNumber + "連 ";
    result = result + repeatNumber;
    }
  
  
  // rank min. u get the gist here no?
  if(document.getElementById('rankMinField').value.length != 0)
    {
    var rankMinNumber = document.getElementById('rankMinField').value;
    var rankMinNumber = rankMinNumber + "↑ ";
    result = result + rankMinNumber;
    }

  // rank max. no I don't get it clouhai
  if(document.getElementById('rankMaxField').value.length != 0)
  {
  var rankMaxNumber = document.getElementById('rankMaxField').value;
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
  extrasList.mvpFree = "M自由" ;
  extrasList.thPlease = "トレハン募集 ";
  
  var extras = document.getElementById("extrasField");
  var selectedExtras = getSelectValues(extras);
  for (var selection of selectedExtras) {
    var extrasText = extrasList[selection];
    if (extrasText != "none"){
      var result = result+extrasText;
    }
  }


  //bad chloe, no code duplications! 

  //take everything and stick it together, spit it out
  document.getElementById("generatedResult").value = result;
}

function copyTextFunction() {
  /* Get the text field */
    document.getElementById("generatedResult").select();
    document.execCommand('copy');
    document.getElementById("copyConfirm").innerHTML = "Copied!";
}

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
