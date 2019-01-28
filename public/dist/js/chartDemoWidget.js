"use strict";

// Line Chart
var ctxLine = document.getElementsByClassName("line-chart");
var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [227, 310, 332, 329, 338, 347, 352, 391];
var lineData3 = [78, 81, 115, 124, 131, 130, 127, 134];

function setOption(arr) {
  var options = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
      datasets: [{
        data: arr,
        backgroundColor: colorScheme.secondary,
        borderColor: colorScheme.secondary,
        borderWidth: 2,
        pointBackgroundColor: colorScheme.secondary,
        pointBorderWidth: 0
      }]
    },
    options: {
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 5
        }
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      }
    }
  };
  return options;
}

new Chart(ctxLine[0].getContext("2d"), setOption(lineData1));
new Chart(ctxLine[1].getContext("2d"), setOption(lineData2));
new Chart(ctxLine[2].getContext("2d"), setOption(lineData3));