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

function spark() {
  
  //get the values
  var singles = parseFloat(document.getElementById("singleTix").value);
  var tens = parseFloat(document.getElementById("tenTix").value);
  var crystals = parseFloat(document.getElementById("xtals").value);
  
  //convert to draw values
  var tens = tens*10;
  var crystalsNoRound = crystals/300;
  var crystals = Math.floor(crystals/300);
   //using a rounded down number for accurate # of draws, but the real value for % progress desu
  
  //add together, divide too
  var total = tens+crystals+singles;
  var trueTotal = tens+crystalsNoRound+singles;
  
  var progress = trueTotal/300;
  var progress = progress*100;
  
  var remainder = 300-total;
  
  if (remainder<0) {
    remainder = 0;
  }
  var progress = progress.toFixed(2);
  
  //output to the page
    document.getElementById("draws").innerHTML = total;
    document.getElementById("progress").innerHTML = (progress);
  
  crystalsNoRound = crystalsNoRound.toFixed(2);
  
  //draw the graph. otsu
  Chart.defaults.global.elements.arc.borderColor = '#eee';
Chart.defaults.global.legend.position = 'right';
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  options: {
    cutoutPercentage:80,
    //events: [],
  },
  data: {
    labels: ["Single Tickets", "10x Tickets", "Crystals","Remaining"],
    datasets: [{
      backgroundColor: [
        "#8f96e8",
        "#4f5adc",
        "#2530ba",
        "#ccc",
      ],
      data: [singles, tens, crystalsNoRound, remainder]
    }]
  }
 

});
  
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

//shitty ugly library charts.js i hat eyou i hope you die in fire stupid library never works right ugly ass lookin typa scuffed up library i hate oyu charts.js your so stupid i hate you

