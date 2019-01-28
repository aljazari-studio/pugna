"use strict";

// Line Chart
var ctxLine = document.getElementsByClassName("line-chart");
var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData3 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData4 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData5 = [13, 19, 34, 57, 72, 73, 78, 65];

function setOption(arr) {
  var options = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
      datasets: [{
        data: arr,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: colorScheme.secondary,
        borderWidth: 2
      }]
    },
    options: {
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
new Chart(ctxLine[3].getContext("2d"), setOption(lineData4));
new Chart(ctxLine[4].getContext("2d"), setOption(lineData5));