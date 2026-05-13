today = 1;
currentTime = 1700;
currentLat = 42.84409603515283;
currentLon = -78.82348781875147;

var save_code = "";

sortMethod = 0;

function copy_code(){
  var copyText = document.getElementById("save_code_input");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Code copied. Save it somewhere!");
}


function updateCount() {
  var arrayLength = libraries.length;
  var tempsum = 0;

  //for every library in the array:
  for (i = 0; i < arrayLength; i++) {
    //add its current checked value to the sum
    tempsum += libraries[i].checked;
  }

  document.getElementById("total_output").innerHTML = tempsum;
}

function changeDay() {
  today = document.getElementById("daySelect").value;
  display();
}

function changeTime() {
  currentTime = document.getElementById("timeSelect").value;
  display();
}

function changeSort() {
  sortMethod = document.getElementById("sortMethod").value;
  display();
}

dud = {
  fullName: "Dudley Branch Library",
  openDays: ["open", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1000, 1200, 1200, 1200, 1200, 1000, 0],
  openHours: [1700, 2000, 2000, 2000, 0, 1700, 0],
  abbr: "DUD",
  location: "City",
  html: "<input type='checkbox' id='dud_check' onclick='dim(dud)'></input>",
  checkid: "dud_check",
  checked: 0,
  picid: "dud_layer",
  coord: turf.point([42.84399417994169, -78.82347719189625]),
  distance: 0
};

egg = {
  fullName: "Eggertsville-Snyder Branch",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1200, 1000, 1200, 1000, 1000, 1100, 0],
  openHours: [1900, 1800, 1900, 1800, 1800, 1500, 0],
  abbr: "EGG",
  html: "<input type='checkbox' id='egg_check' onclick='dim(egg)'></input>",
  checked: 0,
  checkid: "egg_check",
  picid: "egg_layer",
  coord: turf.point([42.96271067506805, -78.77948092421069]),
  distance: 0
};

bos = {
  fullName: "Boston Free Library",
  openDays: ["open", "open", "closed", "open", "open", "open", "closed"],
  morningHours: [1000, 1200, 0, 100, 1200, 1000, 0],
  openHours: [1900, 2000, 1900, 1900, 1700, 1400, 0],
  abbr: "BOS",
  html: "<input type='checkbox' id='bos_check' onclick='dim(bos)'></input>",
  checked: 0,
  checkid: "bos_check",
  picid: "dud_layer",
  coord: turf.point([42.62630956566436, -78.73290436109062]),
  distance: 0
};

ald = {
  fullName: "Alden Ewell Free Library NEEDS AM HOURS",
  openDays: ["open", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1000, 1200, 0, 100, 1200, 1000, 0],
  openHours: [1700, 1900, 1700, 1900, 0, 1200, 0],
  abbr: "ALD",
  html: "<input type='checkbox' id='ald_check' onclick='dim(ald)'></input>",
  checked: 0,
  checkid: "ald_check",
  picid: "dud_layer",
  coord: turf.point([42.90056810332964, -78.49320113738837]),
  distance: 0
};

ang = {
  fullName: "Angola Public Library NEEDS AM HOURS",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1000, 1200, 0, 100, 1200, 1000, 0],
  openHours: [1900, 1700, 1500, 1900, 1700, 1500, 0],
  abbr: "ANG",
  html: "<input type='checkbox' id='ang_check' onclick='dim(ang)'></input>",
  checked: 0,
  checkid: "ang_check",
  picid: "dud_layer",
  coord: turf.point([42.63910368077553, -79.02729757671885]),
  distance: 0
};

ann = {
  fullName: "Anna Reinstein Memorial Library NEEDS AM HOURS",
  openDays: ["open", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1000, 1200, 0, 100, 1200, 1000, 0],
  openHours: [2000, 1700, 2000, 1800, 0, 1700, 0],
  abbr: "ANN",
  html: "<input type='checkbox' id='ann_check' onclick='dim(ann)'></input>",
  checked: 0,
  checkid: "ann_check",
  picid: "dud_layer",
  coord: turf.point([42.91386977404046, -78.7848670901189]),
  distance: 0
};

