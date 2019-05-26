// Chart Configs
function setOption(arr) {
  var options = {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August"
      ],
      datasets: [
        {
          data: arr,
          backgroundColor: colorScheme.secondary,
          borderColor: colorScheme.secondary,
          borderWidth: 2,
          pointBackgroundColor: colorScheme.secondary,
          pointBorderWidth: 0,
        }
      ]
    },
    options: {
      elements: { point: { radius: 0, hitRadius: 10, hoverRadius: 5 } },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      },
      legend: {
        display: false
      }
    }
  };

  return options;
}

function setOptionMulti(arr1, arr2) {
  var options = {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August"
      ],
      datasets: [
        {
          label: "Unique Visits",
          data: arr1,
          backgroundColor: "rgba(255, 204, 84, .8)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
          pointBackgroundColor: "rgba(255, 204, 84, .8)",
          pointBorderWidth: 0
        },
        {
          label: "Page Views",
          data: arr2,
          backgroundColor: "rgba(246, 85, 77, .8)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
          pointBackgroundColor: "rgba(246, 85, 77, .8)",
          pointBorderWidth: 0
        }
      ]
    },
    options: {
      elements: { point: { radius: 0, hitRadius: 10, hoverRadius: 5 } },
      maintainAspectRatio: false
    }
  };

  return options;
}

// Ecommerce Line Chart
let ctxLineFeedback = document.getElementById("line-chart-feedback");
let ctxLineSales = document.getElementById("line-chart-sales");
let ctxLineVisit = document.getElementById("line-chart-visit");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];

var lineDataMulti1 = [56, 67, 87, 89, 89, 97, 135, 132];
var lineDataMulti2 = [62, 83, 117, 130, 112, 124, 167, 178];

ctxLineFeedback && new Chart(ctxLineFeedback.getContext("2d"), setOption(lineData1));
ctxLineSales && new Chart(ctxLineSales.getContext("2d"), setOption(lineData2));

ctxLineVisit && new Chart(
  ctxLineVisit.getContext("2d"),
  setOptionMulti(lineDataMulti1, lineDataMulti2)
);

// Ecommerce Pie Chart
let ctxPieCategory = document.getElementById("pie-chart-category");

if (ctxPieCategory) {
  ctxPieCategory.width = 229;
  ctxPieCategory.height = 229;

  var pieData = {
    type: "pie",
    data: {
      datasets: [
        {
          data: [10, 20, 30, 23],
          backgroundColor: ["#4FA4F3", "#009A59", "#FFCC54", "#F6554D"]
        }
      ],
      labels: ["Sports", "Fashion", "Electronics", "Home & Garden"]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 10
        }
      }
    }
  };

  new Chart(ctxPieCategory.getContext("2d"), pieData);
}

// Iot Line Chart
let ctxLineTemperature = document.getElementById("line-chart-temperature");
let ctxLineHumidity = document.getElementById("line-chart-humidity");
let ctxLineMoisture = document.getElementById("line-chart-moisture");
let ctxLineFertility = document.getElementById("line-chart-fertility");
let ctxLineIntensity = document.getElementById("line-chart-intensity");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData3 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData4 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData5 = [13, 19, 34, 57, 72, 73, 78, 65];

ctxLineTemperature && new Chart(ctxLineTemperature.getContext("2d"), setOption(lineData1));
ctxLineHumidity && new Chart(ctxLineHumidity.getContext("2d"), setOption(lineData2));
ctxLineMoisture && new Chart(ctxLineMoisture.getContext("2d"), setOption(lineData3));
ctxLineFertility && new Chart(ctxLineFertility.getContext("2d"), setOption(lineData4));
ctxLineIntensity && new Chart(ctxLineIntensity.getContext("2d"), setOption(lineData5));

// Widget Line Chart
let ctxLineWSales = document.getElementById("line-chartw-sales");
let ctxLineWVisitors = document.getElementById("line-chartw-visitors");
let ctxLineWSold = document.getElementById("line-chartw-sold");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [227, 310, 332, 329, 338, 347, 352, 391];
var lineData3 = [78, 81, 115, 124, 131, 130, 127, 134];

ctxLineWSales && new Chart(ctxLineWSales.getContext("2d"), setOption(lineData1));
ctxLineWVisitors && new Chart(ctxLineWVisitors.getContext("2d"), setOption(lineData2));
ctxLineWSold && new Chart(ctxLineWSold.getContext("2d"), setOption(lineData3));

// Choices.js
let choiceElement = document.getElementById("js-choice");

if (choiceElement) {
  let choice = new Choices(choiceElement, {
    removeItemButton: true,
    items: ["Tag 1", "Tag 2", "Tag 3"]
  });

  document.getElementById("js-choice-res").value = choice.getValue(true);

  choiceElement.addEventListener("change", function() {
    document.getElementById("js-choice-res").value = choice.getValue(true);
  });
}

/**
 * Trigger input file
 * @param {node} element
 */
(function TriggerInpFile() {
  var inpFileTrigger = document.getElementsByClassName("btn-file");

  if (inpFileTrigger.length > 0) {
    var progress = document.querySelector(".file-container progress");
    var progressVal = 1;
    var id = setInterval(frame, 10);

    for (var i = 0; i < inpFileTrigger.length; i++) {
      inpFileTrigger[i].addEventListener("click", function() {
        this.nextElementSibling.click();
      });
    }
  }

  function frame() {
    if (progressVal >= 100) {
      clearInterval(id);
    } else {
      progressVal++;
      progress.value = progressVal + "";
    }
  }
})();

// Sortable
let sortableEl = document.getElementById("sortable");

sortableEl && new Sortable.create(sortableEl);