aur = {
  fullName: "Aurora Town Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [2000, 2000, 1800, 2000, 1700, 1500, 0],
  abbr: "AUR",
  html: "<input type='checkbox' id='aur_check' onclick='dim(aur)'></input>",
  checked: 0,
  checkid: "aur_check",
  picid: "aur_layer",
  coord: turf.point([42.76845676671376, -78.6143200374903]),
  distance: 0
};

cen = {
  fullName: "Central Library Downtown Buffalo",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [800, 800, 800, 800, 900, 900, 1200],
  openHours: [1800, 1800, 2000, 2000, 1700, 1700, 1700],
  abbr: "CEN",
  html: "<input type='checkbox' id='cen_check' onclick='dim(cen)'></input>",
  checked: 0,
  checkid: "cen_check",
  picid: "dud_layer",
  coord: turf.point([42.88533456546191, -78.87173291770127]),
  distance: 0
};

ton = {
  fullName: "City of Tonawanda Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [900, 900, 900, 900, 900, 900, 0],
  openHours: [2000, 1700, 1500, 2000, 1700, 1400, 0],
  abbr: "TON",
  html: "<input type='checkbox' id='ton_check' onclick='dim(ton)'></input>",
  checked: 0,
  checkid: "ton_check",
  picid: "dud_layer",
  coord: turf.point([43.0107112307244, -78.87942753247357]),
  distance: 0
};

cla = {
  fullName: "Clarence Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [2100, 2100, 1800, 2100, 1700, 1700, 0],
  abbr: "CLA",
  html: "<input type='checkbox' id='cla_check' onclick='dim(cla)'></input>",
  checked: 0,
  checkid: "cla_check",
  picid: "dud_layer",
  coord: turf.point([42.99507055642682, -78.64072055740948]),
  distance: 0
};

cle = {
  fullName: "Clearfield Branch Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [2100, 1800, 2100, 1800, 1800, 1800, 0],
  abbr: "CLE",
  html: "<input type='checkbox' id='cle_check' onclick='dim(cle)'></input>",
  checked: 0,
  checkid: "cle_check",
  picid: "dud_layer",
  coord: turf.point([43.00039229860383, -78.73947919920344]),
  distance: 0
};

con = {
  fullName: "Concord Public Library",
  openDays: ["closed", "open", "open", "open", "open", "open", "closed"],
  morningHours: [0, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [0, 1800, 1800, 1800, 1800, 1500, 0],
  abbr: "CON",
  html: "<input type='checkbox' id='con_check' onclick='dim(con)'></input>",
  checked: 0,
  checkid: "con_check",
  picid: "dud_layer",
  coord: turf.point([42.51061911773262, -78.66568527285371]),
  distance: 0
};

cra = {
  fullName: "Crane Branch Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1200, 1200, 1000, 1000, 900, 900, 0],
  openHours: [2000, 2000, 1800, 1800, 1700, 1700, 0],
  abbr: "CRA",
  html: "<input type='checkbox' id='cra_check' onclick='dim(cra)'></input>",
  checked: 0,
  checkid: "cra_check",
  picid: "dud_layer",
  coord: turf.point([42.91438320048253, -78.87692728857802]),
  distance: 0
};

edn = {
  fullName: "Eden Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1100, 1100, 200, 1100, 1100, 1100, 0],
  openHours: [1800, 1800, 1900, 1800, 1700, 1400, 0],
  abbr: "EDN",
  html: "<input type='checkbox' id='edn_check' onclick='dim(edn)'></input>",
  checked: 0,
  checkid: "edn_check",
  picid: "dud_layer",
  coord: turf.point([42.65211198751665, -78.88978004765936]),
  distance: 0
};

pan = {
  fullName: "Elaine M. Panty Branch Library",
  openDays: ["open", "open", "closed", "open", "open", "open", "closed"],
  morningHours: [1200, 1000, 0, 1000, 900, 1000, 0],
  openHours: [2000, 1800, 0, 1800, 1700, 1800, 0],
  abbr: "PAN",
  html: "<input type='checkbox' id='pan_check' onclick='dim(pan)'></input>",
  checked: 0,
  checkid: "pan_check",
  picid: "dud_layer",
  coord: turf.point([42.95092884492059, -78.90480926831658]),
  distance: 0
};

elm = {
  fullName: "Elma Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1200, 1000, 1200, 1000, 1000, 1000, 0],
  openHours: [2000, 1800, 2000, 1800, 1800, 1600, 0],
  abbr: "ELM",
  html: "<input type='checkbox' id='elm_check' onclick='dim(elm)'></input>",
  checked: 0,
  checkid: "elm_check",
  picid: "dud_layer",
  coord: turf.point([42.82243978674115, -78.63756419090218]),
  distance: 0
};

mer = {
  fullName: "Frank. E. Merriweather, Jr Branch Library",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [1000, 1200, 1200, 1200, 1000, 1000, 1200],
  openHours: [1700, 1800, 2000, 2000, 2000, 1800, 1700],
  abbr: "MER",
  html: "<input type='checkbox' id='mer_check' onclick='dim(mer)'></input>",
  checked: 0,
  checkid: "mer_check",
  picid: "dud_layer",
  coord: turf.point([42.911356498880686, -78.85417291529646]),
  distance: 0
};

gra = {
  fullName: "Grand Island Memorial Library",
  openDays: ["closed", "open", "open", "open", "open", "open", "closed"],
  morningHours: [0, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [0, 2000, 2000, 2000, 1700, 1700, 0],
  abbr: "GRA",
  html: "<input type='checkbox' id='gra_check' onclick='dim(gra)'></input>",
  checked: 0,
  checkid: "gra_check",
  picid: "dud_layer",
  coord: turf.point([43.0372556898295, -78.95525649711108]),
  distance: 0
};

ham = {
  fullName: "Hamburg Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [900, 1200, 900, 1200, 900, 900, 1200],
  openHours: [2000, 2000, 2000, 2000, 1700, 1700, 1700],
  abbr: "HAM",
  html: "<input type='checkbox' id='ham_check' onclick='dim(ham)'></input>",
  checked: 0,
  checkid: "ham_check",
  picid: "dud_layer",
  coord: turf.point([42.71892076034653, -78.82974599763924]),
  distance: 0
};

aud = {
  fullName: "Audubon (Honorabe Shirley Chisholm Library)",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 1200],
  openHours: [2100, 2100, 2100, 2100, 2100, 1800, 1700],
  abbr: "AUD",
  html: "<input type='checkbox' id='aud_check' onclick='dim(aud)'></input>",
  checked: 0,
  checkid: "aud_check",
  picid: "dud_layer",
  coord: turf.point([43.01592680041675, -78.78050802394303]),
  distance: 0
};

isa = {
  fullName: "Isaias Gonzalez-Soto Branch Library",
  openDays: ["open", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1000, 900, 1200, 1000, 0, 1000, 0],
  openHours: [1800, 1700, 2000, 1800, 0, 1800, 0],
  abbr: "ISA",
  html: "<input type='checkbox' id='isa_check' onclick='dim(isa)'></input>",
  checked: 0,
  checkid: "isa_check",
  picid: "dud_layer",
  coord: turf.point([42.90184633297375, -78.89181069146247]),
  distance: 0
};

rei = {
  fullName: "Julia Boyer Reinstein Library",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [900, 900, 900, 900, 900, 900, 1200],
  openHours: [2000, 2000, 2000, 2000, 1700, 1700, 1700],
  abbr: "REI",
  html: "<input type='checkbox' id='rei_check' onclick='dim(rei)'></input>",
  checked: 0,
  checkid: "rei_check",
  picid: "dud_layer",
  coord: turf.point([42.91385328940413, -78.78496027669769]),
  distance: 0
};

ken = {
  fullName: "Kenmore Branch Library",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 1200],
  openHours: [1700, 2000, 2000, 2000, 2000, 2000, 1700],
  abbr: "KEM",
  html: "<input type='checkbox' id='ken_check' onclick='dim(ken)'></input>",
  checked: 0,
  checkid: "ken_check",
  picid: "dud_layer",
  coord: turf.point([42.96716389468391, -78.86794410715743]),
  distance: 0
};

lkw = {
  fullName: "Lackawanna Public Library",
  openDays: ["closed", "open", "open", "open", "open", "open", "closed"],
  morningHours: [0, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [0, 2000, 2000, 1800, 1600, 1600, 0],
  abbr: "LKW",
  html: "<input type='checkbox' id='lkw_check' onclick='dim(lkw)'></input>",
  checked: 0,
  checkid: "lkw_check",
  picid: "dud_layer",
  coord: turf.point([42.826183331200475, -78.83086608120132]),
  distance: 0
};

lak = {
  fullName: "Lake Shore Branch Library",
  openDays: ["closed", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1200, 900, 1200, 900, 0, 900, 0],
  openHours: [2000, 1700, 2000, 1700, 0, 1700, 0],
  abbr: "LAK",
  html: "<input type='checkbox' id='lak_check' onclick='dim(lak)'></input>",
  checked: 0,
  checkid: "lak_check",
  picid: "dud_layer",
  coord: turf.point([42.751231778515844, -78.8954608835398]),
  distance: 0
};

lan = {
  fullName: "Lancaster Public Library",
  openDays: ["closed", "open", "open", "open", "open", "open", "open"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 1200],
  openHours: [800, 2100, 2100, 2100, 1700, 1700, 1700],
  abbr: "LAN",
  html: "<input type='checkbox' id='lan_check' onclick='dim(lan)'></input>",
  checked: 0,
  checkid: "lan_check",
  picid: "dud_layer",
  coord: turf.point([42.900520149045654, -78.66760557600738]),
  distance: 0
};

roy = {
  fullName: "Leroy R. Coles, Jr. Branch Library",
  openDays: ["open", "open", "closed", "open", "open", "open", "closed"],
  morningHours: [1000, 100, 0, 1200, 100, 900, 0],
  openHours: [1800, 1800, 0, 2000, 1800, 1700, 0],
  abbr: "ROY",
  html: "<input type='checkbox' id='roy_check' onclick='dim(roy)'></input>",
  checked: 0,
  checkid: "roy_check",
  picid: "dud_layer",
  coord: turf.point([42.922886375251196, -78.8128126373715]),
  distance: 0
};

nws = {
  fullName: "Newstead Public Library",
  openDays: ["open", "open", "open", "closed", "open", "open", "closed"],
  morningHours: [1200, 1000, 1200, 0, 1000, 1000, 0],
  openHours: [2000, 1700, 2000, 0, 1700, 1500, 0],
  abbr: "NWS",
  html: "<input type='checkbox' id='nws_check' onclick='dim(nws)'></input>",
  checked: 0,
  checkid: "nws_check",
  picid: "dud_layer",
  coord: turf.point([43.02006884361519, -78.50163466699489]),
  distance: 0
};

nor = {
  fullName: "North Collins Public Library",
  openDays: ["open", "open", "open", "closed", "open", "open", "closed"],
  morningHours: [1000, 200, 200, 0, 100, 0, 0],
  openHours: [2000, 2000, 2000, 0, 1700, 0, 0],
  abbr: "NOR",
  html: "<input type='checkbox' id='nor_check' onclick='dim(nor)'></input>",
  checked: 0,
  checkid: "nor_check",
  picid: "dud_layer",
  coord: turf.point([42.59842018671414, -78.9366634528259]),
  distance: 0
};

npk = {
  fullName: "North Park Branch Library",
  openDays: ["closed", "open", "open", "open", "open", "open", "open"],
  morningHours: [0, 1200, 1000, 900, 1000, 900, 1200],
  openHours: [0, 2000, 1800, 1700, 1800, 1700, 1700],
  abbr: "NPK",
  html: "<input type='checkbox' id='npk_check' onclick='dim(npk)'></input>",
  checked: 0,
  checkid: "npk_check",
  picid: "dud_layer",
  coord: turf.point([42.947259224560064, -78.87196491489448]),
  distance: 0
};

opk = {
  fullName: "Orchard Park Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "open"],
  morningHours: [900, 900, 1300, 900, 900, 1000, 1200],
  openHours: [2000, 2000, 2000, 2000, 1700, 1700, 1700],
  abbr: "OPK",
  html: "<input type='checkbox' id='opk_check' onclick='dim(opk)'></input>",
  checked: 0,
  checkid: "opk_check",
  picid: "dud_layer",
  coord: turf.point([42.759321140098194, -78.74635926026006]),
  distance: 0
};

tcl = {
  fullName: "Town of Collins Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [1000, 1000, 1000, 1000, 1000, 1000, 0],
  openHours: [1900, 1900, 1700, 1900, 1700, 1500, 0],
  abbr: "TCL",
  html: "<input type='checkbox' id='tcl_check'  onclick='dim(tcl)'></input>",
  checked: 0,
  checkid: "tcl_check",
  picid: "dud_layer",
  coord: turf.point([42.49580937457066, -78.91930732524439]),
  distance: 0
};

sen = {
  fullName: "West Seneca Public Library",
  openDays: ["open", "open", "open", "open", "open", "open", "closed"],
  morningHours: [900, 900, 900, 900, 900, 1000, 0],
  openHours: [2000, 2000, 1700, 2000, 1700, 1600, 0],
  abbr: "SEN",
  html: "<input type='checkbox' id='sen_check' onclick='dim(sen)'></input>",
  checked: 0,
  checkid: "sen_check",
  picid: "dud_layer",
  coord: turf.point([42.83561093181439, -78.75445264485595]),
  distance: 0
};

wil = {
  fullName: "Williamsville Branch",
  openDays: ["open", "open", "open", "open", "open", "closed", "closed"],
  morningHours: [1300, 1600, 100, 1600, 1000, 0, 0],
  openHours: [1700, 2000, 1600, 2000, 1600, 0, 0],
  abbr: "WIL",
  html: "<input type='checkbox' id='wil_check' onclick='dim(wil)'></input>",
  checked: 0,
  checkid: "wil_check",
  picid: "dud_layer",
  coord: turf.point([42.96237822758753, -78.7453217655785]),
  distance: 0
};

cli = {
  fullName: "East Clinton Branch Library",
  openDays: ["open", "closed", "open", "closed", "open", "open", "closed"],
  morningHours: [1200, 0, 1200, 0, 1000, 1000, 0],
  openHours: [2000, 0, 2000, 0, 1800, 1800, 0],
  abbr: "CLI",
  html: "<input type='checkbox' id='cli_check' onclick='dim(cli)'></input>",
  checked: 0,
  checkid: "cli_check",
  picid: "dud_layer",
  coord: turf.point([42.87164529364015, -78.80492435486461]),
  distance: 0
};

mar = {
  fullName: "Marilla Free Library",
  openDays: ["open", "open", "open", "open", "closed", "open", "closed"],
  morningHours: [1000, 1300, 1000, 1300, 0, 1000, 0],
  openHours: [1800, 2000, 1800, 2000, 0, 1500, 0],
  abbr: "MAR",
  html: "<input type='checkbox' id='mar_check' onclick='dim(mar)'></input>",
  checked: 0,
  checkid: "mar_check",
  picid: "dud_layer",
  coord: turf.point([42.840195752445794, -78.55346235561534]),
  distance: 0
};

const libraries = [
  dud,
  egg,
  bos,
  ald,
  ang,
  ann,
  aur,
  cen,
  ton,
  cla,
  cle,
  con,
  cra,
  edn,
  elm,
  mer,
  ham,
  aud,
  isa,
  rei,
  ken,
  lkw,
  lan,
  roy,
  nws,
  npk,
  opk,
  tcl,
  sen,
  wil,
  cli,
  mar
];


function display() {

  //clear out the previous entries
  element = document.getElementById("START");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  element = document.getElementById("END");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  var arrayLength = libraries.length;
  var temp;

  //for every library in the array
  for (i = 0; i < arrayLength; i++) {
    //re-sort the list either alph. or dist.
    if (sortMethod == 0) {
      libraries.sort((a, b) => a.distance - b.distance);
    }

    if (sortMethod == 1) {
      libraries.sort(function (a, b) {
        return a.abbr.localeCompare(b.abbr);
      });
    }

    //create a new div in the results class ID'd to the abbr
    temp = document.createElement("div");
    temp.className = "results";
    temp.id = libraries[i].abbr;

    //fill that div with the string readout
    temp.innerHTML =
      libraries[i].html +
      libraries[i].abbr +
      ", " +
      libraries[i].fullName +
      " - is " +
      libraries[i].openDays[today] +
      ". Distance: " +
      libraries[i].distance +
      " miles.";

    //if its open, add it to the open category, otherwise add it to closed

    if (
      libraries[i].openDays[today] == "open" &&
      currentTime < libraries[i].openHours[today] &&
      currentTime >= libraries[i].morningHours[today]
    ) {
      document.getElementById("START").appendChild(temp);

      //if the object shows that it is checked, style it accordingly.

      if (libraries[i].checked == 1) {
        document.getElementById(temp.id).style.opacity = ".25";
        document.getElementById(libraries[i].checkid).checked = true;
      }
    } else {
      document.getElementById("END").appendChild(temp);

      //if the object shows that it is checked, style it accordingly.
      if (libraries[i].checked == 1) {
        document.getElementById(temp.id).style.opacity = ".25";
        document.getElementById(libraries[i].checkid).checked = true;
      }
    }
  }

  //update the check number
  updateCount();
}

function dim(target) {
  if (target.checked == 0) {
    target.checked = 1;
    document.getElementById(target.abbr).style.opacity = ".25";
    document.getElementById(target.picid).style.opacity = ".15";
  } else {
    target.checked = 0;
    document.getElementById(target.abbr).style.opacity = "1";
    document.getElementById(target.picid).style.opacity = "1";
  }
  updateCount();
}

function generate_save_code() {
  save_code = "";

  var arrayLength = libraries.length;
  //for every library in the array, add the abbr to save code seperated by hash
  for (i = 0; i < arrayLength; i++) {
    if (libraries[i].checked == 1) {
      save_code = save_code.concat("#", libraries[i].abbr);
    }
  }

  document.getElementById("save_code_input").value = save_code;
}

function apply_save_code() {
  //split the save code at the hashes into an array
  
  var raw_save_code=document.getElementById("save_code_input").value;
  const save_code_array = raw_save_code.split("#");
  
  

  var arrayLength = libraries.length;
  var arrayLength2 = save_code_array.length;
  //for every library in the lib array, go through every entry in the save code array
  for (i = 0; i < arrayLength; i++) {
    for (j = 0; j < arrayLength2; j++) {
      //if the arraylength2-I AKA current checking save code abbr is the current lib's abbr, chek i
      if (save_code_array[j] == libraries[i].abbr) {
        libraries[i].checked = 1;
      }
      
    }
  }
  display();
}

//function to calculate the distance from the home coord to all lib coords, and assign them.
function updateLoc() {
  //assign home coords. currently its DUD location. but we could take input
  var homelat=document.getElementById("home_lat_input").value;
  var homelon=document.getElementById("home_lon_input").value;
  
  var home = turf.point([homelat, homelon]);
  home = turf.flip(home); 
  
  var distance = 0;

  var arrayLength = libraries.length;
  var temp;
  //for each library in the list, get its coords, calc the distance, assign that to distance.
  for (i = 0; i < arrayLength; i++) {
    //get the distance, flip to to lat/lon
    var to = libraries[i].coord;
    to = turf.flip(to);

    //calculate the distance frm home to that libs coords
    var options = { units: "miles" };
    distance = turf.distance(home, to, options);

    //rounds it down
    distance = distance.toFixed(2);

    //assign the distance to the distance calculated
    libraries[i].distance = distance;
    
    
  }
 
  display();
  
}
